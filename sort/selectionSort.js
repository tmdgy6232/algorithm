/**
 * Selection Sort (삽입정렬)
 *
 * 동작방식 :
 * 배열 중 가장 작은 요소를 앞에 맨 왼쪽에 정렬하는 형식으로 구현
 *
 * Similar to bubble sort, but instead of first lacing large values into sorted position, it places small values into sorted positon
 *
 * Selection sort pseudocode
 *
 * 1. Store the first element as the smallest value you've seen so far.
 * 2. Compare this item to the next item in the array untill you find a smaller number.
 * 3. if a smaller number is found, designate that smaller number to be the new "munimum" and continue umtill the end of the array.
 * 4. if the "minimum" is not the value (index) you initally began with, swap the two values.
 * 5. Repeat this with the next element untill the array is sorted.
 *
 * big O 복잡도 O(n2)
 */

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17, 2, 9, 0]));
