function Add(n1, n2) {
    return n1 + n2;
}
function printResult_(num) {
    console.log('Result: ', num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult_(Add(5, 12));
console.log(printResult_(Add(5, 12)));
let combinedValues;
combinedValues = Add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map