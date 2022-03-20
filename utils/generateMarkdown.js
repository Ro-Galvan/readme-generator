// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// re-wrote to following:
// var renderLicenseBadge = (license) => {
//   if()
  
//   return license
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

# Description
  ${data.description}

  Link to github repo:
  https://github.com/${data.Questions}/${data.title}

# Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Badges](#badges)
  - [Questions](#questions)
# Installation
  Follow the below steps: 
  ${data.Installation}
# Usage
  ${data.Usage}
# Credits
  ${data.Credits}
# How to Contribute
  ${data.HowtoContribute}
# Tests
  ${data.Tests}
# License
  ${data.License}
# Badges
  ${data.Badges}
# Questions
  Link to my github:
  https://github.com/${data.Questions}
 
  Contact me:
  ${data.Contact}
`;
}


// function writeToFile(fileName, data) {
//     return`# ${data.title}
//     
//     `
// };

module.exports = generateMarkdown; //if you add the license function change to module.export.generateMarkdown = generateMarkdown; + the 2nd function name in same style
