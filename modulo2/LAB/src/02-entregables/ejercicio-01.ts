console.log("************** DELIVERABLE 01 *********************");

//Head
const head = <T>([first]: T[]): T => first;

//Head test
const test1 = head<string>(["hey", "ho"]);
console.log(test1); //<--hey
const test2 = head<number>([1, 2, 3]);
console.log(test2); //<--1
const test3 = head<boolean>([true]);
console.log(test3); // <--true

//Tail
const tail = <T>([, ...rest]: T[]): T[] => rest;

//Tail test
const original1: string[] = ["hey", "ho", "hello"];
const copy1 = tail<string>(original1);
console.log(original1, copy1); //<-- ["hey", "ho", "hello"], [ho, hello]

const original2: number[] = [1, 2, 3, 4, 5];
const copy2 = tail<number>(original2);
console.log(original2, copy2); //<--[1, 2, 3, 4, 5],[2, 3, 4, 5]

const original3: boolean[] = [true];
const copy3 = tail<boolean>(original3);
console.log(original3, copy3); //<-- [true], []

//Init

//Init test

//Last

//Last test
