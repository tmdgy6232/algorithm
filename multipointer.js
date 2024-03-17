/**
 * multipointer
 * 두 개의 포인터를 이용해 해결책을 도출하는 알고리즘
 *
 * 예제 :
 * 합이 0이 되는 배열을 리턴하라
 * ex) [-3, 0, 3] = [-3, 3]
 * [1, 2, 3] = undefined
 */

//naive solution

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//refactor
function sumZeroRefactor(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZeroRefactor([-4, -3, -2, -1, 0, 10]));
