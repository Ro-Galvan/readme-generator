// TODO: Include packages needed for this application

// importing the package: inquirer
const inquirer = require('inquirer');
const fs = require('fs');
// need to pull the generateMarkdown file-- activity 15 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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


function writeToFile(fileName, data) {
    return`# ${data.title}
    # Description
    ${data.description}
    # Table of Contents
    - [Installation](#installation)
    - [Usage](#ssage)
    - [Credits](#credits)
    - [License](#license)
    - [Badges](#badges)
    - [Contact](#contact)
    # Installation
    Following the below steps: 
    ${data.Installation}
    # Usage
    ${data.Usage}
    # Credits
    ${data.Credits}
    # Username
    Link to deployed website:
    https://github.com/${data.Username}/${data.title}
    # License
    ${data.License}
    # Badges
    ${data.Badges}
    # Contact
    ${data.Contact}
    `
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) return console.log(err)});
    };

// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data)
    }
)}

// Function call to initialize app
init();