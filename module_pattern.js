// In object literal notation, an object is described as a set of comma-separated 
// name/ value pairs enclosed in curly braces ({}).

// The module pattern encapsulates 'privacy', state and organization using closures. 
// It provides a way of wrapping a mix of public and private methods and variables, 
// pro- tecting pieces from leaking into the global scope and accidentally colliding 
// with another developer's interface. With this pattern, only a public API is returned, 
// keeping every- thing else within the closure private.

var myObjectLiteral = { 
	variableKey: variableValue,
	functionKey: function(){
       // ...
    } 
};

var myModule = {
  myProperty: 'someValue',
  // object literals can contain properties and methods. 
  // here, another object is defined for configuration // purposes:
  myConfig: {
    useCaching: true,
    language: 'en' 
  },
  // a very basic method
  myMethod: function () {
    console.log('I can haz functionality?'); },
  // output a value based on current configuration
  myMethod2: function () {
    console.log('Caching is:' + (this.myConfig.useCaching) ? 'enabled' : 'disabled'); },
  // override the current configuration
  myMethod3: function (newConfig) {
    if (typeof newConfig == 'object') {
       this.myConfig = newConfig;
       console.log(this.myConfig.language); 
    }
  } 
};
  myModule.myMethod(); // I can haz functionality 
  myModule.myMethod2(); // outputs enabled 
  myModule.myMethod3({
    language: 'fr',
    useCaching: false 
  }); // fr

////////////////

var testModule = (function () { 
  var counter = 0;
  return {
    incrementCounter: function () { 
      return counter++;
    },
    resetCounter: function () {
      console.log('counter value prior to reset:' + counter);
      counter = 0; 
    }
  }; 
})();
// test
testModule.incrementCounter(); 
testModule.resetCounter();


//////////

var basketModule = (function () { 
	var basket = []; 
    //private 
    function doSomethingPrivate() {
    //...
    }
    function doSomethingElsePrivate() { //...
    }

	return { //exposed to public
	   addItem: function (values) { 
	   	basket.push(values);
	   },

	   getItemCount: function () {
	    return basket.length; 
	   },

	   getBusket: function () {
	    return basket; 
	   },

	   doSomething: doSomethingPrivate(), 
	   getTotal: function () {
	      var q = this.getItemCount(), 
	      p = 0;
	      while (q--) {
	        p += basket[q].price;
	      }
	      return p; 
	   }
    } 
}());

basketModule.addItem({ 
	item: 'bread', 
	price: 0.5
}); 
basketModule.addItem({
    item: 'butter',
    price: 0.3 
});
console.log(basketModule.getItemCount()); 
console.log(basketModule.getTotal());
// however, the following will not work:
console.log(basketModule.getBusket());
console.log(basket); //(only exists within the scope of the closure)

///////////// JQUERY

function library(module) { 
	$(function () {
        if (module.init) { 
        	module.init();
        } 
    });
    return module; 
}
var myLibrary = library(function () { 
	return {
        init: function () {
      /*implementation*/
        } 
    };
}());



