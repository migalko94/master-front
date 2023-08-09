console.log("************** CHALLENGES *********************");
console.log(
  "Use this folder 02 challenges to practice with challenge exercises"
);
console.log("You can add new files as long as they are imported from index.ts");
console.log("***** console traces *****");
console.log("***** deep access *****");

console.log("***** flatten array *****");
//cambio de nombre para evitar incompatibilidades
const sample_ = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];
const flatten = <T>(arrayToFlatten: T[]): T[] => {
  return arrayToFlatten.reduce((collection, element) => {
    Array.isArray(element)
      ? (collection = [...collection, ...flatten(element)])
      : (collection = [...collection, element]);

    return collection;
  }, []);
};
console.log(sample_);
console.log(flatten(sample_));

console.log("***** árbol *****");

interface Node {}
type node = Partial<Node>;
type childNode = Partial<Partial<Node>>;
type grandChildNode = Partial<Partial<Partial<Node>>>;

console.log("***** understanding *****");
