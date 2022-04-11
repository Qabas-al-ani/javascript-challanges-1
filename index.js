// challenge 1 ..  reverse a string .
// return a string in reverseNumber.

/////////////

// solution one
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

////////
//  solution 2
function reverseString(str) {
  // initialize an empty string
  revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}

const output = reverseString("hello");
console.log(output);
