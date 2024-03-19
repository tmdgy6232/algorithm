/**
 * SLIDING WINDOW
 *
 * This pattern involves creating a window witch can either be an array or number from one position to another
 *
 * Depending on a certain condition, the window either increases or closes (and a new window is created)
 *
 * Very useful for keeping track of a subset of data in an array/string etc
 */

/**
 * Example
 * Wirte a function called maxSubarraySum which accepts an array of integer and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array
 *
 * maxSubarraySum([1,2,5,2,8,1,5], 2) = 10
 * maxSubarraySum([1,2,5,2,8,1,5], 4) = 17
 * maxSubarraySum([4,2,1,6], 1) = 6
 */

// a naive solution

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

function maxSubarraySumRefactor(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySumRefactor([1, 2, 5, 2, 8, 1, 5], 4));
