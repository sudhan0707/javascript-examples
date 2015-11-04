Subcribe to  https://groups.google.com/forum/#!forum/ui-bactch2015
- To learn JS and to post ur questions.

##Objects
  1. Object is the parent of all JS objects, which means that every object you create inherits from it. 

####Accessing Object's Properties
There are two ways to access a property of an Object.
	1. Using square bracket notation,
	2. Using the dot notation.
####Calling an object's Methods
Because a method is just a property that happens to be a function, you can access methods in the same way as you would access properties:
	1. Using the dot notation
	2. Using the square bracket notation.
Calling (invoking) a method is the same as calling any other function: just add parentheses after the method name, which effectively say "Execute!".
####Altering Properties/Methods
JS is a dynamic language. You can alter properties and methods of existing objects at anytime. This includes adding new properties or deleting them.

####Function that Return Objects
Using Constructor functions and the new operator to create objects, you can also use a normal function and create objects without new.
You can have a function that does some preparatory work and have an object as a return value.


###Passing Objects
1. When you pass an object to a function, you only pass a reference of the object. If you make to changes to the reference, you are actually modifying the original object.

###Comparing Objects
1. when you compare objects, you'll get true only if you compare two references to the same object. Comparing two distinct objects that happen to have the exact same methods and properties will return false.

### Objects' build in behaviors
An empty object is not completely useless because it already contains some methods and properties.
1. o.constructor property returns the constuctor function.
2. o.toString() is a method that returns a string representation of the object.
o.valueOf() returns a single value representation of the object, often this is the object itself.


##Prototype
JS is classified as having a prototype-based object model. 
####The Prototype Property
1. The functions in JS are objects and they contain methods and properties.
2. Every function has a Prototype property and it contains an object.

## Read, Read, Read
#### Regular Expressions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions