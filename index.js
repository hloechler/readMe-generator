// TODO: Include packages needed for this application
const inquirer = require ('inquirer')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Add a description of your project'
        },
        {
            type: 'list',
            name: 'Contents',
            message: 'Add sections for your table of contents'
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How do you install your application?'
        },
        {
            type: 'input',
            name: 'Usage',
            message:'How do you use your application?'
        },
        {
            type: 'list',
            name: 'License',
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
        }
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
