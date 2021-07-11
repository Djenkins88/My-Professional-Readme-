const inquirer = require('inquirer');
const fs = require('fs');

// using inquirer to prompt user for questions
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter your project title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Giva a description of your project?",
        },
        {
            type: 'input',
            name: 'installation',
            message: "Describe the installation process?",
        },
        {
            type: 'input',
            name: 'usage',
            message: "Giva a instructions on usage.",
        },
        {
            type: 'name',
            name: 'contributing',
            message: "Who are the contributors to this project?",
        },
        {
            type: 'input',
            name: 'tests',
            message: "How would you run test for this project?",
        },
        {
            type: 'list',
            name: 'license',
            message: "Choose a  license for this project",
            choices: [
                'Apache',
                'GPLv3',
                'BSD 3-clause',
                'MIT',
                'GPLv2',
                'BSD 2-clause',
                'LGPLv3',
                'AGPLv3'
            ]
        },
        {
            type: 'input',
            name: 'Gihub',
            message: "Enter your GitHub username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter your email?",
        },
    ])
// using .then to return data then setting up Readme file 
.then((answers) => {
    const newFile = 'README.md';
    const readMeContent =  `
     ${answers.title}
    

    ![license](https://img.shields.io/badge/License-${answers.license}-brightgreen)

 ## Table of Contents
 * [Description](#Description)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [Contributing](#Contributing)
 * [Tests](#Tests)
 * [License](#License)
 * [Questions](#Questions)

 ## Description
 ${answers.description}
        
 ## Installation
 ${answers.installation}

 ## Usage
 ${answers.usage}

 ## Contributing
 ${answers.contributing}

 ## Tests
 ${answers.tests}

 ## Questions
 If you have any questions you can message using GitHub or Email.
 
 Find me on GitHub: https://github.com/${answers.username}

 Email: ${answers.email}

 ## License
 ${answers.license}`

 // checking if there are any errors
    fs.writeFile(newFile, readMeContent, (err) => {
    if (err) {
        console.log(err);
        }
    })
});
