/**
 * 삽입정렬 (Insertion Sort)
 *
 * Builds up the sort by gradually creating a larger left half witch is always sorted
 *
 * Pseudocode
 * - Start by picking the second element in the array
 * - Now compare the second element with the one before it and swap if necessary
 * - Continue to the next element and if it is in the incorrect order, iterate throught the sorted portion( i.e the left side) to place the element in the correct place
 * - Repeat until the array is sorted
 *
 */

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; i >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

console.log(insertionSort([3, 2, 1, 5, 6, 8, 4, 10, 20, 15]));
