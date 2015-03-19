/**
 * Created by daneiva gamboa on 3/17/2015.
 */
var countWords= function(paragraph){
    return  paragraph.split(' ').length;

};

var printDate = function(){

    var now= new Date();
    var now1=new Date(milliseconds);
    var now2= new Date(dateString)

    var jsonDay={
        '0':'Sun','1':'Mon','2':'Tue','3':'Wed','4':'Thu','5':'Fri','6':'Sat'};

    var hours=now.getHours()>12?(now.getHours() -12)+'PM':now.getHours()+'AM';

    var dia= now.getDay();
    var hora= now.getHours()

    console.log('Today is: '+dia );
    console.log('Current time is: '+hours );


var regYear= new RegExp(/^[0-9]{4}$/);
var regMes=new RegExp(/^[0-9]{2}$/);
var regDIa= new RegExp(/^[0-9]{2}$/);

    var regMes1=new RegExp(/^0[1-9]{1}|1[0-2]{1}$/);
    var regDia1=new RegExp(/^0[1-9]{1}|1[0-9]{1}|2[0-9]|3[0-1]$/);



    /*/^user [a-z]{8} is note registered in te app$/.test

    /^User [a-z]{3,8} is not registered in the app$/.test('User leo is not registered in the app')*/

};