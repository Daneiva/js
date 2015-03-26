/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function (players) {
    var _field = new Field(8,5);
    var _players = players;

    this.start = function(){
        _field.putShips();
        _field.showTable();

    };
    this.end = function () {

        for(var i=0; i < players.length; i++){
            _players[i].statusPlayer();
        }
    };
};