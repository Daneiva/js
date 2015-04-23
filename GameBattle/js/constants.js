
/**
 * Class Constants define the constants variables that will be use in the game.
 */
var CONSTANTS = (function(){

    var _constants = {
       /**
        * Board Size
        * @type {int}
        */
        BOARD_SIZE: 10,

        /**
        *Ships to Create
        * @type {int}
        */
        TOTAL_SHIPS: 5,

        /**
         * Max Size of Ship
         * @type {int}
         */
        MAX_SIZE_SHIP: 3,
        
        /**
         * Busy space represent for "1"
         * @type {char(1)}
         */
        BUSY_SPACE: '1',

        /**
         * Blank space represent for "0"
         * @type {char(1)}
         */
        BLANK_SPACE: '0',

        /**
         * Shoot Hit, the value is equal to H
         * @type {char(1)}
         */
        SHOOT_HIT:'H',

        /**
         * Shoot Failed, the value is equal to F
         * @type {int}
         */
        SHOOT_FAILED:'F',

        /**
         * Ship Live
         * @type {char}
         */
        SHIP_LIVE:"Live",

        /**
         * Ship Die
         * @type {char}
         */
        SHIP_DIE:"Die",

        /**
         * The maximum size of the field
         * @type {int}
         */
        MAX_BOARD_SIZE: 10,

        /**
         * The minimum size of the field
         * @type {int}
         */
        MIN_BOARD_SIZE: 3,

        /**
         * The maximum number of players
         * @type {int}
         */
        MAX_PLAYERS: 2,

        /**
         * The minimum number of players
         * @type {int}
         */
        MIN_PLAYERS: 1,

        /**
         * The minimum number of ships
         * @type {int}
         */
        MIN_SHIPS: 1
    };
    return {
        get: function(key) {
            return _constants[key];
        },
        set: function(key,value) {
            _constants[key]=value;
            return _constants[key];
        }
    };
})();