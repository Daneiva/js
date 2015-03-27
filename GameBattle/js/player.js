/**
 * Class Player
 */
var Player=function(nam){
    //Name of Player
    this.name=nam;

    //Function setShot to shot to the ships
    // coorX = Coordenada X del shot
    // coorY = Coordenada Y del shot
    this.setShot=function(coorX,coorY){
        var _coorX=coorX;
        var _coorY=coorY;
    };

};
var juan=Player("Juan");
juan.setShot(5,6);