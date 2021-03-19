const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        const other = school
        super(name, id, email, other);

    }

}

module.exports = Intern;
// name, ID, email, and school