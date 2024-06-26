/**
 * Merge Sort (합병 정렬)
 *
 * It's combination of two things - merging and sorting!
 * Exploits the fact that arrays of 0 or 1 element are always sorted
 * Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
 *
 * How does it work?
 *
 * step1 [8, 3, 5, 4, 7, 6, 1, 2]
 * step2 요소가 1개 또는 0개일 때까지 분할한다
 * [8, 3, 5, 4], [7, 6, 1, 2]
 * [8,3], [5,4], [7,6], [1,2]
 * [8], [3], [5], [4], [7], [6]. [1], [2]
 *
 * step3 작은게 왼쪽으로 오게 하며 병합한다.
 * [3, 8], [4, 5], [6, 7], [1, 2]
 * [3,4,5,8], [1,2,6,7]
 * [1,2,3,4,5,6,7,8]
 *
 */

/**
 * Merging Array Function (배열 병합 함수)
 *
 *  In order to implement merge sort, it's useful to first implement a function responseible for merging two sorted arrays
 *  Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
 *  This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it
 *
 * Pseudo code
 * 1. Create an empty array, take a look at the smallest values in each input array
 * 2. while there are still values we haven't looked at...
 *    - if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
 *    - if the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next valud in the second array
 *    - Once we exhaust one array, push in all remaining values from the other array
 */

function merge(arr1, arr2) {
  let results = [];
  let i = 0; // arr1 index
  let j = 0; // arr2 index
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // 남은 배열의 데이터 results로 push해주기
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// console.log(mersge([1, 10, 50], [1, 2, 14, 99]));

/**
 * MergeSort PseudoCode
 *
 * Break up the array into halves until you have arrays that are empty or have one element
 * Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 * once the array has been merged back together, return the merged(and osrted) array
 *
 * Big O = O(n log n)
 */

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
