function sum(a : number, b : number) : number {
    return a + b;
}

console.log(sum(10, 20));

// optional parameter

function diff(a : number, b? : number) : number {
    return a - (b || 0);
}

console.log(diff(10, 5));
console.log(diff(10));

// void return type 
function f() : void {

}

// union return type
function u() : number | string {
    return '99';
}