// challenge 1 ..  reverse a string .
// return a string in reverseNumber.

/////////////

// solution one
function reverseString(str) {
  return str.split("").reverse().join("");
}

const output = reverseString("hello");
console.log(output);
