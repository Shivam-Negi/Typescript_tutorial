/**

    primitive types in TS

    string, number, boolean, undefined, null, bigint, symbol

    var <variable_name> : number = <value>;     // type annotation or type signature

 * */

let id : number = 5;
let fname : string = "john";
// fname = 12;  // tsc throws error

var lname : string = "wu";
// lname = 5;   // tsc throws error

console.log(id, fname, lname);

// Union of types
let userid : number | string = "26";
userid = 4;

console.log(userid);

let x : any = "wow";
x = 5;
console.log('x :', x);

let a;      // this variable 'a' is of type any
a = '10';
a = 5;
console.log(a);



