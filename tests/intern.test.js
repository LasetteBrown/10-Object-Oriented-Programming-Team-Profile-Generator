const Intern = require("../lib/intern");



describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const person = new Intern();

            expect("school" in person).toEqual(true);
        });

        it("should return intern when the getRole function is called", () => {

            const person = new Intern();

            expect(person.getRole()).toEqual("Intern");
        });

        it("should set 'school' when created", () => {
            const school = 'Arizona State University';

            const person = new Intern("Lucy", 3, "lucy@mail.com", "Arizona State University");

            expect(person.school).toEqual(school);
        });
    })
})
