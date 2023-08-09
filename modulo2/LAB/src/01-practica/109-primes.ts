console.log(`109. showPrimes
reducimos del 1 al 10 para que no ocupe tanto espacio`);
console.log("***Básico***");

const isPrime = (sample: number): boolean => {
  if (sample <= 1) {
    return false;
  }
  for (let i = 2; i < sample; i++) {
    if (sample % i === 0) {
      return false;
    }
  }
  return true;
};

function showPrimes(from: number, to: number) {
  let sample: number;
  for (let i = from; i <= to; i++) {
    sample = i;

    isPrime(sample)
      ? console.log(`${sample} is PRIME!`)
      : console.log(`${sample} is not a prime!`);
  }
}

console.log(isPrime(7));
console.log(isPrime(3));
console.log(isPrime(8));
showPrimes(1, 10);

console.log("***Challenge***");
const isPrimeImproved = (sample: number): boolean => {
  if (sample <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(sample); i++) {
    if (sample % i === 0) {
      return false;
    }
  }
  return true;
};

function showPrimesImproved(from: number, to: number) {
  let sample: number;
  for (let i = from; i <= to; i++) {
    sample = i;

    isPrimeImproved(sample)
      ? console.log(`${sample} is PRIME!`)
      : console.log(`${sample} is not a prime!`);
  }
}
console.log(isPrime(7));
console.log(isPrime(3));
console.log(isPrime(8));
showPrimes(1, 10);
