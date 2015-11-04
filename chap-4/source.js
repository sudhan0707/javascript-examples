console.log("source.js file loaded!!");

//Accessing Object's Properties
var hero = {
	breed: 'Turtle',
	occupation: 'Ninja'
};

console.log("Using Dot notation "+ hero.breed);
console.log("Using square bracket notation " + hero['occupation']);

//Calling an object's Methods
var hero = {
	breed: 'Turtle',
	occupation: 'Ninja',
	say: function (){
		return "I'm "+ hero.occupation;
	}
};

console.log("Using Dot notation " + hero.say());
console.log("Using square bracket notation "+ hero['say']());


//Altering Properties/Methods
var hero = {};
hero.breed = 'turtle';
hero.occupation = 'Ninja';
hero.say = function () { return hero.name ; };

//deleting property
delete hero.name;


//Function that Return Objects
function factory (name){
	return {
		name:name
	};
}

var obj = factory('one');
console.log(obj.name);


//Passing Objects.
var original = {
   name: 'John'
};

var copy = original;
copy.name = 'Jane';
console.log(original.name);

var f = function( obj){
   obj.name = "Jeff";
}

f(original);
console.log(original.name);

// Comparing objects
var fido = { breed: 'dog' };
var benji = { breed: 'dog'};

console.log(fido === benji); // false
console.log(fido == benji); //false

var mydog = benji;

console.log(mydog === benji); // true

//Objects' build in behaviors

var obj = {};
console.log (obj.constructor);
console.log(obj.toString());
console.log(obj.valueOf());

var obj = new Object();
console.log (obj.constructor);
console.log (obj.toString());
console.log(obj.valueOf());

//Function's methods and The Prototype Property
function doSomething(val){
	return val;
}

console.log(doSomething.length);
console.log(doSomething.constructor);
console.log(doSomething.prototype);

//Adding Methods and properties using the prototype

function Gadget(name, color){
	this.name = name;
	this.color = color;
	this.whoAreYou = function(){
		return "I'm a " + this.color + " " + this.name;
	}
}

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;

Gadget.prototype.getInfo = function(){
	return 'Rating: ' + this.rating +', price: ' + this.price;
};