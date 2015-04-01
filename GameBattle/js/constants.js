
/* Class Constants, Execute First to inicialize Constants*/
var CONSTANTS = function(){
    var _constants = {
        //Board Size
        BOARD_SIZE: 10,
        //Ships to Create
        TOTAL_SHIPS: 5,
        //Max Size of Ship
        MAX_SIZE_SHIP: 3,
        //Busy space
        BUSY_SPACE: '1',
        //Blank space
        BLANK_SPACE: '0'
    };
    return {
        get: function(key) {
            return _constants[key];
        }
    };
};