/**
 * Created by Rodrigo Zarate on 3/27/2015.
 */
/* Class Constants, Execute First to inicialize Constants*/
var CONSTANTS = (function(){
    var _constants = {
        //Board Size
        BOARD_SIZE: 8,
        //Ships to Create
        TOTAL_SHIPS: 4,
        // Max Size of Ship
        MAX_SIZE_SHIP: 3
    };
    return {
        get: function(key) {
            return _constants[key];
        }
    };
})();