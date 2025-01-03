function add(n1: number, n2: number, showResult: boolean, resultPhrase: string): number {
    // The key difference is: Javascript uses "dynamic types" (resolved at runtime)
    // TypeScript uses "static types" (set during development)
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input!');
    // }
    
    const result = n1 + n2;
    if(showResult) {
        console.log(resultPhrase + result); 
    } else {
        return result;
    }
}

const number1: number = 5; // 중복되는 작업이므로 지양 -> TS는 타입 추론기능이 있음
let number2: number; // 지향 방식
number2 = 5;
const printResult = true;
let resultPhrase = "Result is: "
resultPhrase = "결과는: "; // 오류: 타입 스크립트의 핵심 기능

add(number1, number2, printResult, resultPhrase);
// Typescript's type system only helps you during development.
// ex. before the code get compiled.
