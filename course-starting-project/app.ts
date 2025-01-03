function add(n1: number, n2: number): number {
    // The key difference is: Javascript uses "dynamic types" (resolved at runtime)
    // TypeScript uses "static types" (set during development)
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    
    return n1 + n2
}

const number1= 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result);
// Typescript's type system only helps you during development.
// ex. before the code get compiled.
