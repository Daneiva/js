/**
 * Created by daneiva gamboa on 3/20/2015.
 */
var sayhello= function(){
console.log ('hello!')
};

sayhello();

var sayhello1= function(name){
    console.log ('hello!'+name+'!');
};
sayhello1('pedro');//fomra de invovar a la funcion


(function(name){
    console.log ('hello!'+name+'!');
})('pedro');

//Funciones anidadas
var pepe = new person1 (name, age);
pepe.getAte();
pepe.getHistory();
pepe.age= -13;

////
var person1 = fuction(name, age)
{
    this.name = name;
    this.age = age;

    this.getAge = function () {
        return this.age;
    };

    this.setAge = function (newAge) {
        this.name = newAge;
    };

    this.getHistory = function () {
        console.log(this.age);
    };

    this.getHistory = function () {
        Console.log(this.name + 'was born' + this.age + 'years ago');
    };
};
////////////////////////////////

var person = fuction(name, age)
{
    var _name = name;
    var _age = age;

    this.getAge = function () {
        return this.age;
    };

    this.setAge = function (newAge) {
        this.name = newAge;
    };

    this.getHistory = function () {
        console.log(this.age);
    };

    this.getHistory = function () {
        Console.log(this.name + 'was born' + this.age + 'years ago');
    };
};
