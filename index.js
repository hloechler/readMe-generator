// Packages needed for this application
const inquirer = require ('inquirer')
const fs = require('fs');
// An array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'How do you install your application?'
        },
        {
            type: 'input',
            name: 'usage',
            message:'How do you use your application?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license did you use?',
            choices: ['MIT', 'Apache', 'GNU', 'GPL', 'N/A']
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did anyone else contribute to the project? If so please list their names and links to GitHub. If not please press enter.'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples of how you ran tests on the project so others may run the same tests. If not please press enter.'
        },
        {
            type: 'input',
            name: 'question',
            message: 'Please provide your GitHub link:'

        },
        {
        type: 'input',
            name: 'question2',
            message: 'Please provide your email address:'
        },
        {
        type: 'input',
            name: 'question3',
            message: 'Please leave additional instructions on the best way to contact you:'
        },
        
    ])
    .then((answers) => {
        const readMeFile = writeToFile(answers);
        fs.writeFile('readme.md', readMeFile, (err) => 
        err ? console.log(err) : console.log ('The readMe file has been created!')
        );
    });

// TODO: Create a function to write README file
const writeToFile = ({ title, description, installation, usage, license, contributors, tests, question, question2, question3 }) => 
`# ${title}
## Description
${description}
## Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#question)
## Installation
${installation}
## Usage
${usage}
## License
This application is covered under the ${license} license.
## Contributors
${contributors}
## Tests
${tests}
## Questions
<a>${question}</a>
<a>${question2}</a>
${question3}`




