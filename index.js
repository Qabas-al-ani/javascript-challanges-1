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
// solution 2 for this challenges

// function capitalizeFirstLetter(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map(function (word) {
//       return word[0].toUpperCase() + word.substring(1);
//     })
//     .join(" ");
// }

///////////////////////////
// solution 3
////////////////////

// function capitalizeFirstLetter(str) {
//   return str.replace(/\b[a-z]/gi, function (char) {
//     return char.toUpperCase();
//   });
// }

///////////////////////////////
// challenge 5
////////////////////
// ex maxCharacter('javascript')

// solution 1

// function maxCharacter(str) {
//   const charMap = {};
//   let maxNum = 0;
//   let maxChar = "";

//   str.split("").forEach(function (char) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   });

//   for (let char in charMap) {
//     if (charMap[char] > maxNum) {
//       maxNum = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

/////////////////////////////
// challenge 6
///////////////////////

// Fizz buzz challenge
/////////////////

// solution one

// function fizzBuzz() {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// const output = fizzBuzz();
// console.log(output);

// Challenge Longest word
// solution Longest
// function longestWord(sen) {
//   const newWord = sen.toLowerCase().match(/[a-z0-9]+/g);

//   //   sort by length
//   const sorted = newWord.sort(function (a, b) {
//     return b.length - a.length;
//   });

//   //   if multiple words put into an array

//   const longestWordArray = sorted.filter(function (word) {
//     return word.length === sorted[0].length;
//   });
// }

// // Challenge chunked array
// // Solution chunked
// function chunkedArray(arr, len) {
//   //   init chunked array
//   const chunkedArr = [];
//   //   set index
//   let i = 0;
//   // loop while the index is less than the arr length
//   while (i < arr.length) {
//     chunkedArr.push(arr[i]);
//     i += len;
//   }
//   return chunkedArr;
// }
///////////////////////////
// Challenge add all numbers

// function addAll(...numbers) {
//   /////////////////////// solution arguments and for loop with es5
//   // var args = Array.prototype.slice.call(arguments);
//   // var total = 0;

//   // for (i = 0; i < args.length; i++) {
//   //   total += args[i];
//   // }
//   // return total;

//   /////////////////////// Solution  2 ES6
//   // let total = 0;
//   // numbers.forEach(num => (total += num));
//   // return total;
//   //////////////////////////////////////
//   // solution 3
//   return numbers.reduce((acc, cur) => acc + cur);
// }
// console.log(addAll(6, 4, 5, 10));

/////////////////////////////

// function sumAllPrimes(num) {
//   let total = 0;

//   function isPrime(i) {
//     for (let j = 2; j < i; j++) {
//       if (i % j === 0) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let i = 2; i <= num; i++) {
//     if (isPrime(i)) {
//       total += i;
//     }
//   }
//   return total;
// }
// console.log(sumAllPrimes(10));
/////////////////////////
// CHALLENGE SEEK AND DESTROY
// // Solution
// function seekAndDestroy(arr, ...rest) {
//   return arr.filter(val => !rest.includes(val));
// }
// console.log(seekAndDestroy([1, 2, 3, 4, 5, "heeopp"], 1, 2));
/////////////////////
// challenge sort by hight

function sortByHeight() {
  return;
}
