// Understanding method chaining
// Let's try to create a method on an object which can be chained:

var myFakeElement = {
  on: function(something) {
    console.log("Running .on with " + something);
  }
};

console.log(myFakeElement.on("test string")); // Running .on withtest string

// If you try to chain it, it'll return 'undefined' since the method itself doesn't return anything

//console.log(myFakeElement.on("test string").on('another string')); // Cannot read property 'on' of undefined

// Let's modify the method that it returns the object itself so it can be called over and over again:

var myFakeElement = {
  on: function(something) {
    console.log("Running .on with " + something);
    return this;
  }
};

console.log(myFakeElement.on("test string").on('another string'));
// Running .on with test string
// Running .on with another string
// { on: [Function] }
