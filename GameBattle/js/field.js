/**
 * Created by daneiva gamboa on 3/23/2015.
 */
/*field board*/
var Field= function(size) {
    this.size = size;

    /*Create the field (size*size)*/
    this.matriz = new Array(this.size);
    for (var i = 0; i < this.size; i++) {
        this.matriz[i]= new Array(this.size);
    }

/*Initialize field board*/
    this.initialize = function () {
        for (var i = 0; i < this.size; i++) {
            for (var j = 0; j < this.size; j++) {
                this.matriz[i][j]=0;
            }
        }
    };

  /*Show the board*/
    this.showTable = function(){
        for (var i = 0; i < this.size; i++) {
            console.log(this.matriz[i]);
            console.log('\n');
        }
    };
};


var putElements=function() {
    var sizeTablet = 8;//
    var numberOfShip=3;//

    var max = 3;
    var shipCreated=0;

    var table = new Field(sizeTablet);
    table.initialize();

  while(shipCreated<numberOfShip){
        var sizeX=Math.floor((Math.random() * max) + 1);
        var sizeY = sizeX==1 ?  Math.floor((Math.random() * max) + 1): 1;
        var positionX=Math.floor((Math.random() * (sizeTablet-sizeX)) + 1);
        var positionY=Math.floor((Math.random() * (sizeTablet-sizeY)) + 1);

        var busy = verifyPosition(sizeX,sizeY,positionX,positionY,table);
        if(!busy) {
            for (var i = 0; i < sizeX; i++) {
                for (var j = 0; j < sizeY; j++) {
                    if (table.matriz[positionY + j][positionX + i] == 0) {
                        table.matriz[positionY + j][positionX + i] = 1;
                    }
                }
            }
            shipCreated++;
        }
        else{
            continue;
        }

        console.log(sizeX+'  '+sizeY+'  '+positionX+'  '+positionY+'  '+busy);
    }
    table.showTable();
}

var verifyPosition = function (sizeX,sizeY,positionX,positionY,table) {
    var res = false;
    for (var i = 0; i < sizeX; i++) {
        for (var j = 0; j < sizeY; j++) {
            if (table.matriz[positionY+j][positionX+i]==1) {
                res=true;
                break;
            }
        }
    }
    return res;
}
putElements();
