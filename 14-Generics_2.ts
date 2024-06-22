class Stack<T> {

    private array : T[];
    constructor() {
        this.array = [];
    }
    
    push(x : T) : void {
        this.array.push(x);
    }

    pop() : void {
        this.array.pop();
    }

    top() : void {
        console.log('element at top of stack is :', this.array[this.array.length - 1]);
    }

    display() : void {
        console.log(this.array);
    }
}

const st = new Stack<number>();
st.push(1);
st.push(2);
st.display();           // 1, 2
st.push(3);             // 1, 2, 3
st.display();           // 1, 2, 3
st.pop();               // 1, 2 -> 3 popped
st.top();               // 1, 2 -> will return 2
st.display();           // 1, 2