const CheckboxPrompt = require("inquirer/lib/prompts/checkbox");

// array of questions for user
const techOptions = [];
const techChoices  [];
const questions = [
    {name: folder,
    type: input,
    message: "what folder will this README.md live in?"
    },
    {name: title,
    type: input,
    message: "what is the title of your project?",
    },
    {name: techUsed,
    type: CheckboxPrompt,
    message: "what is the title of your project?",
    choices: 
    },
    {name: missedTech,
    type: input,
    message: "type in any other technology you used that wasn't listed in the prompt before. separate by ','"
    }
    {name: title
    type: input,
        message: "what is the title of your project?",
        },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
