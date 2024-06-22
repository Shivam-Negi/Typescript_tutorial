type Details = {name: string, marks: number, address? : string};
// Details is kind of like an alias or a nickname to {name: string, marks: number, address? : string}

const result1 : Details = {
    name: "Sanket",
    marks: 98
}

console.log('res 1 :', result1);

const result2 : Details = {
    name: "Sarthak",
    marks: 95
}

result2.address = "Delhi";
console.log('res 2 :', result2);

const result3 = {...result1};
console.log('res 3 :', result3);

result1.marks = 90;
console.log('res 1 :', result1);
console.log('res 3 :', result3);



