console.log("*****111. Subsets*****");

function subsets(word: string): string[] {
  let arraySubset = [];
  for (let i = 1; i < word.length; i++) {
    arraySubset = [...arraySubset, word.slice(i, word.length)];
  }
  return arraySubset;
}

// Ejemplo
console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
