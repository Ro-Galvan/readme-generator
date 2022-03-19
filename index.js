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
        message: 'Your Project\'s Title?',
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
        message: 'What is your github username?',
        name: 'Username'
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) { //ppparameters
     // err catch taken from activity 13 line 15-16
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');  //is this the promise?
                // fs.writeFile('./dist/README.md', data, (err) => {
                    // console.log(fileName);
                    // console.log(data);
});
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions) //calling/passing the questions object from above--.using the prompt method from inquirer (object) module that I imported at the top 
    .then(function (responses){          //after ?'s are asked .then returns promise and gives data (aka the answers) and then
        writeToFile('./dist/README.md', generateMarkdown(responses));  //-calling writeToFile function and passing arguments: 1. fileName is now path of where to create the file 2. data is now pulling template literal from generateMarkdown file which contains answers to questions
        console.log(responses.title)
        // return questions;
    })};
// )}

// Function call to initialize app
init();

// return new Promise((resolve, reject) => {
    
// });



// var num1 = 1;
// var num2 = 2;
// function addNums(chocolate, mountaintop) {
//     return chocolate + mountaintop;
// }

// addNums(num1, num2);