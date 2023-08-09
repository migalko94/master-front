console.log("*****115 zip*****");
console.log("***Básico***");
function zipObject(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}
// Ejemplo
console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}

console.log("***Challenge***");
function zipObject2(keys, values) {
  let obj = {};

  for (let i = 0; i < keys.length && i < values.length; i++) {
    obj[keys[i]] = values[i];
  }

  return obj;
}
// Ejemplo:
console.log(zipObject2(["spanish", "english", "french"], ["hola"])); // {spanish: "hola"}
