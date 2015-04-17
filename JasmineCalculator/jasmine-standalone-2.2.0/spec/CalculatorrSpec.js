
/*
 * Created by daneiva gamboa on 3/31/2015.
 *
 * ref: Calculator.js

Calculator
Should be able to Add two o more differents values
Should be able to Subtract two o more differents values
Should be able to Multiply two o more differents values
Should be able to Divide two two o more differents values
*///

describe('Practice of JavaScript: Test Cases for Calculator',function(){

    beforeEach(function(){
        ////
    });
    afterEach(function(){
        ///
    });
    describe(' Test Cases for: Add',function(){

        var  calculator;
        beforeEach(function(){
           calculator = new Calculator();
            //calculator.reset();
        });

        it ('1.1 Should be able to Add two numbers',function(){

            var calculator = new Calculator();
            var actRes= calculator.add(3,2);
            var expRes = 5;

            expect(actRes).toBe(expRes);
            //expect(calculator.add (3,2).toBe (5));
        });
        it ('1.2 Should not be able to add letters two letters', function () {
            var calculator = new Calculator();
            expect(function (){
            calculator.add('ed','tpi');
           }).toThrow('error');
        });
        it ('1.3 Should be able to add un number', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.add(84,'');
            }).toThrow('error');
        });
        it ('1.4 Should not be able to add nulls values', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.add('','');
            }).toThrow('error');
        });
        it ('1.5 Should not be able to add number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.add(35,'a');
            }).toThrow('error');
        });
        it ('1.6 Should not be able to add number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.add('a',59);
            }).toThrow('error');
        });
        it ('1.7 Should not be able to add values differents of numbers ', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.add('a5','yy8');
            }).toThrow('error');
        });
        it ('1.8 Should not be able to add two values negatives ', function () {
            var calculator = new Calculator();
            var actRes= calculator.add(-3,-2);
            var expRes = -5;

            expect(actRes).toBe(expRes);
        });
        it ('1.9 Should not be able to add one positive and one negative value ', function () {
            var calculator = new Calculator();
            var actRes= calculator.add(-3,8);
            var expRes = 5;
            expect(actRes).toBe(expRes);
        });
    });

    describe(' Test Cases for: Subtract',function(){
        it ('2.1 Should be able to Subtract two numbers',function(){
            var calculator =  new Calculator();
            var actRes = calculator.subtract(4,2);
            var expRes = 2;
            expect(actRes).toBe(expRes);
        });
        it ('2.2 should be able to subtract with 1st number is minor and second mayor ',function(){
            var calculator = new Calculator();
            var actRes = calculator.subtract(6,9);
            var expRes = -3;
            expect(actRes).toBe(expRes);
        });
        it ('2.3 Should be able to subtract un number', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.subtract(6,'');
            }).toThrow('error');
        });
        it ('2.4 Should not be able to subtract nulls values', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.subtract('','');
            }).toThrow('error');
        });
        it ('2.5 Should not be able to subtract number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.subtract(6,'a');
            }).toThrow('error');
        });
        it ('2.6 Should not be able to subtract number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.subtract('a',8);
            }).toThrow('error');
        });
        it ('2.7 Should not be able to subtract vales differents of numbers ', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.subtract('##','yy8');
            }).toThrow('error');
        });
        it ('2.8 Should not be able to subtract two values negatives ', function () {
            var calculator = new Calculator();
            var actRes= calculator.subtract(-3,-2);
            var expRes = -1;

            expect(actRes).toBe(expRes);
        });
        it ('2.9 Should not be able to subtract one positive and one negative value ', function () {
            var calculator = new Calculator();
            var actRes= calculator.subtract(-3,8);
            var expRes = -11;
            expect(actRes).toBe(expRes);
        });
    });

    describe(' Test Cases for: Multiply',function(){
        it ('3.1.Should be able to Multiply two numbers',function(){
            var calculator = new Calculator();
            var actRes = calculator.multiply(6,3);
            var expRes = 18;
            expect(actRes).toBe(expRes);
        });
        it ('3.2 Should be able to Multiply un number', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.multiply(8,'');
            }).toThrow('error');
        });
        it ('3.3 Should not be able to Multiply nulls values', function () {
            var calculator = new Calculator();
            expect(function(){
                calculator.multiply('','');
            }).toThrow('error');
        });
        it ('3.4 Should not be able to Multiply number value with letter', function () {
            var calculator = new Calculator();
            expect(function(){
                calculator.multiply(5,'a');
            }).toThrow('error');
        });
        it ('3.5 Should not be able to Multiply number value with letter', function () {
            var calculator = new Calculator();
            expect(function(){
                calculator.multiply('a',5);
            }).toThrow('error');
        });
        it ('3.6 Should not be able to Multiply vales differents of numbers ', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.multiply('a5','yy8');
            }).toThrow('error');
        });
        it ('3.7 Should not be able to Multiply two values negatives ', function () {
            var calculator = new Calculator();
            var actRes= calculator.multiply(-3,-2);
            var expRes = 6;

            expect(actRes).toBe(expRes);
        });
        it ('3.8 Should not be able to Multiply one positive and one negative value ', function () {
            var calculator = new Calculator();
            var actRes= calculator.multiply(-3,8);
            var expRes = -24;
            expect(actRes).toBe(expRes);
        });
        it ('3.9 Should not be able to Multiply one positive and one negative value ', function () {
            var calculator = new Calculator();
            var actRes= calculator.multiply(3,-8);
            var expRes = -24;
            expect(actRes).toBe(expRes);
        });
    });

    describe(' Test Cases for: Divide',function(){
        it ('4.1 Should be able to Divide two numbers',function(){

            var calculator = new Calculator();
            var actRes = calculator.div(8,2);
            var expRes = 4;

            expect(actRes).toBe(expRes);
        });
        it ('4.2 should be able to Divide with 1st number is minor and second mayor ',function(){
            var calculator = new Calculator();
            var actRes = calculator.div(3,9);
            var expRes = 0.3333333333333333;
            expect(actRes).toBe(expRes);
        });
        it ('4.3 Should be able to Divide un number', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.div(8,'');
            }).toThrow('error');
        });
        it ('4.4 Should not be able to Divide nulls values', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.div('','');
            }).toThrow('error');
        });
        it ('4.5 Should not be able to Divide number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.div(5,'a');
            }).toThrow('error');
        });
        it ('4.6 Should not be able to Divide number value with letter', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.div('a',5);
            }).toThrow('error');
        });
        it ('4.7 Should not be able to Divide vales differents of numbers ', function () {
            var calculator = new Calculator();
            expect(function (){
                calculator.div('a5','yy8');
            }).toThrow('error');
        });
        it ('4.8 Should not be able to Divide two values negatives ', function () {
            var calculator = new Calculator();
            var actRes= calculator.div(-8,-2);
            var expRes = 4;
                expect(actRes).toBe(expRes);
        });
        it ('4.9 Should not be able to Divide one value negative nad one positive ', function () {
            var calculator = new Calculator();
            var actRes= calculator.div(-8,2);
            var expRes = -4;
            expect(actRes).toBe(expRes);
        });
        it ('4.10 Should not be able to Divide one value negative(mayor) nad one positive(minor) ', function () {
            var calculator = new Calculator();
            var actRes= calculator.div(-8,2);
            var expRes = -4;
            expect(actRes).toBe(expRes);
        });
        it ('4.11 Should not be able to Divide one value negative(minor) nad one positive(mayor) ', function () {
            var calculator = new Calculator();
            var actRes= calculator.div(-8,10);
            var expRes = -0.8;
            expect(actRes).toBe(expRes);
        });

    });
});


