const Intern = require("../lib/intern");



describe("Employee class", () => {
    describe("Initialization", () => {
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
