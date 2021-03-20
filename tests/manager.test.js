const Manager = require("../lib/manager");



describe("Employee class", () => {
    describe("Initialization", () => {

        it("should return manager when the getRole function is called", () => {

            const person = new Manager();

            expect(person.getRole()).toEqual("Manager");
        });

        it("should set 'officeNumber' when created", () => {
            const officeNumber = 400;

            const person = new Manager("Lucy", 4, "Lucy@gmail.com", 400);

            expect(person.officeNumber).toEqual(officeNumber);
        });
    })
})
