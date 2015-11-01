'use strict';


console.log("source.js file loaded!!");

// Inner Private Functions using Function declaration
function outerFunction( param){
 	function innerFunction(input){
 		return input * 2;
 	};

 	return ' The result is '+ innerFunction(param);
}

// Inner Private function using function expression

var outerExpFunction = function (param){

	var innerExpFunction = function (input){
		return input * 2;
	};

	return 'The result is '+innerExpFunction(param);
}

// Scope -> Functional Scope

var a = 10; // Global Variable

 function doSomething(){
 	var b = 19; // Local variable
 	return a;
 }

// b is undefined outside the function scope.

//Lexical scope
 function lf1() { 
  var la = 10;
  lf2();
 }
 
 function lf2(){
 	console.log(la);
 }

// a is undefined


// Closure
  function cf(){
  	 var b = "b";

  	 return function(){
  	 	return b;
  	 }
  };

  //>> b - undefined
  // >> cf()() returns b;


 // Object Definition
// Object literal notation
  var book = {
  	name: 'Javascript: The Good Parts',
  	published: 2008,
  	author : {
  		firstname: 'Douglas',
  		lastname: 'Crockford'
  	}
  }

// Altering Properties and Methods

  var hero = {};

  hero.breed = 'turtle';
  hero.name = 'Leonardo';
  hero.sayName = function () { return hero.name; }

  //hero.sayName()

  // Constructor Functions

  function Hero (name){
  	this.name = name;
  	this.occupation = 'Save the world!!'
  	this.whoAreYou = function(){
  		return "I'm " + this.name+ " and my occupation is to '" +this.occupation+"'";
  	}
  }

  // var hero = new Hero ();
