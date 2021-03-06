// TODO: Include packages needed for this application

    // importing the package/module: inquirer
const inquirer = require('inquirer');
    // importing the package/module: fs -file system
const fs = require('fs');
    // need to pull the generateMarkdown file-- activity 15 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project\'s title?',
        name: 'title' // The name property is a must since it is used in the storing of answers
    },

    {
        type: 'input',
        message: 'Provide a short description of your project',
        name: 'description'
    },
    
    {
        type: 'input',
        message: 'What steps and packages are required to install your project?',
        name: 'Installation'
    },
    
    {
        type: 'input',
        message: 'Provide usage instructions and/or upload a visual.',
        name: 'Usage'
    },

    {
        type: 'input',
        message: 'Did you collaborate with anyone on this project?',
        name: 'Credits'
    },
    
    {
        type: 'input',
        message: 'Provide guidelines on how other developers can contribute.',
        name: 'How to Contribute'
    },
    
    {
        type: 'input',
        message: 'If you wrote any tests, explain how developers can run them.',
        name: 'Tests'
    },
    

    {
        type: 'checkbox',
        message: 'What type of license was used?',
        name: 'License',
        choices: [
            {name: 'MIT', value: 'mit'},
            {name: 'Apache', value: 'apache'},
            {name: 'GPLv3', value: 'gplv3'},
            {name: 'Other', value: 'other'},
        ]
    },
    
    {
        type: 'input',
        message: 'Do you want to include any badges?',
        name: 'Badges'
    },
    
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Questions'
    },

    {
        type: 'input',
        message: 'What is your email?',
        name: 'Contact'
    },
];
// we are dealing with a pre-built function 
 //allows us to do something with the the dot relates to an object  
//  --promise based method/function- whatever I append .then to- do this then do that and promise me it will do something
// .then(function (answer){  //will only work if after ) or directly on next line--no empty spaces
//     console.log(answer.title);  //when you see a dot it is a dead giveaway that you are working w/objects, to the left of . data passed back feom prompt method and gives acces to the .then. to the right of it is a property or method, in this case if after the name if there is a set of () then it is an object function aka method if doesn't have it then just a property.
// });

// a function to write README file
function writeToFile(fileName, data) { //parameters
     // err catch taken from activity 13 line 15-16
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');  
        
});
}
    
//  Create a function to initialize app
function init() {
    inquirer.prompt(questions) //calling/passing the questions object from above--.using the prompt method from inquirer (object) module that I imported at the top 
    .then(function (responses){          //after ?'s are asked .then returns promise and gives data (aka the answers) and then
        writeToFile('./dist/README.md', generateMarkdown(responses));  //-calling writeToFile function and passing arguments: 1. fileName is now path of where to create the file 2. data is now pulling template literal from generateMarkdown file which contains answers to questions
        // console.log(responses.title)
        // return questions;
    })};


// Function call to initialize app
init();
