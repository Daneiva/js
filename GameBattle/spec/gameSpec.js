/**
 * Created by jimmymaldonado on 4/20/2015.
 */
describe("Calculator", function () {
    describe('Create Game',function(){

        /*Negative*/
        it("Should not be able to create a game with the board size outside of: "+ CONSTANTS.get("MIN_BOARD_SIZE") +
            " and "+CONSTANTS.get("MAX_BOARD_SIZE"), function () {
            expect(function () {new Game(1,-3,3);}).toThrow(undefined);
        });
        it("Should not be able to create a game with the number of players outside of: "+CONSTANTS.get("MIN_PLAYERS")+
            " and "+CONSTANTS.get("MAX_PLAYERS"), function () {
            expect(function () {new Game(10,3,3);}).toThrow(undefined);
        });
        it("Should not be able to create a game with the number of ships outside of: "+ CONSTANTS.get("MIN_SHIPS") +
            " and "+ (2 * CONSTANTS.get("MAX_BOARD_SIZE") - CONSTANTS.get("MAX_SIZE_SHIP")), function () {
            expect(function () {new Game(1,3,20);}).toThrow(undefined);
        });

        /*Positive*/
        it("Should be able to create a game with the board size between: "+ CONSTANTS.get("MIN_BOARD_SIZE") +
            " and "+CONSTANTS.get("MAX_BOARD_SIZE"), function () {
            var game = new Game(1,5,3);
            expect(game).toBeDefined();
        });
        it("Should be able to create a game with the number of players between: "+CONSTANTS.get("MIN_PLAYERS")+
            " and "+CONSTANTS.get("MAX_PLAYERS"), function () {
            var game = new Game(2,3,1);
            expect(game).toBeDefined();
        });
        it("Should be able to create a game with the number of ships between: "+ CONSTANTS.get("MIN_SHIPS") +
            " and ( 2 * boardSize + "+ CONSTANTS.get("MAX_SIZE_SHIP") + ")", function () {
            var game = new Game(1,5,7);
            expect(game).toBeDefined();
        });
    });
    describe('Validate shoot',function(){
        var game;
        beforeEach(function () {
            game = new Game(1,3,3);
        });
        afterEach(function () {
            game = null;
        });
        it("Should be not able to shoot outside the board", function () {
            game.setShoot();
        });

        it("Should be able to evaluate two numbers", function () {
            var actRes=calculator.add(1,2);
            var expRes=3;
            expect(actRes).toBe(expRes);
        });
    });
});
