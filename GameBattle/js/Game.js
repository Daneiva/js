/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function (numPlayers,size,numShips) {
    //validate size board:  Min=3 and Max=20
    if( size < CONSTANTS.get("MIN_BOARD_SIZE") || size > CONSTANTS.get("MAX_BOARD_SIZE") ){
        console.error("ERROR: The minimum size board  is"+ CONSTANTS.get("MIN_BOARD_SIZE") +", and the maximum "+CONSTANTS.get("MAX_BOARD_SIZE"));
        return;
    }
    //Validate number of ship: Min=1 and Max = s+ma[n]
    var calcMaxShip= (size+(size-CONSTANTS.get("MAX_SIZE_SHIP")));
    if( numShips < CONSTANTS.get("MIN_SHIPS") || numShips > calcMaxShip ){
        console.error("ERROR: For the board of size: " +size+", you can create between "+CONSTANTS.get("MIN_SHIPS")+" and "+calcMaxShip+" ships");
        return;
    }

    if( numPlayers < CONSTANTS.get("MIN_PLAYERS") || numPlayers > CONSTANTS.get("MAX_PLAYERS")){
        console.error("ERROR: The number of players should be between: "+CONSTANTS.get("MIN_PLAYERS")+" and "+CONSTANTS.get("MAX_PLAYERS"));
        return;
    }

    CONSTANTS.set("BOARD_SIZE",size);
    CONSTANTS.set("TOTAL_SHIPS",numShips);
    var _players = new Array();

    var _turns = CONSTANTS.get("TOTAL_SHIPS") * CONSTANTS.get("MAX_SIZE_SHIP");


    this.start = function(){
        for(var i = 1; i <= numPlayers ; i++){
            _players.push(new Player("Player "+i));
        }
        play();
    };

    var play = function () {
        var _win=false;
        var _turnsPlayed = 0;
        while(!_win && _turnsPlayed < _turns){
            for(var i = 1; i <= numPlayers ; i++){
                console.log("Player "+(i)+" shoot!!!");
                _players[i-1].setShoot(5,7);
                if(!_players[i-1].shipsAreAlive()){
                    _win = true;
                    break;
                }
            }
            _turnsPlayed++;
        }
        if(_win){
             //show the winner
        }else{
          //
        }
    };

    var end = function () {
        for(var i=0; i < players.length; i++){
            _players[i].statusPlayer();
        }
    };

    this.shot= function (posX,posY){
        this.positionX= posX;
        this.positionY=posY;

        if (posX>=0 || posX<=CONSTANTS.get("BOARD_SIZE")){
            if ((posY) >=0 || posY<=CONSTANTS.get("BOARD_SIZE")){
///////
//////
            }
            else{
                console.error("Invalid shot!!!");
            }
        }
        else{
            console.error("Invalid shot!!!");
        }
    }
};