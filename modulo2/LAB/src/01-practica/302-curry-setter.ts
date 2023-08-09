console.log("*****302 curry setter*****");

console.log("***Básico***");

const set = <T extends object>(
  obj: T,
  key: keyof T,
  property: T[keyof T]
): T => {
  const updated = { ...obj };
  updated[key] = property;
  return updated;
};

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = set(julia, "age", 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

console.log("***Opcional***");

interface User {
  name: string;
  surname: string;
  age: number;
}

const setCurry = <T extends object>(key: keyof T) => {
  return function (obj: T, property: T[keyof T]) {
    const updated = { ...obj };
    updated[key] = property;
    return updated;
  };
};

const setName = setCurry<User>("name");
const setSurname = setCurry<User>("surname");
const setAge = setCurry<User>("age");

const juliaCurry = { name: "Julia", surname: "Álvarez", age: 19 };

console.log(setName(juliaCurry, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(juliaCurry, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(juliaCurry, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
