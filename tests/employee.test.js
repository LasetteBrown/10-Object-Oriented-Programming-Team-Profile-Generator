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

        it("should return the name of the employee when the getName function is called", () => {
            const name = "Sam"

            const person = new Employee(name, 12, "Sam@gmail.com");

            expect(person.getName()).toEqual("Sam")
        });

        it("Should return the id when the getId function is called", () => {
            const id = 219

            const person = new Employee("Sam", id, "Sam@gmail.com");

            expect(person.getId()).toEqual(219)
        });

        it("Should return the email when the getEmail function is called", () => {
            const email = "sam@mail.com"

            const person = new Employee("Sam", 1, email);

            expect(person.getEmail()).toEqual("sam@mail.com")
        });

        it("Should return the role when the getRole function is called", () => {
            const role = "employee"

            const person = new Employee("Sam", 1, "sam@mail.com");

            expect(person.getRole()).toEqual("employee")
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