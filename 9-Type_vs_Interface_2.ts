// Define a function type using `type`
type logger = (msg: string, errorCode: number) => void;

// Create an instance of the `logger` function type
const log: logger = (msg, errorCode) => {
    console.log(`Message: ${msg}, Error Code: ${errorCode}`);
};

// Call the function
log("An error occurred", 404);  // Output: Message: An error occurred, Error Code: 404


// Define a function type using `interface`
interface loggerInterface {
    (msg: string, errorCode: number): void;
}

// Create an instance of the `loggerInterface` function type
const logWithInterface: loggerInterface = (msg, errorCode) => {
    console.log(`Message: ${msg}, Error Code: ${errorCode}`);
};

// Call the function
logWithInterface("Another error occurred", 500);  // Output: Message: Another error occurred, Error Code: 500


// Define a union type using `type`
type unionOfStrAndNum = number | string;

// Create instances of the `unionOfStrAndNum` type
const example1: unionOfStrAndNum = 42;  // Valid
const example2: unionOfStrAndNum = "Hello";  // Valid

// Print the instances
console.log(example1);  // Output: 42
console.log(example2);  // Output: Hello


// Define the first part of the `ComplexNumber` interface
interface ComplexNumber {
    real: number;
    imaginary: number;
}

// Extend the `ComplexNumber` interface to include a method
interface ComplexNumber {
    add: (num: ComplexNumber) => ComplexNumber;
}

// Create an instance of the `ComplexNumber` interface
const complex1: ComplexNumber = {
    real: 1,
    imaginary: 2,
    add(num: ComplexNumber): ComplexNumber {
        // Define the `add` method to add two complex numbers
        return {
            real: this.real + num.real,
            imaginary: this.imaginary + num.imaginary,
            add: this.add  // Carry over the add method for the result
        };
    }
};

// Create another instance of the `ComplexNumber` interface
const complex2: ComplexNumber = {
    real: 3,
    imaginary: 4,
    add(num: ComplexNumber): ComplexNumber {
        // Define the `add` method to add two complex numbers
        return {
            real: this.real + num.real,
            imaginary: this.imaginary + num.imaginary,
            add: this.add  // Carry over the add method for the result
        };
    }
};

// Add two complex numbers and print the result
const result = complex1.add(complex2);
console.log(result);  // Output: { real: 4, imaginary: 6, add: [Function: add] }
