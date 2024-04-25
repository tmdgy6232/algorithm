/**
 *  QuickSort
 *
 *  Like merge sort, exploits the fact that array of 0 or 1 element are always sorted
 * Works by selecting one element(called the "pivot") and finding the index where the pivot sould end up in the sorted array
 * once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot
 *
 *
 * Quicksort Pseudocode
 1.  Call the pivot helper on the array
 2.  When the helper returns to you the updated
    pivot index, recursively call the pivot helper on
    the subarray to the left of that index, and the
    subarray to the right of that index
 3. Your base case occurs when you consider a
    subarray with less than 2 elements
 */

/**
 * Pivot Helper
 *
 * in order to implement quick sort, it's useful to first implement a function responsible arranging elements in an array on either side of a pivot
 * given an array, this helper function should designate an element as the pivot
 * it should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot
 * The order of elements on either side of the pivot doesn't matter!
 * The helper should do this in place, that is, it sould not create a new Array
 * when complete, the helper should return the index of the pivot
 *
 * Picking a pivot
 *
 * the runtime of quick sort depends in part on how one selects the pivot
 * Ideally, the pivot should be chosen so that it's roughly the median value in the dataset you're sorting
 * For simplicity, we'll always choose the pivot to be the first element(we'll thak about consequences of this later)
 *
 *
 * Pivot helper example
 *
 * let arr = [5, 2, 1, 8, 4, 7, 6, 3]
 * pivot(arr) = 4
 * 
 * Pivot Pseudocode

1. It will help to accept three arguments: an array, a start index,
and an end index (these can default to 0 and the array length
minus 1, respectively)
2. Grab the pivot from the start of the array
3. Store the current pivot index in a variable (this will keep track of
where the pivot should end up)
4.Loop through the array from the start until the end
  4-1 If the pivot is greater than the current element, increment the
    pivot index variable and then swap the current element with
    the element at the pivot index
5. Swap the starting element (i.e. the pivot) with the pivot index
6. Return the pivot index

 */

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}

// quickSort

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); // 3
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
