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
    //Function setShoot to shoot to the ships
    // coorX = Coordenada X del shoot
    // coorY = Coordenada Y del shoot

    this.setShoot = function (coorX, coorY) {
        switch (game.getField()[coorY][coorX ]) {
            case "0":
                console.log("Fail");
                game.getField()[coorY][coorX] ='F';
                game.showTable();
                break;
            case "1":
                console.log("Hit");
                game.getField()[coorY][coorX] ='H';
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




