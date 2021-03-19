const fs = require('fs')
const inquirer = require('inquirer');

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


const allEmployees = []

inquirer
    .prompt([
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: async (input) => {
                if (typeof input !== "string") {
                    return 'Invalid entry';
                }
            },
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",
            validate: async (input) => {
                if (typeof input !== "number") {
                    return 'Invalid entry';
                }
            },

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
            validate: async (input) => {
                const required = '@'
                if (!required.test(input)) {
                    return 'Invalid entry';
                }
            },


        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",
            validate: async (input) => {
                if (typeof input !== "number") {
                    return 'Invalid entry';
                }
            },

        },

        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
        {
            type: 'list',
            message: 'Would you like to add an additional employee?',
            name: 'moreEmplyees',
            choices: ['add an engineer', 'add an inturn', 'finished adding'],
            default: 'finished adding',
        },

    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.managerOffice)
        allEmployees.push(manager)

        if (data.moreEmplyees === 'add an engineer') {
            //run inquirer again with additional questions
        } else if (data.moreEmplyees === 'add an inturn') {
            //run inquirer again with additional questions
        } else {
            const htmlTemplate = ``
            //then the file is written into the directory. Any existing readme file will be overwritten.
            fs.writeFile('../dist/index.html', htmlTemplate, (err) =>
                err ? console.log(err) : console.log('Success!')
            );

        }

    }
    )


//pseudocode
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated