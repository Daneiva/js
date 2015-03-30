/**
 * Created by Jimmy Maldonado, Rodrigo Zarate on 3/26/2015.
 */
var Game = function () {
    var _field;
    var _players;

    var verifyPlayer= function(pName,pId){
        var _exists=false;
        for(var i = 0 ; i < _players.length ; i++){
            if(_players[i].getName() == pName || _players[i].getId() == pId){
                _exists = true;
                break;
            }
        }
        return _exists;
    };

    this.start = function(){
        var _createdPlayers = 0;
        _players= new Array();

        console.log("Enter the next data:");
        console.log("Board size:");
        var _size = 10;//MINIMO 3 , MAXIMO 20?
        console.log("Number of ships:");
        var _ships = 5;//MINIMO 1 , MAXIMO _size?

        console.log("Game level:");
        var _level = "Normal";//VALIDATE

        var _numTurns = _size*_size;//CALCULATE ACORDING GAME LEVEL

        console.log("Enter the number of players (4 maximum):");
        var _maxPlayers = 1 ;//VALIDATE

        while(_createdPlayers<_maxPlayers){
            var _invalidPlayer = false;
            _createdPlayers++;
            console.log("=> Name of player "+ _createdPlayers +":");
            var _playerName="JMR";//window.prompt("Player´s name");
            console.log("=> ID of player "+ _createdPlayers +":");
            var _playerId = "J";//window.prompt("Player´s id");
            if(_playerId.length!=1 || _playerId=="0" || _playerId=="1" || _playerId=="F"){
                _invalidPlayer=true;
                _createdPlayers--;
                console.log("=> Error: The ID: "+_playerId+" is invalid (0,1,H,F are not allowed)");
                continue;
            }

            _invalidPlayer = verifyPlayer(_playerName,_playerId);
            if(!_invalidPlayer){
                _players.push(new Player(_playerName,_playerId));
                console.log("=> The player : "+_playerName+" with the ID: "+_playerId+" was created successfully");
            }
            else{
                _createdPlayers--;
                console.log("=> Error: The player name: "+_playerName+" or player ID: "+_playerId+" already exists");
            }

        }

    /* Integration is missing with the Constant Class*/
    //    var _const = new CONSTANTS(_size, _ships, 3);

        _field = new Field(_size,_ships);
        _field.putShips();
        _field.showTable();

    };

    this.end = function () {

        for(var i=0; i < players.length; i++){
            _players[i].statusPlayer();
        }
    };

    var getPlayer = function(pName){
        for(var i = 0 ; i < _players.length ; i++){
            if(_players[i].getName() == pName){
                return _players[i];
            }
        }
        return null;
    };

    this.shot= function (posX,posY,pName){
        var _player = getPlayer(pName);
        if(_player != null){
            if(posX<10 || posY<10){ //10 SIZE
                var _shotRes = _field.markShot(posX,posY,_player.getId());
            }else{
                console.log("The positions do not exist on the field");
            }

        }else{
            console.log("The player does not exist");
        }
        _field.showTable();
    };
};