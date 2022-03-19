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
`;
}


// function writeToFile(fileName, data) {
//     return`# ${data.title}
//     
//     `
// };

module.exports = generateMarkdown; //if you add the license function change to module.export.generateMarkdown = generateMarkdown; + the 2nd function name in same style
