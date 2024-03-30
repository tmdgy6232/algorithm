/**
 * what is factoral ?
 * 4! = 4 * 3 * 2 * 1
 */

// not use recursion version
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(4));

// use Recursion Version

function factoralRecursion(num) {
  if (num === 1) return 1;

  return num * factoralRecursion(num - 1);
}

console.log(factoralRecursion(4));
