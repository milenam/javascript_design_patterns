// Each of the following options will create a new empty object:
var newObject = {}; // or
var newObject = Object.create(null); // or
var newObject = new Object();

// 1. Dot syntax
newObject.someKey = 'Hello World'; // Write properties
var key = newObject.someKey; // Access properties
// 2. Square bracket syntax
newObject['someKey'] = 'Hello World'; // Write properties
var key = newObject['someKey']; // Access properties
// ECMAScript 5 only compatible approaches
// For more information see: http://kangax.github.com/es5-compat-table/
// 3. Object.defineProperty
Object.defineProperty(newObject, "someKey", {
  value: "for more control of the property's behavior", writable: true,
  enumerable: true,
  configurable: true
});

var defineProp = function ( obj, key, value ){
	config.value = value;
	Object.defineProperty(obj, key, config);
}


// Create a new empty object
var man = Object.create(null);
// Populate the object with properties
defineProp( man, 'car', 'Delorean' );
defineProp( man, 'dob', '1981' );
defineProp( man, 'beard', false );

Object.defineProperties(newObject, {
	"someKey": {
	  value: "Hello World",
	  writable: true },
	"anotherKey": {
		value: "Foo bar",
		writable: false
	}
});


//these methods can even be used for inheritance, as follows:

var driver = Object.create(man);
defineProp(driver, 'topSpeed', '100mph');
driver.topSpeed // 100mph