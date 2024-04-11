/**
 * BubbleSort
 *
 * 동작방식 : https://visualgo.net/en/sorting
 * [5, 4, 2 , 1 ]
 *  step1 [5, 4, 2, 1] 최초 5와 4를 비교 왼쪽의 값이 크면 swap!
 *  step2 [4, 5, 2, 1] step1의 것을 한칸 이동해서 계속 실행
 *  step3 [4, 2, 5, 1]
 *  step4 [4, 2, 1, 5] 이런식으로 가장 큰 숫자를 오른쪽에 배치하고, 그 다음은 가장 큰 숫자 인덱스 -1 까지 또 반복하며
 *  그 다음 큰 숫자를 오른쪽에서 두번째에 배치하는 식으로 2중 포문을 돌면서 정렬.
 *
 *  Bubble Sort Pseudocode
 * 1. start lopping from with a variable called i the end of the array towards the beginning
 * 2. Start an inner loop with a variable called j from the beginning until i-1
 * 3. if arr[j] is greater than arr[j+1], swap those two values!
 * 4. return the sorted array
 *
 * Optimization
 * 버블정렬은 거의 정렬이 되어있는 데이터 예를들면 [2, 1, 3, 4, 5] 같은 데이터도 끝까지 순회를 하며 쓸데없는 반복을 돈다.
 * 이런 불필요한 loop를 방지하기 위해 중간에 swap이 되었는지 확인하는 코드를 넣어주면 최적화를 시킬 수 있다 !
 *
 * BigO = O(n2)
 */

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSort2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort2([37, 45, 29, 8]));

arr = [1, 2, 3, 4, 5];

// 알아두면 좋을 문법
[arr[2], arr[4]] = [30, 50];

console.log(arr);

function bubbleSortOptimization(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //Swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
