console.log("*****114 values*****");

console.log("***Solución 1***");

function values<O extends Object>(obj: O) {
  let valuesArray = [];
  for (const values in obj) {
    valuesArray = [...valuesArray, obj[values]];
  }
  return valuesArray;
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
); // [31, 310, "long video", "mp4"]

console.log("***Solución 2***");

const valuesAlternative = <O extends Object>(obj: O) => Object.values(obj);
console.log(
  valuesAlternative({
    id: 31,
    duration: 310,
    name: "long video",
    format: "mp4",
  })
); // [31, 310, "long video", "mp4"]

console.log("***Challenge - con solución 2 obtenemos el resultado deseado***");
// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(valuesAlternative(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
