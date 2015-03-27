/**
 * Created by daneiva gamboa on 3/23/2015.
 */
/*
* field board
*/
var Field= function(siz,numShips) {
    var _size = siz;
    var _numberOfShips=numShips;
    var _ships = new Array(numShips);
    /*Create the field (size*size) and fill the board with 0*/
    var _matriz = new Array(_size);

    for (var i = 0; i < _size; i++) {
        _matriz[i]= new Array(_size);
    }
    for (var i = 0; i < _size; i++) {
        for (var j = 0; j < _size; j++) {
            _matriz[i][j]=0;
        }
    }

    /*Show the board*/
    this.showTable = function(){
        for (var i = 0; i < _size; i++) {
            console.log(_matriz[i]);
            console.log('\n');
        }
    };

    /*
    * Put the Ships on the board
    * */
    this.putShips=function() {
        var _max = 3;
        var _shipCreated=0;
        while(_shipCreated < _numberOfShips){
            var _sizeX = Math.floor((Math.random() * _max) + 1);
            var _sizeY = _sizeX==1 ?  Math.floor((Math.random() * _max) + 1): 1;
            var _posX = Math.floor((Math.random() * (_size)));
            var _posY = Math.floor((Math.random() * (_size)));
            var _positionX = _size > (_sizeX + _posX) ? _posX: (_posX - ((_sizeX+_posX)-_size));
            var _positionY = _size > (_sizeY + _posY) ? _posY: (_posY - ((_sizeY+_posY)-_size));
            var _busy = verifyPosition(_sizeX,_sizeY,_positionX,_positionY);
            if(!_busy) {
                _ships.push(new Ship(_sizeX,_sizeY,_positionX,_positionY));
                for (var i = 0; i < _sizeX; i++) {
                    for (var j = 0; j < _sizeY; j++) {
                        if (_matriz[_positionY + j][_positionX + i] == 0) {
                            _matriz[_positionY + j][_positionX + i] = 1;
                        }
                    }
                }
                _shipCreated++;
            }
            else{
                continue;
            }
            console.log(_sizeX+'  '+_sizeY+'  '+_positionX+'  '+_positionY+'  '+_posX+' '+_posY);
        }
    };

    /*
    Verify if is possible to create a ship
     */
    var verifyPosition = function (sizeX,sizeY,positionX,positionY) {
        var _res = false;
        for (var i = 0; i < sizeX; i++) {
            for (var j = 0; j < sizeY; j++) {
                if (_matriz[positionY+j][positionX+i]==1) {
                    _res=true;
                    break;
                }
            }
        }
        return _res;
    };
};
var game = new Field(8,3);
game.putShips();
game.showTable();
