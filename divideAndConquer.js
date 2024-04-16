/**
 * Divide and Conquer (분할정복)
 *
 * This pattern involves dividing a data set into smaller chunks and then repeating a process width a subset of data.
 *
 * This pattern can tremendously decrease time complexity
 */

/**
 * Example
 *
 * Given a sorted array of integers, write a function called search,
 * that accepts a value and returns the index where the value passed to the function is located.
 * if the value is not found, return -1
 */

// naive solution

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// refactor
function searchRefactor(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    let currentElement = arr[middle];

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

console.log(searchRefactor([1, 2, 3, 4, 5], 4));
