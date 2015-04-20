
describe('Ship', function(){
    describe('Status of the Ship', function(){
        var f;
        var ship;
        beforeEach(function(){
            CONSTANTS.set("BOARD_SIZE",10);
            CONSTANTS.set("TOTAL_SHIPS",1);
            f= new Field();
            f.putShips();
            ship = f.getShips()[0];
        });
        afterEach(function(){
            f= null;

        });
        it('should be able to update the status to ship to "Die"',function(){
            for (var i = 0; i < ship.sizeX; i++) {
                for (var j = 0; j < ship.sizeY; j++) {
                    f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                }
            }
            ship.updateStatus(f.getField());
            var actRes=ship.getStatus();
            var expRes="Die";
            expect(actRes).toBe(expRes);
        });
        it('should be able to update the status to ship to "Live"',function(){
            ship.updateStatus(f.getField());
            var actRes=ship.getStatus();
            var expRes="Live";
            expect(actRes).toBe(expRes);
        });
        it('should be able to update the status to ship to "Live"' +
           ' when size of ship < number of hits',function(){
            if (ship.sizeX==1){
                for ( i = 0; i < ship.sizeX; i++) {
                    for (var j = 0; j < ship.sizeY-1; j++) {
                        f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                    }
                }
            }
            else {
                for ( i = 0; i < ship.sizeX-1; i++) {
                    for (var j = 0; j < ship.sizeY; j++) {
                        f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                    }
                }
            }
            ship.updateStatus(f.getField());
            var actRes=ship.getStatus();
            var expRes="Live";
            expect(actRes).toBe(expRes);
        });
        it('should be able to calculate the damage of the ship',function(){
            for (var i = 0; i < ship.sizeX; i++) {
                for (var j = 0; j < ship.sizeY; j++) {
                    f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                }
            }
            ship.calculateDamage(f.getField())
            var actRes=ship.damage;

            var expRes=ship.sizeX*ship.sizeY;
            expect(actRes).toBe(expRes);
        });
        it('should be able to calculate the damage of the ship'+
            ' when size of ship < number of hits',function(){
            if (ship.sizeX==1){
                for ( i = 0; i < ship.sizeX; i++) {
                    for (var j = 0; j < ship.sizeY-1; j++) {
                        f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                    }
                }
            }
            else {
                for ( i = 0; i < ship.sizeX-1; i++) {
                    for (var j = 0; j < ship.sizeY; j++) {
                        f.getField()[ship.positionY + j][ship.positionX + i] ="H";
                    }
                }
            }
            ship.calculateDamage(f.getField())
            var actRes=ship.damage;

            var expRes=ship.sizeX*ship.sizeY-1;
            expect(actRes).toBe(expRes);
        });
    });
});