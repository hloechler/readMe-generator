// Packages needed for this application
const inquirer = require ('inquirer')
const {writeFile} = require('fs').promises;
// An array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your project'
        },
        {
            type: 'list',
            name: 'contents',
            message: 'Add sections for your table of contents'
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
            message: 'Did anyone else contribute to the project and if so please list their names and links to GitHub?'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide examples of how you ran tests on the project so others may run the same tests'
        },
        {
            type: 'input',
            name: 'question',
            message: ' '

        }
    ])
};

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
const init = () => {
    questions()
    .then((answers) => writeToFile('README.md', writeFile(answers)))
    .then(() => console.log('The ReadMe file has successfully been created!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
