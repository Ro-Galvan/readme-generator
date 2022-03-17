// TODO: Include packages needed for this application
// importing the package: inquirer
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        message: 'Your Project\'s Title?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description'
    },
    
    {
        type: 'input',
        message: '',
        name: 'description'
    },
])
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
