/**
 * Class Player initialize a player and the game.
 */
var Player=function(nam){

    /**
     * Name of Player
     * @type {string}
     */
    this.name=nam;

    /**
     * The field where the player shoots
     * @type {Field}
     */
    var _field = new Field();

    /**
     * Number of hit shoots
     * @type {int}
     */
    var _numHits = 0;

    /**
     * Number of failed shoots
     * @type {string}
     */
    var _numFails = 0;

    /**
     * Put the ships on the field
     */
    _field.putShips();

    /**
     * setShoot method to shoot to the ships
     * @param {int} coorX
     * @param {int} coorY
     */
    this.setShoot = function (coorX, coorY) {
        switch (_field.getField()[coorY][coorX]) {
            /**
             * The case if the shot fail
             */
            case CONSTANTS.get("BLANK_SPACE"):
                console.log(nam+" Fail! :( ");
                _field.getField()[coorY][coorX] =CONSTANTS.get("SHOOT_FAILED");
                _numFails++;
                _field.showTable();
                break;
            /**
             * The case if the shot hit the ship
             */
            case CONSTANTS.get("BUSY_SPACE"):
                console.log(nam+" Hit! :)");
                _field.getField()[coorY][coorX] =CONSTANTS.get("SHOOT_HIT");
                _numHits++;
                _field.showTable();
                console.log("States of the ships: ");
                this.updateStatusShips();
                break;
            /**
             * The case if the shot already  was done
             */
            case CONSTANTS.get("SHOOT_FAILED") :
                console.log(nam+ ",Sorry you already did that shot\n Try again in the next turn");
                _numFails++;
                _field.showTable();
            break;
            /**
             * The case if the shot already  was done
             */
            case CONSTANTS.get("SHOOT_HIT") :
                console.log(nam+ ",Sorry you already did that shot\n Try again in the next turn");
                _numFails++;
                _field.showTable();
                break;
            default :
                break
        }
    };
    /**
     * updateStatusShips method to update the state of the ships of the player
     * and to show the state of the ships in the console
     */
    this.updateStatusShips= function(){
        for(var i=0; i< _field.getShips().length ; i++){
            console.log("Ship "+i+ ": "+ _field.getShips()[i].updateStatus(_field.getField()));
        }
    };

    /**
     * Calculate and return  the number of ships that are die
     * @return {int}
     */
    this.shipsAreAlive = function () {
        var _shipsDie = 0;
        for(var i = 0; i < _field.getShips().length ; i++){
            if(_field.getShips()[i].getStatus() == CONSTANTS.get("SHIP_DIE")){
                _shipsDie++;
            }
        }
        return _shipsDie;
    };

    /**
     * Show the field of the player
     */
    this.showField = function () {
        _field.showTable();
    };

    /**
     * Show on console the current status of the player
     */
    this.statusPlayer = function () {
        var _numShipsDied = this.shipsAreAlive();
        console.log(this.name+": ");
        if(_numShipsDied == CONSTANTS.get("TOTAL_SHIPS")){
            console.log("You are the winner !!!");
        }else{
            console.log("You lose :(");
        }
        console.log("Failed: "+_numFails);
        console.log("Hit : "+_numHits);
        console.log("Ships killed: "+_numShipsDied);
    };

    this.getBoard = function () {
      return _field;
    };
    this.getNumFails = function () {
        return _numFails;
    };
    this.getNumHits = function () {
        return _numHits;
    };
};


