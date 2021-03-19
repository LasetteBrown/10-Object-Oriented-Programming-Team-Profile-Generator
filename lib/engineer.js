const Employee = require('./employee');


class Engineer extends Employee {
    constructor(name, id, email, gitUserName) {
        const other = gitUserName
        super(name, id, email, other);

    }

}

module.exports = Engineer;


// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
