/**
 * countUniuqueValues
 *
 * 배열 안에 고유한 값이 몇개 있는지 뽑아내는 알고리즘
 * ex [1, 2, 3, 4] = 4 [1, 1, 1, 2] = 2
 *
 */

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));
