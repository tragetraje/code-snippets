// Trying to understand how Array.prototype.filter() works

var myArray = [0, 0, 1, 0, 1];

function filterFunction(number) {
  return number === 1;
}

console.log(filterFunction(1));

// Array.prototype.filter()

console.log(myArray.filter(filterFunction));

// Recreate filter function

function filter(someArray, someFilterFunction) {
  var filteredArray = [];
  for (var i = 0; i < someArray.length; i++) {
    if (someFilterFunction(someArray[i]) === true) {
      filteredArray.push(someArray[i]);
    }
  }
  return filteredArray;
}

console.log(filter(myArray, filterFunction));
