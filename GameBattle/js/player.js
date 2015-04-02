/**
 * Class Player initialize a player and the game.
 */
var Player=function(nam){
    /**
     * Name of Player
     * @type {string}
     */
    this.name=nam;
    var _field = new Field();

    _field.putShips();
    _field.showTable();

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
                _field.showTable();
                break;
            /**
             * The case if the shot hit the ship
             */
            case CONSTANTS.get("BUSY_SPACE"):
                console.log(nam+" Hit! :)");
                _field.getField()[coorY][coorX] =CONSTANTS.get("SHOOT_HIT");
                _field.showTable();
                console.log("States of the ships: ");
                this.updateStatusShips();
                break;
            /**
             * The case if the shot already  was done
             */
            case CONSTANTS.get("SHOOT_FAILED") :
            console.log(nam+ ",Sorry you already did that shot\n Try again in the next turn");
                _field.showTable();
            break;
            /**
             * The case if the shot already  was done
             */
            case CONSTANTS.get("SHOOT_HIT") :
                console.log(nam+ ",Sorry you already did that shot\n Try again in the next turn");
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


    this.shipsAreAlive = function () {
        var _shipsDie = 0;
        for(var i = 0; i < _field.getShips().length ; i++){
            if(_field.getShips()[i].getStatus() == CONSTANTS.get("SHIP_DIE")){
                _shipsDie++;
            }
        }
        if(_shipsDie == _field.getShips().length){
            return false;
        }else{
            return true;
        }
    };

};


