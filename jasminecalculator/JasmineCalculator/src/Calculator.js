/**
 * Created by daneiva gamboa on 4/9/2015.
 */

    var Calculator = function(){
    var mem =0;
        //sum of two values, validating different possible input values
        this.add = function(a,b){

            if (( a != undefined && typeof a != "number") || ( b != undefined && typeof b != "number")){
                throw('error');
            }
            if ((typeof a == "number") && (typeof b == "number")){
                mem = a+b;
            }
            else if (( a == undefined) && (b != undefined)){
                mem =  mem+b;
            }
            else if (( a != undefined) && (b == undefined)){
                mem =  mem+a;
            }
            else if ((typeof a=='number') && (b == undefined )){
                mem=mem+a;
            }
            else if ((typeof a=='number') && (b == "string")){
                throw('error');
            }
            else if ((typeof b=='number') && (a == "string")){
                throw('error');
            }
        return mem;
    };
//subtract of two values, validating different possible input values
    this.subtract = function(a,b){
        if (( a != undefined && typeof a != "number") || ( b != undefined && typeof b != "number")){
            throw('error');
        }
        if (((typeof a == "number") && (typeof b == "number"))&&(a>b)){
            mem = a-b;
        }
        if (((typeof a == "number") && (typeof b == "number"))&&(a<b)){
            mem = a-b;
        }
        else if (( a == undefined) && (b != undefined)){
            mem =  mem-b;
        }
        else if (( a != undefined) && (b == undefined)){
            mem =  mem-a;
        }
        else if ((typeof a=='number') && (b == undefined )){
            mem=mem-a;
        }
        else if ((typeof a=='number') && (b == "string")){
            throw('error');
        }
        else if ((typeof b=='number') && (a == "string")){
            throw('error');
        }
        return mem;
    };
    //multiply of two values, validating different possible input values
    this.multiply = function(a,b){

        if (( a != undefined && typeof a != "number") || ( b != undefined && typeof b != "number")){
            throw('error');
        }
        if ((typeof a != "number") || (typeof b != "number")){
            throw('error');
        }
        if (((typeof a == "number") && (typeof b == "number"))){
            mem = a*b;
        }
        else if (( a == undefined) && (b != undefined)){
            mem =  mem*b;
        }
        else if (( a != undefined) && (b == undefined)){
            mem =  mem*a;
        }
        else if ((typeof a=='number') && (b == undefined )){
            mem=mem*a;
        }
        else if ((typeof a=='number') && (b == "string")){
            throw('error');
        }
        else if ((typeof b=='number') && (a == "string")){
            throw('error');
        }
        return mem;
    };

    //Divide of two values, validating different possible input values
    this.div = function(a,b){
        if (( a != undefined && typeof a != "number") || ( b != undefined && typeof b != "number")){
            throw('error');
        }
        if (((typeof a == "number") && (typeof b == "number"))&&(a>b)){
            mem = a/b;
        }
        if (((typeof a == "number") && (typeof b == "number"))&&(a<b)){
            mem = a/b;
        }
        else if (( a == undefined) && (b != undefined)){
            mem =  mem/b;
        }
        else if (( a != undefined) && (b == undefined)){
            mem =  mem/a;
        }
        else if ((typeof a=='number') && (b == undefined )){
            mem=mem/a;
        }
        else if ((typeof a=='number') && (b == "string")){
            throw('error');
        }
        else if ((typeof b=='number') && (a == "string")){
            throw('error');
        }
        return mem;

        /* if ((typeof a != "number") || (typeof b != "number"))
            throw('error');
        else
            return (a/b);*/
    };

};