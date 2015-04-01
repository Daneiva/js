/**
 * Created by daneiva gamboa -Jimmy Maldonado
 */
/**
 * Class Field that create the game field, show board, put the ships and draw the ships.
 */
var Field= function() {

    /**
     * Array of Ships
     * @type {Array<Ship>}
     */
    var _ships = new Array();


    /**
     * Matrix that represent the game field.
     * @type {Array<Array<char>>}
     */
    var _matriz = new Array(CONSTANTS.get("BOARD_SIZE"));

    /**
     * Create the field (size*size) and fill the board with 0
     */
    for (var i = 0; i < CONSTANTS.get("BOARD_SIZE"); i++) {
        _matriz[i]= new Array(CONSTANTS.get("BOARD_SIZE"));
    }
    for (var i = 0; i < CONSTANTS.get("BOARD_SIZE"); i++) {
        for (var j = 0; j < CONSTANTS.get("BOARD_SIZE"); j++) {
            _matriz[i][j]=CONSTANTS.get("BLANK_SPACE");
        }
    }

    /**
     * Show the board.
     */
    this.showTable = function(){
        for (var i = 0; i < CONSTANTS.get("BOARD_SIZE"); i++) {
            console.log(_matriz[i]);
            console.log('\n');
        }
    };
    /**
     * Get the Field.
     * @return {Array<Array<char>>}
     */
    this.getField=function(){
        return _matriz;
    };
    /**
     * Put the ships in the Field.
     */
    this.putShips=function() {
        /**
         * Ship creates in the game
         * @type {int}
         */
        var _shipCreated=0;
        while(_shipCreated < CONSTANTS.get("TOTAL_SHIPS")){
            var _sizeAndPosition = generateSizeAndPosition();
            var _busy = verifyPosition(_sizeAndPosition[0],_sizeAndPosition[1],_sizeAndPosition[2],_sizeAndPosition[3]);
            if(!_busy) {
                _ships.push(new Ship(_sizeAndPosition[0],_sizeAndPosition[1],_sizeAndPosition[2],_sizeAndPosition[3]));
                drawShip(_sizeAndPosition[0],_sizeAndPosition[1],_sizeAndPosition[2],_sizeAndPosition[3]);
                _shipCreated++;
            }
            else{
                continue;
            }
        }
    };
    /**
     * Function that generate a random size and position of the ships in the field.
     * @return {Array<int>}
     */
    var generateSizeAndPosition = function(){
       /**
        * Array of random numbers that represent size and position in X and Y of a Ship.
        * @type {Array<int>}
        */
        var res = new Array();
        var _sizeX = Math.floor((Math.random() * CONSTANTS.get("MAX_SIZE_SHIP")) + 1);
        var _sizeY = _sizeX==1 ?  Math.floor((Math.random() * CONSTANTS.get("MAX_SIZE_SHIP")) + 1): 1;
        var _posX = Math.floor((Math.random() * (CONSTANTS.get("BOARD_SIZE"))));
        var _posY = Math.floor((Math.random() * (CONSTANTS.get("BOARD_SIZE"))));
        var _positionX = CONSTANTS.get("BOARD_SIZE") > (_sizeX + _posX) ? _posX: (_posX - ((_sizeX+_posX)-(CONSTANTS.get("BOARD_SIZE"))));
        var _positionY = CONSTANTS.get("BOARD_SIZE") > (_sizeY + _posY) ? _posY: (_posY - ((_sizeY+_posY)-(CONSTANTS.get("BOARD_SIZE"))));
        res.push(_sizeX,_sizeY,_positionX,_positionY);
        return res;
    };
    /**
     * Draw one ship in the field.
     * @param {int} sizeX
     * @param {int} sizeY
     * @param {int} positionX
     * @param {int} positionY
     * @return {Array<int>}
     */
    var drawShip = function (sizeX,sizeY,positionX,positionY) {
        for (var i = 0; i < sizeX; i++) {
            for (var j = 0; j < sizeY; j++) {
                if (_matriz[positionY + j][positionX + i] == CONSTANTS.get("BLANK_SPACE")) {
                    _matriz[positionY + j][positionX + i] = CONSTANTS.get("BUSY_SPACE");
                }
            }
        }
    };
    /**
     * Get the Ships
     * @return {Array<Ship>}
     */
    this.getShips=function(){
        return _ships;
    };

    /**
     * Method to verify if is possible to create a ship
     * @param {int} sizeX
     * @param {int} sizeY
     * @param {int} positionX
     * @param {int} positionY
     * @return {boolean}
     */
    var verifyPosition = function (sizeX,sizeY,positionX,positionY) {
        var _res = false;
        for (var i = 0; i < sizeX; i++) {
            for (var j = 0; j < sizeY; j++) {
                if (_matriz[positionY+j][positionX+i]==CONSTANTS.get("BUSY_SPACE")) {
                    _res=true;
                    break;
                }
            }
        }
        return _res;
    };
};

