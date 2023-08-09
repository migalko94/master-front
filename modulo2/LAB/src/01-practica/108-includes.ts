console.log("*****108 Includes*****");

console.log("***Básico***");

function includes<T>(array: T[], value: T): boolean {
  return array.some((item) => item === value);
}
console.log(includes([1, 2, 3], 3)); // true
console.log(includes([1, 2, 3], 0)); // false

console.log("***Challenge***");
function includesIndex<T>(array: T[], value: T): boolean {
  return array.findIndex((item) => item === value) !== -1;
}
console.log(includesIndex([1, 2, 3], 3)); // true
console.log(includesIndex([1, 2, 3], 0)); // false
