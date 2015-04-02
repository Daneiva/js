/*
 * Created by Rodrigo Zarate - Alejandra Arteaga
 */
/**
 * Class Ship represent objects Ships int the game
 * @param {int} sizX  size in X of the Ship
 * @param {int} sizY  size in Y of the Ship
 * @param {int} posY  position in X of the Ship
 * @param {int} posY  position in Y of the Ship
 */
var Ship = function(sizX, sizY, posX, posY ){
    this.positionX= posX;
    this.positionY=posY;
    this.sizeX=sizX;
    this.sizeY=sizY;

    /**
     * Damage of a Ship in the game
     * @type {int}
     */
    this.damage=0;

    /**
     * Status of a Ship in the game
     * @type {Constants}
     */
    var _status= CONSTANTS.get("SHIP_LIVE");
    /**
     * Function that update the Status of a Ship in the game. (Ship: LIVE or DIE)
     * @return {Constants}
     */
    this.updateStatus=function(actualMatrix){
        this.calculateDamage(actualMatrix);
        if(this.sizeX*this.sizeY >=this.damage ) {
            return _status= CONSTANTS.get("SHIP_LIVE");
        }
        return _status = CONSTANTS.get("SHIP_DIE");
    };
    /**
     * Function that calculate the Damage of a Ship in the game.
     */
    this.calculateDamage= function (actualMatrix) {
        var damageActual= 0;
        for (var i = 0; i < this.sizeX; i++) {
            for (var j = 0; j < this.sizeY; j++) {
                if (actualMatrix[this.positionY + j][this.positionX + i] == CONSTANTS.get("SHOOT_HIT")) {
                    this.damage++;
                }
            }
        }
    };

    this.getStatus = function(){
        return _status;
    };
};


