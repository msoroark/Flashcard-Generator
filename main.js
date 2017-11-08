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
            message: 'Please enter what you would like to do: ',
            type: 'list',
            choices: [{
                name: 'Create Basic Flash Card'
            }, {
                name: 'Create Basic Cloze Card'
            }, {
                name: 'Review Current Cards'
            }]
        }])
        .then(function(answers) {

            if (answers.Card === 'Create Basic Flash Card') {
                addBasic();
            } else if (answers.Card === 'Create Basic Cloze Card') {
                addCloze();
            } else if (answers.Card === 'Review Current Cards') {
                review();
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

            console.log("\nCloze card created \nComplete Question: " + answers.text +
                "\nCloze portion: " + answers.cloze);

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


//Function for looking at completed Cards
var review = function() {
    inquirer.prompt([{
            name: 'reviewWhat',
            message: 'Which cards would you like to review?',
            type: 'list',
            choices: [{
                name: 'Basic Cards',
            }, {
                name: 'Cloze Cards'
            }]
        }])
        .then(function(answers) {
            if (answers.reviewWhat === 'Basic Cards') {
                showCardBasic();
            }
        })

}

var showCardBasic = function() {
	//Loop through array
    for (i = 0; i < basicCards.length; i++) {

        //Putting the front and back into  variables.
        var question = basicCards[i].front;
        var correct = basicCards[i].back;

        console.log(question);
        console.log(correct);
        //Prompt user for the answer. 
        inquirer.prompt([{
                name: "answer",
                message: question,
            }])
            .then(function(answer) {
                if (answer.answer === correct) {
                    console.log("Correct! Great Job!");
                    showCardBasic();

                } else {
                    inquirer.prompt([{
                            name: 'incorrect',
                            message: 'Would you like to...',
                            type: 'list',
                            choices: [{
                                name: 'Try Again'
                            }, {
                                name: 'New Card'
                            }, {
                                name: 'Show Answer'
                            }]

                        }])
                        .then(function(answer) {

                        });
                }
            })
    }
}

chooseCard();


var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

basicCards.push(firstPresident);
clozeCards.push(firstPresidentCloze);