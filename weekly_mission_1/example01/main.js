// 1. Creation of an object with properties

let myCar = new Object(); // Object creation
myCar.make = "Ford"; // Storing a value inside of an object's property
myCar.model = "Mustang";
myCar.year = "1969";

console.log(myCar) // Printing object

// 2. Creation of an object with local and public variables

const myModule = (() => {

// Local context variables
	const privateFoo = "I'm a private value, I'm only used inside of this object";
	const privateBar = [1, 2, 3, 4];
	const baz = "I'm a value which is going to be exposed";

// Variable to store the local variables
	const exported = {
		publicFoo: "Public value, I'm able to be seen wherever I'm invoked",
		publicBar: "Another public value",
		publicBaz: baz,
	};

// Exposition of local variables
	return exported;
})();

console.log(myModule);

