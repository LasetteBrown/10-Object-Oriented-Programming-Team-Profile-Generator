const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
        super(name, id, email);
        this.github = gitUserName

    }
    getRole() {
        return "Engineer"
    }

    getGithub() {
        return this.github
    }

    getOther() {
        return "Github Username"
    }

}

module.exports = Engineer;


// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
