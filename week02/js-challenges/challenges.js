///1) Problem - Reverse a String

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("hello"));

//2) Problem - Find the Largest Number in an Array
function findlargest(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

console.log(findlargest([1, 6, 3, 4, 5]));

//**3) Problem - Count the Vowels**
function countVowels(str) {
  let vowel = "aeiou";
  let count = 0;

  for (i = 0; i < str.length; i++) {
    if (vowel.includes(str[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("hello"));

//**4) Problem - Remove Duplicates from an Array:**
//[1, 2, 2, 4, 5, 10, 10, 11]

function removeDuplicates(arr) {
  //let num = 0
  let arr2 = [];
  for (i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(removeDuplicates([1, 2, 2, 4, 5, 10, 10, 11]));

//**5) Problem - Sum of Array Elements**

function sumArray(arr) {
  let sum = 0;
  arr.forEach((num) => (sum += num));
  return sum;
}

console.log(sumArray([1, 2, 4]));

//**6) Problem - Check for Palindrome**

function isPali(str) {
  if (str === str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isPali("hello"));

// ### Beginner Level

// **1) Problem - Fizzbuzz**
function fizzBuzz(num) {
  for (i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    }
  }
}

fizzBuzz(15);

//**2) Problem: Find the longest word**

function findlargestWord(str) {
  let arr = str.split(" ");
  let largestWord = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largestWord.length) {
      largestWord = arr[i];
    }
  }
  return largestWord;
}

console.log(findlargestWord("hi my name is shaun"));

//**3) Problem: Two Sum**

function twoSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        //result.push(i, j) // all matching index numbers
        result = [i, j]; //returns the first matching indecis
      }
    }
  }
  return result;
}

console.log(twoSum([1, 2, 4, 5], 6));
