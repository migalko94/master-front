console.log("*****103 check arguments*****");

function f(input) {
  var result;
  if (input === undefined) {
    result = "Unknown";
  } else if (input === null) {
    result = "";
  } else {
    result = input;
  }
  return result;
}

const fRefactor = (input: string): string =>
  input ?? (input === null ? "" : "unknown");

console.log(fRefactor(undefined)); //unknown

console.log(fRefactor(null)); //""

console.log(fRefactor("hello, world")); //"hello, world"
