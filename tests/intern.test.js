const Intern = require("../lib/intern");



describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const person = new Intern();

            expect("name" in person).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const name = 'Sam';

            const person = new Intern(name);

            expect(person.name).toEqual('Sam');
        });
    })
})
