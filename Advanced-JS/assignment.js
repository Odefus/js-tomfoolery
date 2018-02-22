(function() {
    var Question = function(q, choices, correct) {
        this.q = q;
        this.choices = choices;
        this.correct = correct;
    }
    
    var questions = [];
    
    questions.push(new Question("1 + 1", [1,2,3,4], 1));
    questions.push(new Question("2 + 2", [2,4,6,8], 1));
    questions.push(new Question("3 + 3", [1,3,6,9], 2));
    questions.push(new Question("4 + 4", [1,2,4,8], 3));
    
    function getRandomQ(qArr) {
        var rand = Math.floor(Math.random() * qArr.length);
        return qArr[rand];
    }
    
    function logQ(q) {
        console.log("Solve: " + q.q)
        for (var i = 0; i < q.choices.length; i++) {
            console.log(i + ": " + q.choices[i]);
        }
    }
    
    (function (questions) {
        var score = 0;
        var currentQuestion;
        var a;
    
        while (true) {
            currentQuestion = getRandomQ(questions);
    
            console.log(" ");
            console.log("Your current score: " + score);
            logQ(currentQuestion);
    
            a = prompt("Insert your answer or type exit to stop the game loop");
    
            if(a === "exit") { 
                break; 
            } else if (Number(a) === currentQuestion.correct) {
                score++;
                console.log("Correct!");
            } else {
                console.log("Incorrect!");
            }
        }
    })(questions);
})();