/**
 * Created by jimmymaldonado on 4/20/2015.
 */
describe("Calculator", function () {
    describe('Create Game',function(){
        it("Should be not able to create a game with two players", function () {
            expect(function () {calculator.add('a','b');}).toThrow('Error: Enter valid numbers');
        });

        it("Should be able to evaluate two numbers", function () {
            var actRes=calculator.add(1,2);
            var expRes=3;
            expect(actRes).toBe(expRes);
        });
    });
    describe('Validate shoot',function(){
        var game;
        beforeEach(function () {
            game = new Ga
        });
        afterEach(function () {
            game = null;
        });
        it("Should be not able to evaluate two letters", function () {

        });

        it("Should be able to evaluate two numbers", function () {
            var actRes=calculator.add(1,2);
            var expRes=3;
            expect(actRes).toBe(expRes);
        });
    });
});
