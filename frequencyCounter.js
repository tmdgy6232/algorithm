/**
 * Frequency counter
 */

/**
 * first example
 *
 * Write a function called same, witch accepts to arrays.
 * The function should return true if every value in the array has it's corresponding valud squared in the second array.
 * (배열이 두번째 배열의 값을 포함하면 참을 반환해야함)
 * The frequency of values must be the same.
 *
 * example
 * same([1, 2, 3], [4, 1, 9]) // true
 * same([1, 2, 3], [1, 9]) // false
 * same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)
 */

// a naive solution (use nested loop)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3], [9, 4, 1]));

// REFACTORED
function frequecyCounterSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequecyCounter1 = {};
  let frequecyCounter2 = {};
  for (let val of arr1) {
    frequecyCounter1[val] = (frequecyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequecyCounter2[val] = (frequecyCounter2[val] || 0) + 1;
  }

  for (let key in frequecyCounter1) {
    if (!(key ** 2 in frequecyCounter2)) {
      return false;
    }
    if (frequecyCounter2[key ** 2] !== frequecyCounter1[key]) {
      return false;
    }
  }
  return true;
}
