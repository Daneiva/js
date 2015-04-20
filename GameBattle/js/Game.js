/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function (numPlayers,size,numShips) {
    /**
     * Validate the size of field:  Min=3 and Max=20
     */
    if( !isNaN(size)&& size < CONSTANTS.get("MIN_BOARD_SIZE") || size > CONSTANTS.get("MAX_BOARD_SIZE") ){
        throw (console.error("ERROR: The minimum size board  is "+ CONSTANTS.get("MIN_BOARD_SIZE") +
            ", and the maximum "+CONSTANTS.get("MAX_BOARD_SIZE")));
    }
    /**
     * Validate the number of ship: Min=1 and Max = s+ma[n]
     */
    var calcMaxShip= (size+(size-CONSTANTS.get("MAX_SIZE_SHIP")));
    if( !isNaN(numShips)&& numShips < CONSTANTS.get("MIN_SHIPS") || numShips > calcMaxShip ){
        throw (console.error("ERROR: For the board of size: " +size+", you can create between "+
            CONSTANTS.get("MIN_SHIPS")+" and "+calcMaxShip+" ships"));
    }
    /**
     * Validate the number of players
     */
    if( !isNaN(numPlayers)&& numPlayers < CONSTANTS.get("MIN_PLAYERS") || numPlayers > CONSTANTS.get("MAX_PLAYERS")){
        throw (console.error("ERROR: The number of players should be between: "+CONSTANTS.get("MIN_PLAYERS")+
            " and "+CONSTANTS.get("MAX_PLAYERS")));
    }

    /**
     * Set the constants 'BOARD_SIZE' and 'TOTAL_SHIPS'
     */
    CONSTANTS.set("BOARD_SIZE",size);
    CONSTANTS.set("TOTAL_SHIPS",numShips);

    /**
     * Array of players
     * @type {Array<Player>}
     */
    var _players = new Array();

    /**
     * Number of turns
     * @type {int}
     */
    var _turns = CONSTANTS.get("TOTAL_SHIPS") * CONSTANTS.get("MAX_SIZE_SHIP");

    /**
     * Start the game.
     */
    this.start = function(){
        for(var i = 1; i <= numPlayers ; i++){
            console.log("--------------------------------------------");
            _players.push(new Player("Player "+i));
            console.log("Player "+i+", destroy the following ships: ");
            _players[i-1].showField();
        }
        play();
    };

    /**
     * Controls the players' turns.
     */
    var play = function () {
        var _win=false;
        var _turnsPlayed = 0;
        while(!_win && _turnsPlayed < _turns){
            for(var i = 1; i <= numPlayers ; i++){
                console.log("--------------------------------------------");
                console.log("Player "+(i)+" shoot!!!");
                alert("Player "+(i)+" shoot!!!");
                var _x = getShootCoordinateX();
                var _y = getShootCoordinateY();
                _players[i-1].setShoot(_x,_y);
                if(_players[i-1].shipsAreAlive() == CONSTANTS.get("TOTAL_SHIPS")){
                    _win = true;
                    alert("Player "+(i)+" wins!!!");
                    break;
                }
            }
            _turnsPlayed++;
        }
        end();
    };

    /**
     * Show the players' status when the game is finished
     */
    var end = function () {
        alert("The game finished!!!");
        for(var i = 0; i < _players.length; i++) {
            console.log("--------------------------------------------");
            _players[i].statusPlayer();
        }
        console.log("--------------------------------------------");
    };

    /**
     * Return the 'X' coordinate.
     * @return {int}
     */
    var getShootCoordinateX = function () {
        var _valid = false;
        var _x = 0;
        while(!_valid){
            _x = window.prompt("Shoot on 'X' coordinate: (0 to "+(CONSTANTS.get("BOARD_SIZE")-1)+")");
            if(parseInt(_x) >= 0 && parseInt(_x) < CONSTANTS.get("BOARD_SIZE")){
                _valid = true;
                _x = parseInt(_x);
            }else{
                console.log("The shoot must be between 0 and "+(CONSTANTS.get("BOARD_SIZE")-1)+", please try again.");
            }
        }
        return _x;
    };

    /**
     * Return the 'Y' coordinate.
     * @return {int}
     */
    var getShootCoordinateY = function () {
        var _valid = false;
        var _y = 0;
        while(!_valid){
            _y = window.prompt("Shoot on 'Y' coordinate: (0 to "+(CONSTANTS.get("BOARD_SIZE")-1)+")");
            if(parseInt(_y) >= 0 && parseInt(_y) < CONSTANTS.get("BOARD_SIZE")){
                _valid = true;
                _y = parseInt(_y);
            }else{
                console.log("The shoot must be between 0 and "+(CONSTANTS.get("BOARD_SIZE")-1)+", please try again.");
            }
        }
        return _y;
    };
};