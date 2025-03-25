//arrays
// const list = [1, 2, 3, 5];
// // console.log(list.indexOf(2));
// list.filter();

// const isEven = list.map((num) => num * 2);
// console.log(isEven);

//objects

//  *Direct* students, in pairs, to write a function (countTarget()) that does the following:
// * Accepts two arguments: an array of values (arr) and a target value (target)
// * Counts the number of times target appears in arr
// * Returns an object with two keys:
//   * success, storing a boolean value based on whether the target was found at all within arr
//   * count, storing the number of times target appears in arr

// *Provide* the following helpful examples:
// * countTarget([1, 1, 1], 1) -> { success: true, count: 3 }
// * countTarget([1, 1, 1], 3) -> { success: false, count: 0 }
// * countTarget([1, 1, “1”], 1) -> { success: true, count: 2 }

function countTarget(arr, num) {
  let count = 0;
  let success = false;
  arr.map((i) => {
    if (i === num) {
      count++, (success = true);
    }
  });

  return { success: success, count: count };
}
console.log(countTarget([1, 1, 1], 1));
