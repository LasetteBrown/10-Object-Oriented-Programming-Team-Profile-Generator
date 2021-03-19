const Engineer = require("../lib/engineer");



describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'name' property when called with the 'new' keyword", () => {
            const person = new Engineer();

            expect("name" in person).toEqual(true);
        });

        it("should set 'name' when created", () => {
            const name = 'Sam';

            const person = new Engineer(name);

            expect(person.name).toEqual('Sam');
        });
    })
})
