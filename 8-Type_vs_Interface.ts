type text = string;

let myName : text = "shivam";
console.log(myName);


// for defining custom types for arrays, type keyword is more easy
type stringArray = string[];

let myArr : stringArray = ["yo", "hi", "bye"];
console.log(myArr);

/* using an interface we will define an object which will be always having keys 
 of type number and value to be of the type of the array    */
interface numberArray {
    [index: number]: number
}

const numbers: numberArray = [1, 2, 3, 4, 5];
console.log(numbers[0]);  



// Let's say we want to define a pair or a triplet or a custom tuple (set of x values)
type pair = [number, number];
type triplet = [number, number, number];

const myPair: pair = [10, 20];
console.log(myPair);  // Output: [10, 20]

const myTriplet: triplet = [10, 20, 30];
console.log(myTriplet);  // Output: [10, 20, 30]


interface pairInterface {
    first: number,
    second: number
}

const myPairObject: pairInterface = {
    first: 10,
    second: 20
};
console.log(myPairObject);  // Output: { first: 10, second: 20 }




