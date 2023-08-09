console.log("*****209 swap*****");

let aSwap = "A";
let bSwap = "B"; //--> cambio el nombre de las variables para evitar incompatibilidad de nombres

[aSwap, bSwap] = [bSwap, aSwap]; // -->Implementation here, one line, one shot!

console.log(aSwap === "B" && bSwap === "A" ? "You did it!" : "Keep trying!");
