const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber

    }
    getRole() {
        return "Manager"
    }

    getOther() {
        return "Office Number"
    }

    getOffice() {
        return this.officeNumber
    }

}


module.exports = Manager;


// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
