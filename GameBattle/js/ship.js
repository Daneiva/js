/*
* Class Ship
* */
var Ship = function(posX, posY, sizX, sizY){
        this.positionX= posX;
        this.positionY=posY;
        this.sizeX=sizX;
        this.sizeY=sizY;

        var _status= "Live";
    /* Get and Set of the Class*/


    this.setStatusDie= function(){
        _status="Die";
    };
    this.getStatus= function() {
        return _status;
    };

  /* this.getPositionX=function(){
        return this.positionX;
    };
    this.getPositionY=function(){
        return this.positionY;
    };
    this.getSizeX=function(){
        return this.sizeX;
    };
    this.getSizeY=function(){
        return this.sizeY;
    };*/

};
var s= new Ship(2,2,2,2);

