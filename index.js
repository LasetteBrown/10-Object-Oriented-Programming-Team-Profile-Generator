const fs = require('fs')
const inquirer = require('inquirer');

const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");


const allEmployees = []
const teamCards = []

function createCards() {

    allEmployees.forEach(person => {
        let card = `
        <div class="card" style="width: 18rem;">

        <div class="card-body">
            <h5 class="card-title">${person.name}</h5>
            <h6 class="card-text">${person.getRole()}</h6>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${person.id}</li>
            <li class="list-group-item">email: <a href='mailto:${person.email}'>${person.email}</a>
            </li>
            <li class="list-group-item">${person.getOther()}:${person.other}</li>
        </ul>
    </div>
`
        teamCards.push(card)
    });
    console.log(teamCards)
}

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
                createCards()
                const htmlTemplate = `<!doctype html>
                <html lang="en">
                
                <head>
                    <!-- Required meta tags -->
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                
                    <!-- Bootstrap CSS -->
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
                        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
                    <link href="./style.css" rel="stylesheet">
                    <title>My Team</title>
                </head>
                
                <body>
                    <header>
                        <h1>My Team</h1>
                
                    </header>
                    <main>
                    ${teamCards.join('')}
                    </main>
                
                
                    <!-- Option 1: Bootstrap Bundle with Popper -->
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
                        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
                        crossorigin="anonymous"></script>
                
                </body>
                
                </html>`
                //then the file is written into the directory. Any existing readme file will be overwritten.
                fs.writeFile('../dist/index.html', htmlTemplate, (err) =>
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