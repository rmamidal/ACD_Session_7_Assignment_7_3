// Function with closure to increment counter.
function counter() {
	var cntr = 1;

  // Closure to increment outer fucntion counter.
	function incrementcntr() {
	  return cntr++; // Post increament counter.
	}

	return incrementcntr; // Return closure function.
}

var increment = counter(); // Calling Counter function (outer) to set the counter = 1;

console.log(increment()); // Calling closure function to increment counter = 1.
console.log(increment()); // Calling closure function to increment counter = 2.
console.log(increment()); // Calling closure function to increment counter = 3.

var increment2 = counter(); // Calling Counter function (outer) to set the counter = 1;

console.log(increment2()); // Calling closure function to increment counter = 1.
console.log(increment2()); // Calling closure function to increment counter = 2.
console.log(increment2()); // Calling closure function to increment counter = 3.
console.log(increment2()); // Calling closure function to increment counter = 4.
