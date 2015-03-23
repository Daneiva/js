/**
 * Created by daneiva gamboa on 3/23/2015.
 */
/*game field*/
var Field= function(size) {
    this.size = size;
    this.matriz = new Array(this.size);
    for (var i = 0; i < this.size; i++) {
        this.matriz[i]= new Array(this.size);
    }
    /*Initialize the matriz*/
    this.initialize = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.matriz[i][j]=0;
            }
        }
    };
    /*Show the table*/
    this.showTable = function(){
        for (var i = 0; i < this.size; i++) {
            console.log(this.matriz[i]);
            console.log('\n');
        }
    };
};

var Element= function() {
    this.positionX=0;
    this.positionY=0;
    this.sizeX=0;
    this.sizeY=0;

    this.status="Live";

}

var putElements=function() {
    var table = new Field(5);
    table.initialize();


    var sizeX=1;
    var sizeY=3;
    var positionX=1;
    var positionY=0;

    for (var i = 0; i < sizeX; i++) {
        for (var j = 0; j < sizeY; j++) {
            if (table.matriz[positionY+j][positionX+i]==0) {
                table.matriz[positionY+j][positionX+i]=1;
            }
        }
    }

    var sizeX=1;
    var sizeY=4;
    var positionX=1;
    var positionY=1;
    if (((positionX+sizeX)<=table.matriz.length) && ((positionY+sizeY)<=table.matriz.length)) {
        for (var i = 0; i < sizeX; i++) {
            for (var j = 0; j < sizeY; j++) {
                if (table.matriz[positionY+j][positionX+i]==0) {
                    table.matriz[positionY+j][positionX+i]=1;
                }
                else{
                    table.matriz[positionY+j][positionX+i]=2;
                }
            }
        }
    };
    table.showTable();
}
putElements();
