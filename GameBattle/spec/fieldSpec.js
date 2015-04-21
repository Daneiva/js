/**
 * Created by RodrigoZarate on 4/20/2015.
 */
describe('Field', function(){
    describe('Test Cases to Field', function(){
        var field;
        beforeEach(function(){
            field = new Field();
        });
        afterEach(function(){
            field = null;

        });
        it('should be able to generate a field of N * N',function(){
            var actField = field.getField().length * field.getField()[0].length;
            var expected = CONSTANTS.get("BOARD_SIZE") * CONSTANTS.get("BOARD_SIZE");

            console.log("actual Result: "+actField);
            console.log("expected Result: "+expected);

            expect(actField).toBe(expected);
        });
        it('should be able to create the ships defined ',function(){
            field.putShips();
            var actRes = field.getShips().length;
            var expRes = CONSTANTS.get("TOTAL_SHIPS");

            console.log("actual Result: "+actRes);
            console.log("expected Result: "+expRes);

            expect(actRes).toBe(expRes);
        });

        it('should be able to generate a ship of size in X less or equal to the field size',function(){
            var actRes = field.generateSizeAndPosition()[0];
            var expRes = CONSTANTS.get("BOARD_SIZE") + 1;
            expect(actRes).toBeLessThan(expRes);

        });

        it('should be able to generate a ship of size in Y less or equal to the field size',function(){
            var actRes = field.generateSizeAndPosition()[1];
            var expRes = CONSTANTS.get("BOARD_SIZE") + 1;
            console.log("actual Result: "+actRes);
            console.log("expected Result: "+expRes);
            expect(actRes).toBeLessThan(expRes);

        });

        it('should be able to generate a ship in the position in X less or equal to the field size',function(){
            var actRes = field.generateSizeAndPosition()[2];
            var expRes = CONSTANTS.get("BOARD_SIZE") + 1;
            console.log("actual Result: "+actRes);
            console.log("expected Result: "+expRes);
            expect(actRes).toBeLessThan(expRes);

        });

        it('should be able to generate a ship in the position in Y less or equal to the field size',function(){
            var actRes = field.generateSizeAndPosition()[3];
            var expRes = CONSTANTS.get("BOARD_SIZE") + 1;

            console.log("actual Result: "+actRes);
            console.log("expected Result: "+expRes);

            expect(actRes).toBeLessThan(expRes);
        });

    });
});
