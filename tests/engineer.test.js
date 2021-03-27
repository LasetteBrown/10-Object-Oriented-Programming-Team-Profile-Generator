const Engineer = require("../lib/engineer");



describe("Employee class", () => {
    describe("Initialization", () => {
        it("should return an object containing a 'github' property when called with the 'new' keyword", () => {
            const person = new Engineer();

            expect("github" in person).toEqual(true);
        });

        it("should return engineer when the getRole function is called", () => {

            const person = new Engineer();

            expect(person.getRole()).toEqual("Engineer");
        });

        it("should return the website for the github user when the getGithub function is called", () => {

            const githubAddress = `LasetteBrown`

            const person = new Engineer("Lasette", 3, "lasette@gmail.com", "LasetteBrown");

            expect(person.getGithub()).toEqual(githubAddress);
        });

    })
})
