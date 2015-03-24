/**
 * Created by Alejandra Arteaga on 3/23/2015.
 */
var Ship = function(posX, posY, sizX, sizY){
        this.positionX= posX;
        this.positionY=posY;
        this.sizeX=sizX;
        this.sizeY=sizY;
        var _damage = 0;
        var _status= "Live";
    this.getDamage=function(){
        return _damage;
    };
    this.setDamage=function(newDamage){
        _damage= newDamage;
    };
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

