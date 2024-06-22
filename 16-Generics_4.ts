interface customInterface<T1, T2> {
    property: T1;
    moreProperty: T2;
}

const obj : customInterface<string, number> = {
    property: "hi",
    moreProperty: 20
}

console.log(obj);