function add(n1, n2, showResult, resultPhrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(resultPhrase + result);
        return 0;
    }
    else {
        return result;
    }
}
const number1 = 5;
let number2;
number2 = 5;
const printResult = true;
let resultPhrase = "Result is: ";
resultPhrase = "결과는: ";
add(number1, number2, printResult, resultPhrase);
//# sourceMappingURL=basic.js.map