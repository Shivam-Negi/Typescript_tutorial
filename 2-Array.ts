/**
 * arrays
 * 
 * let <variable_name> : type[] = [val1, val2, ...];
 * 
 * 
 */

let ids : number[] = [1, 2, 3, 3];
let hetero : any[] = [1, 2, false, "sadjf", null];

let data : (number | string | boolean)[] = [1, "sajfk", true];

console.log(ids, hetero, data);

let arr = ["hi", false];    // can avoid types
console.log(arr);
// arr.push(1);    // tsc throws error

// arrays in form of typed tuple
let data1 : [number , string , boolean] = [1, "tuple", true];
console.log(data1);





