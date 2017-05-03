function counter() {
	var cntr = 1;

	function incrementcntr() {
	  return cntr++;
	}

	return incrementcntr;
}
var increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());

var increment2 = counter();

console.log(increment2());
console.log(increment2());
console.log(increment2());
console.log(increment2());
