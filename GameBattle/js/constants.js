
/* Class Constants, Execute First to inicialize Constants*/
var CONSTANTS = function(size,ships,sizeShip){
    var _constants = {
        //Board Size
        BOARD_SIZE: size,
        //Ships to Create
        TOTAL_SHIPS: ships,
        // Max Size of Ship
        MAX_SIZE_SHIP: sizeShip
    };
    return {
        get: function(key) {
            return _constants[key];
        }
    };
};