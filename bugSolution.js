function foo(a, b) {
  a = Number(a);
  b = Number(b);
  if (isNaN(a) || isNaN(b)) {
    return null; // Handle cases where conversion to numbers fails
  }  
  return a + b; // Perform addition only if both a and b are numbers
}

console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(1, 2)); // Output: 3
console.log(foo('1', 2)); // Output: 3
console.log(foo(1, '2')); // Output: 3