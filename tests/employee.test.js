const Employee = require("../lib/employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const person = new Employee();

            expect("name" in person).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const name = 'Sam';

            const person = new Employee(name);

            expect(person.name).toEqual('Sam');
        });

    })
})
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