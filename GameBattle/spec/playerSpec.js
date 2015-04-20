/**
 * Created by AlejandraArteaga on 4/20/2015.
 */
describe('Player', function(){
    describe('Player', function(){
        var player;
        beforeEach(function(){
            CONSTANTS.set("BOARD_SIZE",10);
            CONSTANTS.set("TOTAL_SHIPS",0);
            player=new Player("Player1");
        });
        afterEach(function(){
            player= null;

        });
        it('should be able to shoot a "FAIL" shot on a field',function(){
            player.getBoard().getField()[0][0] = "0";
            player.setShoot(0,0);
            var actRes=player.getBoard().getField()[0][0];
            var expRes="F";
            expect(actRes).toBe(expRes);
        });
        it('should be able to shoot a "HIT" shot on a field',function(){
            player.getBoard().getField()[0][0] = "1";
            player.setShoot(0,0);
            var actRes=player.getBoard().getField()[0][0];
            var expRes="H";
            expect(actRes).toBe(expRes);
        });
        it('should not be able to shoot over a "FAIL" shot on a field',function(){
            player.getBoard().getField()[0][0] = "F";
            expect(function(){player.setShoot(0,0);}).toThrow(
                player.name+",Sorry you already did that shot\n Try again in the next turn");

        });
        it('should not be able to shoot over a "HIT" shot on a field',function(){
            player.getBoard().getField()[0][0] = "H";
            expect(function(){player.setShoot(0,0);}).toThrow(
                    player.name+",Sorry you already did that shot\n Try again in the next turn");

        });
    });
    describe('statusPlayer', function(){
        var player;
        beforeEach(function(){
            player=new Player("Player1");
        });
        afterEach(function(){
            player= null;

        });
        it('should be able to shown the "Number of Hits" of the player',function(){
            for(var i=0;i<5;i++){
                player.getBoard().getField()[i][0] = "1";
                player.setShoot(0,i);
            }
            var actRes=player.getNumHits();
            var expRes=5;
            console.log(actRes+" expected:"+expRes);
            expect(actRes).toBe(expRes);
        });
        it('should be able to shown the "Number of Fails" of the player',function(){
            for(var i=0;i<5;i++){
                player.getBoard().getField()[i][0] = "0";
                player.setShoot(0,i);
            }
            var actRes=player.getNumFails();
            var expRes = 5;
            console.log(actRes+" expected:"+expRes);
            expect(actRes).toBe(expRes);
        });
    });
});

