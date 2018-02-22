// Function constructor

/*
var john = {
    name: "John", 
    yearOfBirth: 1990,
    job: "teacher"
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object.create
/*
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
    name: { value: "Jane" },
    yearOfBirth: { value: 1969 },
    job: { value: "designer" }
});
*/

// Passing functions as arguments

/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }

    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if (el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }    
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// Functions returning functions

/*
function interviewQuestion(job) {
    if (job === "designer") {
        return function(name) {
            console.log(name + ", can you please explain what UX design is?");
        }
    } else if (job === "teacher") {
        return function(name) {
            console.log("What subject do you teach, " + name + "?");
        }
    } else {
        return function(name) {
            console.log("Hello " + name + ", what do you do?");
        }
    }
}

var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

teacherQuestion("John");
designerQuestion("John");

interviewQuestion("teacher")("Mike");
*/

// IIFE

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);

