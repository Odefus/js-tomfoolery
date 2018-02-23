var budgetController = (function() {
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
            sum += cur.value;
        });

        data.totals[type] = sum;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    };

    return {
        addItem: function(type, des, val) {

            var newItem, ID;

            // Form the ID to be the last one incremented by one
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            // Select the correct type of item to build
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }
            
            // Add the new item to the correct list
            data.allItems[type].push(newItem);

            // Return the new item to the caller
            return newItem;
        },

        calculateBudget: function() {

            // Calculate total income and expenses
            calculateTotal("exp");
            calculateTotal("inc");

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of income that we spent
            if (data.totals.income > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },

        testing: function() {
            console.log(data);
        }
    };

})();

var UIController = (function() {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            // Create HTML string with placeholder text
            if (type === "inc") {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }

            // Replace the placeholder text with some actual data
            newHtml = html.replace("%id%", obj.id)
                .replace("%value%", obj.value)
                .replace("%description%", obj.description);

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        },

        clearFields: function() {
            var fields, fieldsArray;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ", " + DOMstrings.inputValue);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArray[0].focus();
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                ctrlAddItem();
            }
        });
    };

    var updateBudget = function() {

        // Calculate the budget
        budgetCtrl.calculateBudget();

        // Return the budget
        var budget = budgetCtrl.getBudget();

        // Display the budget on the UI
    }

    var ctrlAddItem = function() {
        var input, newItem;
        
        // Get the field input data
        input = UICtrl.getinput();

        // Check if the input is valid
        if(input.description !== "" && !isNaN(input.value) && input.value > 0) {

            // Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
        
            // Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // Clear the fields
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();
        }
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();