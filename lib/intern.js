const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.other = school

    }
    getRole() {
        return "Intern"
    }
    getOther() {
        return "School"
    }

}

module.exports = Intern;
// name, ID, email, and school