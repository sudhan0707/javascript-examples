## Functions
 Just like variables, Functions can be defined anywhere in the code.
	1. A Logical grouping of one or more expressions.
	2. Invoked arbitrarily to execute the expressions.	

####Function Types
 Javascript provides several ways of defining them :
   1. Function Declaration
   2. Function Expression
   3. Named Function Expression
   4. Self Invoking Function
   5. Self Invoking Anonymous Function

#### Function Declaration
   1. Parsed at pre-execution stage, when the browser prepares to execute the code. - Called hoisting functions.
   		Read More at: http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
   2. Functions declared this way can be called both 'after' and 'before' the definition.

#### Function Expression
   1. A function in javascript is a first-class value, just like a number or string.
   2. Anywhere where you could put a value, you can also put a function.

#### Named Function Expression
   1. A function expression that has a name is called NFE.
   2. Imporves debugging experience.

#### Self Invoking Functions / Self Invoking Anonymous Functions
1. Runs automatically/ immediately when you create it.
	  Read More: https://sarfraznawaz.wordpress.com/2012/01/26/javascript-self-invoking-functions/

##Assignments
1.  Fortune Teller
	* Write a function named 'tellFortune' that: 
		- takes 4 arguments: number of children, parent's name, geographic location, job title.
		- outputs your fortune to the screen like so: 'You will be a X in Y, and married to Z with N kids.'
	* Call that function 3 times with 3 different values for the arguments.

2. The liftime Suppy Calculator
	* Write a function named calculateSupply that: 
		- takes 2 arguments: age, amount per day.
		- calculates the amount consumed for rest of the life (based on a constant max age).
		- outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
	* Call that function three times, passing in different values each time.
	* Bonus: Accept floating point values for amount per day, and round the result to a round number.

3. The Geometrizer
Create 2 functions that calculate properties of a circle, using the definitions here.
Create a function called calcCircumfrence:
	* Pass the radius to the function.
	* Calculate the circumference based on the radius, and output "The circumference is NN". 

	Create a function called calcArea:
	- Pass the radius to the function.
 	- Calculate the area based on the radius, and output "The area is NN".