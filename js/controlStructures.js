/**
 * Created by daneiva gamboa on 3/19/2015.
 */

var getFirstCapicua= function(init, limit){

    window.alert(getFirstCapicua());
    var cad= prompt("enter text:");
    var ser= cad.split(' ');

    var rev  = cad.reverse();
    if(rev== ser){

    }
    else
    {
    }
    }
    return   /*first capicua number form the range*/

var getFirstCapicuaFV= function(init, limit){
for (var i=init;i <= limit; i++){
    if (!iscapicua(i)){
        return i;
    }
};
var getFirstCapicuaSV= function(init, limit) {
    for (var i = init; i <= limit; i++) {
        if (iscapicua(i)) {
            continue;
        }
        return(i);
        /* first capicua number form the range*/
    }
}
    var getEvenNumbers = function (n){
      for(var i = 2; i<=(n*2);i=i+2){
      console.log(i);
      }
    }

    var getOddNumbers = function (n){
        for(var i = 1; i<=(n*2);i=i+2){
            console.log(i);
        }
    }
}








