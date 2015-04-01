/*
 * Created by Daneiva Gamboa - Alejandra Arteaga
 */
/**
 * Class Player initialize a player and the game.
 */
var Player=function(nam){
    /**
     * Name of Player
     * @type {string}
     */
    this.name=nam;
    var game = new Field();
    game.putShips();
    game.showTable();
    /**
     * SetShoot method to shoot to the ships
     * @param {int} coorX
     * @param {int} coorY
     */
    this.setShoot = function (coorX, coorY) {
        switch (game.getField()[coorY][coorX]) {
            case CONSTANTS.get("BLANK_SPACE"):
                console.log("Fail");
                game.getField()[coorY][coorX] =CONSTANTS.get("SHOOT_FAILED");
                game.showTable();
                break;
            case CONSTANTS.get("BUSY_SPACE"):
                console.log("Hit");
                game.getField()[coorY][coorX] =CONSTANTS.get("SHOOT_HIT");
                game.showTable();
                for(var i=0; i< game.getShips().length ; i++){
                    console.log("Ship "+i+ ": "+ game.getShips()[i].getStatus(game.getField()));
                }
                break;
            case CONSTANTS.get("SHOOT_FAILED") :
            console.log("Try again");
            game.showTable();
            break;
            case CONSTANTS.get("SHOOT_HIT") :
                console.log("Try again");
                game.showTable();
                break;
            default :
                break

        }
    };

};


