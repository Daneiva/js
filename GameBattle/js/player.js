/*
 * Created by Daneiva Gamboa - Alejandra Arteaga
 */
/**
 *
 * Class Player
 */
var Player=function(nam){
    //Name of Player
    this.name=nam;
    var game = new Field(8,3);
    game.putShips();
    game.showTable();
    //Function setShot to shot to the ships
    // coorX = Coordenada X del shot
    // coorY = Coordenada Y del shot

    this.setShot = function (coorX, coorY) {
        /*var board= game.getField();*/
        switch (game.getField()[coorX][coorY ]) {
            case "0":
                console.log("Fail");
                game.getField()[coorX][coorY] ='F';
                game.showTable();
                break;
            case "1":
                console.log("Hit");
                game.getField()[coorX][coorY] ='H';
                game.showTable();
                for(var i=0; i< game.getShips().length ; i++){
                    console.log("Ship "+i+ ": "+ game.getShips()[i].getStatus(game.getField()));
                }
                break;
            case'F' :
            console.log("Try again");
            game.showTable();
            break;
            case 'H' :
                console.log("Try again");
                game.showTable();
                break;
            default :
                break

        }
    };

};

var


