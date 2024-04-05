/**
 * 선형검색
 * 첫 부분에서 시작해서 끝 부분으로 이동하면서 한 번에 하나의 항목을 확인할 수 있고
 * 반대의 경우로 이동할 수 있음. 전체적으로 순회하며 검색하는 기법
 * 중요한건 세트 간격으로 이동하면서 한 번에 하나의 항목을 확인하는 식으로 모든 항목을 확인함
 * Javascript linearsearch built in function
 *
 * indexOf, includes, infd, findIndex
 *
 * Big O : O(n)
 */

//my solution
function linearSearch(arr, findValue) {
  if (arr.length === 0) return -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === findValue) return i;
  }
  return -1;
}
