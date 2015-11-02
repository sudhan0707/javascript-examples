Subcribe to  https://groups.google.com/forum/#!forum/ui-bactch2015
- To learn JS and to post ur questions.

## Some more Function Types

#### Inner (Private) Functions
1. Keeps the global namespace clean (smaller chance of naming collisions)
2. Privacy - You expose only the functions that you decide to the "outside world", keeping to yourself functionality that is not meant to be consumed by the rest of the application.

#### Functions that Return Functions
1. A function always returns a value.
2. A function can return only one value at a time. And this value could also be an another function.
Check out this article: http://davidwalsh.name/javascript-functions

#### Closures.
// Will come back on Closure in near future.

## Scope
 1. The visibility/accessibility of variables in our code.
 2. Global scope is the top level scope.
 3. Global scope === window scope. 
 4. A variable defined in a function is not visible outside th function, but a variable defined in a code block is visible outside the block.

####Global Scope
1. Global variables are visible everywhere
2. Can be overwritten by other scripts.

####Lexical Scope
 1. Functions have lexical scope. This means that function create their scope when they are defined, not when they are executed.


#### Closure - Continued
1. A closure is a special kind of object that combines two things
	- a function
	- the environment in which that the function was created.
The environment consists of any local variables that were in-scope at the time that the closure was created.
Read More @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

##### Further Reading on Closure
Explaining JavaScript scope and closures (Robert Nyman) 
Url: http://robertnyman.com/2008/10/09/explaining-javascript-scope-and-closures/
Closures in JavaScript (James Padolsey)
Url: http://james.padolsey.com/javascript/closures-in-javascript/
JavasCript Closures at Jibbering.com
Url: http://www.jibbering.com/faq/faq_notes/closures.html
JavaScript Closures for Dummies
Url: http://blog.morrisjohns.com/javascript_closures_for_dummies

##Objects
1. An Object is very similar to an array but with the difference that you define the keys yourself.
2. You can define objects either using object literal notation or Constructor Function


