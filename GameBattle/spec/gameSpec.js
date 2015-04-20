/**
 * Created by jimmymaldonado on 4/20/2015.
 */
describe("Calculator", function () {
    describe('Add',function(){
        var game;
        beforeEach(function () {
            game = new Calculator();
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
    it("Should be able to substract two numbers",function () {
        var calculator = new Calculator();
        var actRes=calculator.substract(2,1);
        var expRes=1;
        expect(actRes).toBe(expRes);
        expect(1).toBe(calculator.substract(5,4));
    });
    it("Should be able to multiply two numbers", function () {
        var calculator = new Calculator();

        var actRes=calculator.multiply(2,1);
        var expRes=2;

        expect(actRes).toBe(expRes);
    });
    it("Should be able to divide two numbers", function () {
        var calculator = new Calculator();

        var actRes=calculator.divide(2,1);
        var expRes=2;

        expect(actRes).toBe(expRes);
    });

});
