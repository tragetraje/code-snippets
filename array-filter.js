// Trying to understand how Array.prototype.filter() works

var myArray = [0, 0, 1, 0, 1];

function filterFunction(number) {
  return number === 1;
}

console.log(filterFunction(1));

// Array.prototype.filter()

console.log(myArray.filter(filterFunction));
