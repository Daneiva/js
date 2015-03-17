/**
 * Created by daneiva gamboa on 3/17/2015.
 */
/**
 * Created by daneiva gamboa on 3/12/2015.
 */
var  doOperations =  function(){

    var numbers= prompt("Enter values");
    var ser= numbers.split(",");
    var real= [];
    for ( var i= 0; i<ser.length;i++)
    {
      real[i] =parseInt(ser[i]) ;
    };

    window.alert('The Max is: ' + getMax(real));
    window.alert('The Min is: ' + getMin(real));
    window.alert('The Sum is: ' + getSum(real));
    window.alert('The Avg is; ' + getAvg(real));

    /*console.log('The Max is: ' + getMax(numbers));
    console.log('The Min is: ' + getMin(numbers));
    console.log('The Avg is: ' + getAvg());
    console.log('The Sum is: ' + getSum());*/
};

var getMax= function (numbers,pos,max){

    if(pos==undefined)
        pos= numbers.length -1 ;
    if(max==undefined)
        max= numbers[pos];
    if (pos == 0)
        return max;
    if(max < numbers[pos-1])
        max=numbers [pos-1];
        return getMax(numbers,pos-1,max);
};
var getMin= function(numbers,pos,min){
    if(pos==undefined)
        pos= numbers.length -1;
    if(min==undefined)
        min=numbers[pos];
    if(pos==0)
        return min;
    if(min>numbers[pos-1])
        min=numbers[pos-1];
    return getMin(numbers,pos-1,min);
};

var getSum= function(numbers,pos,sum){
        if(pos==undefined)
            pos=numbers.length-1;
        if(sum==undefined)
            sum=numbers[pos];
        if(pos==0){
            return sum;
        }
        if(sum>numbers[pos-1]){
            sum=sum+numbers[pos-1];
        }
        if(sum<numbers[pos-1]){
            sum=sum+numbers[pos-1];
            sum=numbers[pos-1];
        }
        return getSum(numbers,pos-1,sum);
};

var getAvg= function(numbers,pos,sum){
    if(pos==undefined)
        pos=numbers.length-1;
    if(sum==undefined)
        sum=numbers[pos];
    if(pos==0){
        cant=numbers.length-1;
        return sum/cant;
    }
    if(sum>numbers[pos-1]){
        sum=sum+numbers[pos-1];
    }
    if(sum<numbers[pos-1]){
        sum=sum+numbers[pos-1];
        sum=numbers[pos-1];
    }
    return getSum(numbers,pos-1,sum);
};
/*var countWords =  function(para){
    var date = new date();
    var date1= new date(milliseconds);
    var date2 = new date(datestring);

}*/