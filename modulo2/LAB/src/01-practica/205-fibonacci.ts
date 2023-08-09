console.log("*****205 fibonacci*****");
const fib = (n: number): number => {
  if (n === 1 || n <= 0) {
    return 1;
  }

  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[fib.length - 1];
};

console.log(fib(1)); //1
console.log(fib(2)); //1
console.log(fib(3)); //2
console.log(fib(4)); //3
console.log(fib(5)); //5
console.log(fib(10)); // 55
