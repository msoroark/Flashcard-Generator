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

chooseCard();

//Function to add basic card
var addBasic = function() {
    inquirer.prompt([{
        name: 'Question',
        message: "Enter a question"
    }, {
        name: 'Answer',
        message: "Enter the correct answer"
    }])
    .then(function(answers) {

        basic = BasicCard(answers.Question, answers.Answer);

        basicCards.push(basic);

        console.log("\nNew card created! \nQuestion: " + answers.Question +
            "\nAnswer: " + answers.Answer);

    })
};