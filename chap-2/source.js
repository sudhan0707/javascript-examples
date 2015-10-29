
console.log("source.js file loaded!!");

// Function declaration
function sum (a, b){
	var c = a + b;
	return c;
}

// Function invocation
var result = sum (1, 2);
console.log(result);

//Run these on Chrome's debug console -- Start
//sum (1);
//sum (1,2,3,4,5)
//Run these on Chrome's debug console -- End

function args() { 
	return arguments;  // The arguments array that is created automatically
					  // within function simply returns whatever parameters are passed to it.
}

//args();

// Assignment: Using arguments array enhance Sum function

var f = function() { return 1; }
typeof f // returns function

var sum = function (a, b){ return a + b; }
var add = sum;


// Callback Function

function invokeCallbacksAndAdd (a, b){
	return a() + b();
}

function one(){ return 1; }
function two(){ return 2; }

//Function invocation
invokeCallbacksAndAdd(one, two);

// Class workout: Write a function to perform multiplication using multiple callback parameters

// Self Invoking Function
( function(){
	console.log( "Called within Self Invoking Function" );
})()

( function(name){
	console.log(" Hey "+name+", How's it going")
})('John')



//Inner(Private) Functions
// Using Function Declaration
function simpleFunctionA (param) {
  function innerFunctionB (input){
  	return input + 2;
  }
	return 'The result is '+ innerFunctionB(param);
}

// Class work -  Using Function Expression

var simpleFunctionA = function (param){
	var innerFunctionB = function (input){
		return input + 2;
	}
	return 'The result is '+ innerFunctionB(param);
}