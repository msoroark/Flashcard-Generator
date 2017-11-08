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
    }]).then(function(answers) {

        if (answer.name === 'Basic') {
            addBasic();
        } else if (answer.name === 'Cloze') {
            addCloze();
        }
    });

};

chooseCard();

