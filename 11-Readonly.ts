class Prod {
    public name: string;
    private price: number | undefined;
    readonly category: string;
    readonly tags: string[];

    constructor(name : string, category : string, price ?: number) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.tags = ["electronics", "mobile"];
    }

    display() : void {
        console.log("Product name is", this.name, " and price is ", this.price);
    }

    setPrice(p : number) : void {
        if(p <= 0) return;
        this.price = p;
    }

    updateTags(t : string, idx : number) : void {
        if(t.length)
            this.tags[idx] = t;
    }

}

const p = new Prod("Iphone", "electronics", 1000000);
p.setPrice(-20);

// just like readonly, we can update array object / objects in const but not reassign
const arr = [10, 20];   
arr[0] = 0;
console.log(arr);

console.log(p);

p.updateTags("apple", 1);
console.log(p);
