Subcribe to  https://groups.google.com/forum/#!forum/ui-bactch2015
- To learn JS and to post ur questions.

## Prototype - Continued.

####Own Properties versus prototype Properties
1. If one of your objects doesn't have a certain property of its own, it can use one somewhere up the prototype chain.
2. You want to distinguish between the object's own properties with the prototype's properties, use 'hasOwnProperty()'.

####Augmenting Built-in Objects
1. Augmenting built-in objects through the protoype is a very powerful technique and you can use it to shape JS any way you like. Because of its power, you should always thorougly consider your options before using this approach.
Read more: 
http://www.sitepoint.com/augmenting-javascript-core-objects/
http://sugarjs.com/native
http://perfectionkills.com/whats-wrong-with-extending-the-dom/



## Inheritance
1. Helps in reusing existing code.
2. Promotes laziness

JS is a dynamic language and there is usually more than one way to achieve any given task.

####Prototype Chaining
1. Default way of implementing inheritance.
2. Every function has a prototype property, which contains an object.
3. The prototype object is just a regular object and therefore it also contains a link to its prototype. And so a chain is created, called a prototype chain.

