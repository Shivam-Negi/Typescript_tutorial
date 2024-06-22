class Product {
    name: string;
    price: number | undefined;

    constructor(name : string, price ?: number) {
        this.name = name;
        this.price = price;
    }

    display() : void {
        console.log("Product name is", this.name, " and price is ", this.price);
    }

}

const p1 = new Product("Iphone", 1000000);
console.log(p1);

const p2 = new Product("Galaxy");
console.log(p2);
