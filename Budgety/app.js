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

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, description, value) {

            var newItem, ID;

            // Form the ID to be the last one incremented by one
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

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
        inputBtn: ".add__btn"
    };

    return {
        getinput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
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

    var ctrlAddItem = function() {
        var input, newItem;
        
        // Get the field input data
        input = UICtrl.getinput();
        
        // Add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        
    };

    return {
        init: function() {
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();