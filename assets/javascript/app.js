$(document).ready(function() {

var triviaOne = {
    question: "What are a group of cats called?",
    choice: ["A Cloward", "A Murder", "A Cauldron", "A Sleuth"],
    //correct answer A
};

var triviaTwo = {
    question: "What are a group of kittens called?",
    choice: ["A Gang", "A Pod", "A Kindle", "An Army"],
    //correct answer C
};

var triviaThree = {
    question: "How many muscles do cats have in their ears?",
    choice: ["12", "24", "32", "30"],
    //correct answer C
};

var triviaFour = {
    question: "How many teeth do cats have?",
    choice: ["52", "28", "42", "30"],
    //correct answer D
};

var triviaFive = {
    question: "What is the top speed of cats?",
    choice: ["47", "30", "27", "18"],
    //correct answer B
};


//JavaScript logic test

//Title output test
$('#question').html("<h2>" + triviaOne.question + "</h2>");
console.log(triviaOne.question);

//Choice output test, possibly put this into a function/for loop
$('#an1').html("<h3>" + triviaOne.choice[0] + "</h3>");
$('#an2').html("<h3>" + triviaOne.choice[1] + "</h3>");
$('#an3').html("<h3>" + triviaOne.choice[2] + "</h3>");
$('#an4').html("<h3>" + triviaOne.choice[3] + "</h3>");

for (var i = 0; i < 4; i++) {
    console.log(triviaOne.choice[i]);
}

//Click event test, we'll see if this works :/
$('an1').on("click", function() {
    console.log("This button works!");
});

});