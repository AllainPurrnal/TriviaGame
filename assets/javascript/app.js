$(document).ready(function() {
    
var triviaQuestions = [
    questions = [
            "What are a group of cats called?", "What are a group of kittens called?","How many muscles do cats have in their ears?","How many teeth do cats have?","What is the top speed of cats?","A cat can jump about __ times their length.","On average, how long do cats spend asleep per day?","Which behavior did cats develop to exclusively communicate with humans?","A cat with a question-mark shaped tail is asking...","When was the first known cat video recorded?"
    ],//end of questions array
    answerList = [
            {   choice: ["A Cloward", "A Murder", "A Cauldron", "A Sleuth"],
                correctAnswer: "A Cloward",
            },
            {   choice: ["A Gang", "A Pod", "A Kindle", "An Army"],
                correctAnswer: "A Kindle",
            },
            {   choice: ["12", "24", "32", "30"],
                correctAnswer: "32",
            },
            {   choice: ["52", "28", "42", "30"],
                correctAnswer: "30",
            },
            {   choice: ["47mph", "30mph", "27mph", "18mph"],
                correctAnswer: "30mph",
            },
            {   choice: ["6", "4", "7", "5"],
                correctAnswer: "6",
            },
            {   choice: ["1/2", "2/3", "1/3", "3/4"],
                correctAnswer: "2/3",
            },
            {   choice: ["Kneading", "Purring", "Meowing", "Staring"],
                correctAnswer: "Meowing",
            },
            {   choice: ["Who are you?", "Feed me!", "Where am I?", "Want to play?"],
                correctAnswer: "Want to play?",
            },
            {   choice: ["1872", "1894", "1901", "1920"],
                correctAnswer: "1894",
            },
    ]//end of answerList array
]//end triviaQuestions array thing 

var correct = 0;
var questionTracker = 0;
var i = 0;
var gameEnd = false;
var userChoice;

function gameDisplay() {
    //Question output
    $('#question').html("<h2>" + triviaQuestions[0][i] + "</h2>");
    //Choice output
    $('#an1').html("<h3>" + triviaQuestions[1][i].choice[0] + "</h3>");
    $('#an2').html("<h3>" + triviaQuestions[1][i].choice[1] + "</h3>");
    $('#an3').html("<h3>" + triviaQuestions[1][i].choice[2] + "</h3>");
    $('#an4').html("<h3>" + triviaQuestions[1][i].choice[3] + "</h3>");
};

function buttonClick() {    
    //MAH BUTTONS, making sure they actually work...
    $('#an1').on("click", function() {
        userChoice = triviaQuestions[1][i].choice[0];
        answerCheck();
    });

    $('#an2').on("click", function() {
        userChoice = triviaQuestions[1][i].choice[1];
        answerCheck();
    });

    $('#an3').on("click", function() {
        userChoice = triviaQuestions[1][i].choice[2];
        answerCheck();
    });

    $('#an4').on("click", function() {
        userChoice = triviaQuestions[1][i].choice[3];
        answerCheck();
    });
};

function answerCheck() {
    if (userChoice == triviaQuestions[1][i].correctAnswer) {
        correct++;
        $('#question').html('<h3> Correct! </h3>');
        $('#answer').html('<img src="assets/images/correct.gif" alt="Celebratory Cat">');
    } else {
        $('#question').html('<h3> Wrong! </h3>');
        $('#answer').html('<h3> The correct answer is: ' + triviaQuestions[1][i].correctAnswer + '</h3>');
        $('#answer').append('<img src="assets/images/wrong.gif" alt="Crying Cat">');
    }  
};

gameDisplay();
buttonClick();

//
//testing zone, don't add anything above this line!!!
//


}); //end of document.ready