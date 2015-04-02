/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function (numPlayers,size,maxShips) {
    //validation size board:  Min=3 and Max=20
    if( size<3 || size>20 ){
        console.error("The minimum size board  is 3, and the maximum 20");
        return;
    }
    //Validation number of ship: Min=1 and Max = s+ma[n]
    var calcMaxShip= (size+(size-3));
    if( maxShips<1 || maxShips>calcMaxShip ){
        console.error("for the board of: " +size+", you can create up " +maxShips+" ships");
        return;
    }
    //MIN_PLAYERS:1, MAX_PLAYERS=2
    /*if( numPlayers<0 || numPlayers>2 ){
        console.error("The number of players is 2 maximum");
        return;
    }*/
    var _fields;
    var _players;

    this.start = function(){
        var _createdPlayers = 0;
        _players= new Array();
        //_fields = new Array();

        /*Test variables*/
        var _player1 = new Player("Player 1");
        var _player2 = new Player("Player 2");

        var _fieldPlayer1 = new Field();
        var _fieldPlayer2 = new Field();
        /*Fin test variables*/

        /*_fieldPlayer1.putShips();
        _fieldPlayer1.showTable();
        _fieldPlayer2.putShips();
        _fieldPlayer2.showTable();*/

    };

    var end = function () {

        for(var i=0; i < players.length; i++){
            _players[i].statusPlayer();
        }
    };

    this.shot= function (posX,posY,pName){

    }
};