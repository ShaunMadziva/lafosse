function findLargest(arr) {
  if (!arr || arr.length === 0) {
    return -1;
  }

  let maxIndex = 0;
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}

console.log(findLargest([1, 1, 4, 1])); // Output: 2

module.exports = { findLargest };
