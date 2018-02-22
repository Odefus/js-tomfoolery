var budgetController = (function() {
    
})();

var UIController = (function() {

})();

var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        console.log("HELLO");
    }

    document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);