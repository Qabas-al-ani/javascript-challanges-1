// challenge 1 ..  reverse a string .
// return a string in reverseNumber.

/////////////

// solution one
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

////////
//  solution 2
// function reverseString(str) {
//   // initialize an empty string
//   let revStr = "";
//   for (let i = 0; i < str.length; i++) {
//     revStr = str[i] + revStr;
//   }
//   return revStr;
// }

/////////////
// solution 3
// function reverseString(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr = newStr + str[i];
//   }

//   return newStr;
// }

/////////////
// solution 4

// function reverseString(str) {
//   let revStr = "";
//   for (let char of str) {
//     revStr = char + revStr;
//   }

//   return revStr;
// }

////////////////////////////
// solution 5

function reverseString(str) {
  let newStr = "";

  str.split("").forEach(function (char) {
    newStr = char + newStr;
  });

  return newStr;
}

const output = reverseString("hello");
console.log(output);
