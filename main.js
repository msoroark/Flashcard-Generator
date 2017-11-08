//Require basic card 
var BasicCard = require("./BasicCard.js");

//Require cloze card 
var ClozeCard = require("./ClozeCard.js");

//Package requires
var inquirer = require("inquirer");


//Arrays for cards
var basicCards = [];
var clozeCards = [];

//Prompt for Cloze or Basic
var chooseCard = function() {
    inquirer.prompt([{
            name: 'Card',
            message: 'Please enter the card type you would like to build',
            type: 'list',
            choices: [{
                name: 'Basic'
            }, {
                name: 'Cloze'
            }]
        }])
        .then(function(answers) {

            if (answers.Card === 'Basic') {
                addBasic();
            } else if (answers.Card === 'Cloze') {
                addCloze();
            }
        });

};


//Function to add basic card
var addBasic = function() {
    inquirer.prompt([{
            name: 'question',
            message: "Enter a question"
        }, {
            name: 'answer',
            message: "Enter the correct answer"
        }])
        .then(function(answers) {

            //variable holding created card. 
            var newCard = new BasicCard(answers.question, answers.answer);

            //push new card to basic card array
            basicCards.push(newCard);

            console.log("\nBasic card created \nQuestion: " + answers.question +
                "\nAnswer: " + answers.answer);

            console.log(basicCards);

            whatsNext();

        })
};

//Function for a Cloze card
var addCloze = function() {


    inquirer.prompt([{
            name: 'text',
            message: 'Provide the full text',
        }, {
            name: 'cloze',
            message: 'What is the cloze portion?',
    }])
    .then(function(answers) {
    
    //Hold new clozecard constructor
    var newCard = new ClozeCard(answers.text, answers.cloze);

    //push to cloze card array. 
    clozeCards.push(newCard);

    console.log("\nCloze card created \nComplete Question: " + answers.text
				+ "\nCloze portion: " + answers.cloze);

    console.log(clozeCards);
    
    whatsNext();

});
}

//Prompt for next task, either review cards or add another. 

var whatsNext = function() {
    inquirer.prompt([{
            name: 'next',
            message: 'What would you like to do?',
            type: 'list',
            choices: [{
                name: 'Build a new card'
            }, {
                name: 'Review cards'
            }]
        }])
        .then(function(answers) {

            if (answers.next === 'Build a new card') {
                chooseCard();
            } else if (answers.next === 'Review cards') {
                review();
            }
        });
}

chooseCard();