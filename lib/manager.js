const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        const other = officeNumber
        super(name, id, email, other)
    }
}


module.exports = Manager;


// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
