/*
 * Created by Rodrigo Zarate - Alejandra Arteaga
 */
/*
* Class Ship
* */
var Ship = function(sizX, sizY, posX, posY ){
        this.positionX= posX;
        this.positionY=posY;
        this.sizeX=sizX;
        this.sizeY=sizY;
        this.damage=0;
        var _status= "Live";
    this.getStatus=function(matriz){
        for (var i = 0; i < this.sizeX; i++) {
            for (var j = 0; j < this.sizeY; j++) {
                if (matriz[this.positionY + j][this.positionX + i] == 'H') {
                    this.damage++;
                }
            }
        }
        if(this.sizeX >= this.damage ||this.sizeY >= this.damage) {
            return _status= "Live";
        }
        return _status= "Die";
    };
};


