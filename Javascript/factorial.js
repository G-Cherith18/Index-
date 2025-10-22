function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));