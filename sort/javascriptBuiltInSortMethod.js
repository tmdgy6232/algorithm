/**
 * Javascript 내장 sort 함수는 함수를 인자로 주면 리턴값이 트루이면 그대로, 펄스이면 2번째인자와 첫번째 인자가 위치를 바꾼다.
 * 그런식으로 끝까지 순회 후 정렬된다.
 */

function numberCompare(num1, num2) {
  return num1 - num2;
}

[6, 4, 15, 10].sort(numberCompare);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

["ttt", "aaaaaa", "bb", "cccccccc"].sort(compareByLen);
