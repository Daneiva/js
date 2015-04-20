/**
 * Created by jimmymaldonado on 4/20/2015.
 */
describe("Game", function () {
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
});
