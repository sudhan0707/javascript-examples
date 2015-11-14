
console.log("source.js file loaded!!");

//Own Properties versus prototype Properties

function Gadget(name){
	this.name = name;
}

Gadget.prototype.name = "foo";
var toy = new Gadget('camera');

console.log(toy.name); // camera

delete toy.name;
console.log(toy.name) // foo;

toy.name = 'camera'
console.log(toy.name); //camera

// hasOwnProperty

function Gadget (name, color){
	this.name = name;
	this.color  = color;
	this.someMethod = function () { return 1; }
}

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;

//Creating new Object
var newtoy = new Gadget('webcam', 'black');

newtoy.hasOwnProperty('name'); //true
newtoy.hasOwnProperty('price'); //false


//Real example
Array.prototype.inArray = function (item){
	for (var i = 0, len = this.length; i < len; i++) {
		if(this[i] === item){
			return true;
		}
	}
	return false;
}

var a = ['red','green','blue'];
a.inArray('red'); //true
a.inArray('yellow'); // false

//Prototype Chaining

function Shape(){
	this.name = 'shape';
	this.toString = function (){
		return this.name;
	};
}

function TwoDShape(){
	this.name = '2D shape';
}

function Triangle(side, height){
	this.name = 'Triangle';
	this.side = side;
	this.height = height;
	this.getArea = function() {
		return this.side * this.height / 2;
	}
}

//client - prototype Chaining
TwoDShape.prototype = new Shape();
Triangle.prototype = new TwoDShape();

var ts = new Triangle (5, 10);
ts.getArea();
ts.toString();

TwoDShape.prototype.constructor = TwoDShape;
Triangle.prototype.constructor = Triangle;

console.log(ts instanceof Shape); //true
console.log(ts instanceof TwoDShape); // true
console.log(ts instanceof Triangle); // true
console.log(ts instanceof Array); // false

// Another way of prototype Chaining
function Shape (){ }
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){
	return this.name;
};

function TwoDShape (){}
TwoDShape.prototype = Shape.prototype;
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.prototype.name = '2D shape';


function Triangle (side, height){
	this.side = side;
	this.height = height;
}
Triangle.prototype = TwoDShape.prototype;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function (){
	return this.side * this.height / 2 ;
}
var ts = new Triangle(5, 10);
console.log(ts.getArea());//25
console.log(ts.toString()); // Triangle


