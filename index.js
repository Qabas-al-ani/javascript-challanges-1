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

// function reverseString(str) {
//   let newStr = "";

//   str.split("").forEach(function (char) {
//     newStr = char + newStr;
//   });

//   return newStr;
// }

/////////////

// // solution 6
// function reverseString(str) {
//   return str.split("").reduce(function (newStr, char) {
//     return char + newStr;
//   }, "");
// }

//////////////////////// //
// challenge 2
// iaPalindrome

// function isPalindrome(str) {
//   const revStr = str.split("").reverse().join("");

//   return revStr === str;
// }

//////////////////////////////
// challenge 3
/////////////////////////////

// reverse an integer number
// solution

// function reverseInteger(int) {
//   let newInt = int.toString().split("").reverse().join("");

//   return parseInt(newInt) * Math.sign(int);
// }

////////////////////////////
// challenge 4
////////////////
// capitalize first letter of the string

// function capitalizeFirstLetter(str) {
//   const strArray = str.toLowerCase().split(" ");

//   for (let i = 0; i < strArray.length; i++) {
//     strArray[i] =
//       strArray[i].substring(0, 1).toUpperCase() + strArray[i].substring(1);
//   }

//   return strArray.join(" ");
// }

//////////////
// solution 2

function capitalizeFirstLetter(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
}

const output = capitalizeFirstLetter("qabas al ani");
console.log(output);
