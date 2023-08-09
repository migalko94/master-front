console.log("************** DELIVERABLE 03 *********************");

console.log("*****CLONE: *****");

interface Person {
  name: string;
  age: number;
}

const mary: Person = {
  name: "María",
  age: 28,
};

function clone(source: Person) {
  return { ...source };
}

const maryClone = clone(mary);
console.log(maryClone);

console.log("*****MERGE:*****");

const _a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const _b = { name: "Luisa", age: 31, married: true };

function merge<A extends object, B extends object>(
  source: A,
  target: B
): A & B {
  return { ...target, ...source };
}

console.log(merge(_a, _b)); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
