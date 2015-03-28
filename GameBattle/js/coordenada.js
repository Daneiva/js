/*Class Coordenada*/

var Coordenada=function(coorX,coorY){
    this.coor={
        x:coorX,
        y:coorY
    }
};

/*Pruebas de clase coordernada*/
var position=new Coordenada(5,6);
position.coor.x;
position.coor.y;
var size=new Coordenada(5,6);
size.coor.y;
size.coor.x;