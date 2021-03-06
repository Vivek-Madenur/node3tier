// Requiring module
const assert = require('assert');

// We can group similar tests inside a describe block
describe("Simple Calculations", () => {
    before(() => {
        console.log("**********WEB TESTING BEGIN***********");
    });

    after(() => {
        console.log("**********WEB TESTING END***********");
    });

    // We can add nested blocks for different tests
    describe("Test1", () => {
        beforeEach(() => {
            console.log("----------------");
        });

        it("Is returning 5 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5);
        });

        it("Is returning 6 when multiplying 2 * 3", () => {
            assert.equal(2 * 3, 6);
        });
    });

    describe("Test2", () => {
        beforeEach(() => {
            console.log("----------------");
        });

        it("Is returning 4 when adding 2 + 3", () => {
            assert.equal(2 + 3, 5);
        });

        it("Is returning 8 when multiplying 2 * 4", () => {
            assert.equal(2 * 4, 8);
        });
    });
});

