/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function (numPlayers) {

    if( numPlayers<0 || numPlayers>2 ){
        console.error("The number of players is 2 maximum");

    }
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

        _fieldPlayer1.putShips();
        _fieldPlayer1.showTable();
        _fieldPlayer2.putShips();
        _fieldPlayer2.showTable();

    };

    this.end = function () {

        for(var i=0; i < players.length; i++){
            _players[i].statusPlayer();
        }
    };

    this.shot= function (posX,posY,pName){

    }
    _field.showTable();
};