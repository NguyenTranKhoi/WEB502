export { }

type Product = {
    id: number,
    name: string,
    price: number
}

type Product2 = {
    id: number,
    name: string,
    status: boolean
}

const a: number = 10;
const b: number = 20;
const myName: string = "Nguyen Tran Khoi";
const myAge: number = 20;
const myStatus: boolean = true;
const myObj: Product = { id: 1, name: "Khoi", price: 20 }
const arrNumber: number[] = [1, 2, 3, 4, 5];
const arrString: string[] = ["a", "b", "c"];
const arrObj: Product[] = [
    { id: 1, name: "San Pham A", price: 20 }
]

function sum(numA: number, numB: number) {
    return numA + numB;
}

sum(a, b);