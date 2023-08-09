console.log("************** DELIVERABLE 02 *********************");

const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];

console.log("***** 2. CONCAT: *****");
const originalAString: string[] = ["hey", "ho"];
const originalBString: string[] = ["hello"];
const cString = concat<string>(originalAString, originalBString); //<-- ["hey", "ho", "hello"]
console.log(cString);

const originalANumber: number[] = [1, 2, 3, 4, 5];
const originalBNumber: number[] = [6, 7, 8, 9];
const cNumber = concat<number>(originalANumber, originalBNumber);
console.log(cNumber); //<--[1, 2, 3, 4, 5, 6, 7, 8, 9]

const originalABoolean: boolean[] = [true, false];
const originalBBoolean: boolean[] = [false];
const cBoolean = concat<boolean>(originalABoolean, originalBBoolean);
console.log(cBoolean); //<-- [true, false]

//Opcional:
const optionalConcat = (...arr) =>
  arr.reduce((collection, arr) => {
    for (let element of arr) {
      collection = [...collection, element];
    }

    return collection;
  }, []);

console.log("***** 2. OPTIONAL CONCAT modificado: *****");
const AString: string[] = ["hey", "ho"];
const BNumber: number[] = [1, 2];
const CBoolean: boolean[] = [true];
const result = optionalConcat(AString, BNumber, CBoolean);
console.log(result); //<--- ["hey", "ho", 1, 2, true]
