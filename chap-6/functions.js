(function(){
	'use strict';

	//Working with Functions
	function testFunction(arg1, arg2){
		return arg1 + arg2;
	}

	console.log(testFunction.length);


	var person = {

		name: 'John',
		job: 'JS Developer'
	};

	function introduce(){
		console.log('Hey! My name is '+ this.name +' and I\'m a ' + this.job);
	}

	//introduce(); // type error

	introduce.call(person);

	function introduceTo(inductee){
		console.log('Hey ' +inductee+'! My name is '+ this.name +' and I\'m a ' + this.job);
	}

	introduceTo.call(person, 'Smith');

	function chat(respondent, subject) {
		console.log('Hey ' +respondent+'! My name is '+ this.name +' and I\'m a ' + this.job+ '. Today, Lets talk about '+ subject);
	}

	chat.apply(person, ['Smith', "Meet ups"]);

	function engage(mode, object, args){
		mode.apply(object, args);
	}

	engage (chat, person, ['Smith', "Meet ups"]);


	function addToCart (price){
		if(!this.total){
			this.total = 0;
		}
		this.total += price;
		return this.name + '\'s totatl is USD'  + this.total;
	}

	var johnCart = addToCart.bind(person);

	console.log(johnCart(50));
	console.log(johnCart(100));

})();