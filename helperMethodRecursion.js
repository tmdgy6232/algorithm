function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    outerScopedVariable.push(helperInput);
    if (helperInput === 0) return;
    helper(helperInput - 1);
  }

  helper(input);

  return outerScopedVariable;
}

var test1 = outer(1);
var test2 = outer(2);
var test3 = outer(12);

function collectoddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

var odd = collectoddValues([1, 2, 3, 4, 5, 6, 7]);

console.log(odd);

function test() {
  let localValue = 0;

  function add(num) {
    localValue += num;
  }
}

const data = test();
const data2 = test();

data.add();
data.add();
console.log(`data : ${data.localValue}`);
