const Employee = require("../lib/employee")

const helper = (allEmployees) => {


    function createManager(manager) {


        return `    </div>
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.getName()}</h5>
            <p class="card-text">${manager.getRole()}</p>
        </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">email: <a href= "mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class="list-group-item">${manager.getOther()}: ${manager.getOffice()}</li>
    </ul>
    </div>`


    }


    function createEngineer(engineer) {


        return `    </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.getName()}</h5>
                <p class="card-text">${engineer.getRole()}</p>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">email: <a href= "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">${engineer.getOther()}:<a target='_blank' href="https://github.com/${engineer.getGithub()} ">${engineer.getGithub()}</a></li>
        </ul>
        </div>`


    }
    function createIntern(intern) {

        return `    </div>
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.getName()}</h5>
                <p class="card-text">${intern.getRole()}</p>
            </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">email: <a href= "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">${intern.getOther()}: ${intern.getSchool()}</li>
        </ul>
        </div>`

    }

    const html = []

    html.push(allEmployees.filter(employee => employee.getRole() === "Manager").map(manager => createManager(manager)))

    html.push(allEmployees.filter(employee => employee.getRole() === "Engineer").map(engineer => createEngineer(engineer)))

    html.push(allEmployees.filter(employee => employee.getRole() === "Intern").map(intern => createIntern(intern)))

    return html.join('')
}

module.exports = allEmployees => {
    return `<!doctype html>
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
    <main id = "team-cards">

    ${helper(allEmployees)}

    </main >


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
    crossorigin="anonymous"></script>
</body >

</html > `


}

