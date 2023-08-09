console.log("*****101-biggest-word*****");

function biggestWord(phrase: string): string {
  return phrase
    .split(" ")
    .reduce((phrase, word) => (word.length > phrase.length ? word : phrase));
}

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"

console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
