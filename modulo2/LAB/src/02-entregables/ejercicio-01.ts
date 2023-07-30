console.log("************** DELIVERABLE 01 *********************");

console.log("***** 1. ARRAY OPERATIONS: *****");

//1.1. Head:
const head = <T>([first]: T[]): T => first;

console.log("*** 1.1. Head: ***");
const test1 = head<string>(["hey", "ho"]);
console.log(test1); //<--hey
const test2 = head<number>([1, 2, 3]);
console.log(test2); //<--1
const test3 = head<boolean>([true]);
console.log(test3); // <--true

//1.2. Tail:
const tail = <T>([, ...rest]: T[]): T[] => rest;

console.log("*** 1. 2. Tail: ***");
const original1: string[] = ["hey", "ho", "hello"];
const copy1 = tail<string>(original1);
console.log(original1, copy1); //<-- ["hey", "ho", "hello"], [ho, hello]

const original2: number[] = [1, 2, 3, 4, 5];
const copy2 = tail<number>(original2);
console.log(original2, copy2); //<--[1, 2, 3, 4, 5],[2, 3, 4, 5]

const original3: boolean[] = [true];
const copy3 = tail<boolean>(original3);
console.log(original3, copy3); //<-- [true], []

//1.3. Init:
const init = <T>(list: T[]): T[] => list.slice(0, list.length - 1);

console.log("*** 1.3. Init: ***");
const original4: string[] = ["hey", "ho", "hello"];
const copy4 = init<string>(original4); //<-- ["hey", "ho", "hello"], ["hey", "ho"]
console.log(original4, copy4);

const original5: number[] = [1, 2, 3, 4, 5];
const copy5 = init<number>(original5);
console.log(original5, copy5); //<--[1, 2, 3, 4, 5],[1, 2, 3, 4]

const original6: boolean[] = [true];
const copy6 = init<boolean>(original6);
console.log(original6, copy6); //<-- [true], []

//1.4. Last
const last = <T>(list: T[]): T => list[list.length - 1];

console.log("*** 1.4. Last: ***");
const original7: string[] = ["hey", "ho", "hello"];
const copy7 = last<string>(original7); //<-- ["hey", "ho", "hello"], "hello"
console.log(original7, copy7);

const original8: number[] = [1, 2, 3, 4, 5];
const copy8 = last<number>(original8);
console.log(original8, copy8); //<--[1, 2, 3, 4, 5], 5

const original9: boolean[] = [true];
const copy9 = last<boolean>(original9);
console.log(original9, copy9); //<-- [true], true
