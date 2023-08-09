console.log("*****102. Califications*****");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const getAverage = (grades) =>
  grades.reduce((acc, grade) => acc + grade, 0) / grades.length;

const roundAverage = (average) => Number(average.toFixed(2));

const getValues = (results) => Object.values(results);

const textGrades = [
  {
    name: "Matrícula de Honor",
    top,
    bottom: 10,
  },
  {
    name: "Sobresaliente",
    top: 10,
    bottom: 9,
  },
  {
    name: "Notable",
    top: 9,
    bottom: 7,
  },
  {
    name: "Bien",
    top: 7,
    bottom: 6,
  },
  {
    name: "Suficiente",
    top: 6,
    bottom: 5,
  },
  {
    name: "Insuficiente",
    top: 5,
    bottom: 4,
  },
  {
    name: "Muy deficiente",
    top: 4,
    bottom: 0,
  },
];

const convertGrade = (grade) =>
  textGrades.find(
    (textGrade) => grade >= textGrade.bottom && grade <= textGrade.top
  ).name;

function printAverage(classResults) {
  const califications = getValues(classResults);
  const average = getAverage(califications);
  const rounded = roundAverage(average);
  return convertGrade(rounded);
}

console.log(printAverage(eso2o));
