console.log("*****106 dices*****");

const throwDices = () => {
  let first = Math.ceil(Math.random() * 6);
  let second = Math.ceil(Math.random() * 6);
  const resetDices = () => {
    first = undefined;
    second = undefined;
  };

  const printResults = () => {
    console.log(`El primer dado devuelve un ${first}`);
    console.log(`El segundo dado devuelve un ${second}`);
  };

  const doubleSix = () => {
    first === 6 && second === 6
      ? console.log("Enhorabuena, has obtenido un premio!!")
      : console.log("Prueba de nuevo!!");
  };

  printResults();
  doubleSix();
  resetDices();
};

throwDices();
throwDices();
