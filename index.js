const fs = require('fs')
const inquirer = require('inquirer');

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const helper = require("./src/helper")

const allEmployees = []



inquirer
    .prompt([
        // THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee ID?",

        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",


        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the team manager's office number?",

        },

        // THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.managerOffice)
        allEmployees.push(manager)
        askMore()

    }
    )

function askMore() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add an additional employee?',
                name: 'moreEmplyees',
                choices: ['add an engineer', 'add an inturn', 'finished adding'],
                default: 'finished adding',
            },

        ])
        .then((data) => {
            if (data.moreEmplyees === 'add an engineer') {
                createEngineer()
            } else if (data.moreEmplyees === 'add an inturn') {
                createIntern()
            } else {
                console.log(allEmployees)


                //then the file is written into the directory. Any existing readme file will be overwritten.
                fs.writeFileSync('./dist/index.html', helper(allEmployees), (err) =>
                    err ? console.log(err) : console.log('Success!')
                );

            }

        })

}


function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's employee ID?",

            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email address?",
            },
            {
                type: 'input',
                name: 'gitUser',
                message: "What is the engineer's Github Username?",
            },
        ])
        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.gitUser)
            allEmployees.push(engineer)
            askMore()

        }
        )


}

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?",
            },
        ])
        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            allEmployees.push(intern)
            askMore()

        }
        )


}