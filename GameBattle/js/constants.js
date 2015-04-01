
/* Class Constants, Execute First to inicialize Constants*/
var CONSTANTS = (function(){
    var _constants = {
        //Board Size
        BOARD_SIZE: 7,
        //Ships to Create
        TOTAL_SHIPS: 4,
        //Max Size of Ship
        MAX_SIZE_SHIP: 3,
        //Busy space
        BUSY_SPACE: '1',
        //Blank space
        BLANK_SPACE: '0',
        //Shoot Hit
        SHOOT_HIT:'H',
        //Shoot Failed
        SHOOT_FAILED:'F',
        //Ship Live
        SHIP_LIVE:"Live",
        //Ship Die
        SHIP_DIE:"Die"

    };
    return {
        get: function(key) {
            return _constants[key];
        }
    };
})();