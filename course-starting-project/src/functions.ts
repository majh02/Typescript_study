function Add(n1: number, n2: number): number {
    return n1 + n2;
}

// void: 명시적으로 함수에 반환값이 없음을 알려주는 타입
// undefined: 반환 구문이 있지만 아무것도 반환하지 않는다고 이해함
function printResult_(num: number): void {
    console.log('Result: ', num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult_(Add(5, 12));
console.log(printResult_(Add(5, 12)));

let combinedValues: (a: number, b: number) => number;
// let combinedValues: Function;

combinedValues = Add;
// combinedValues = printResult_; !! ERROR !!
// combinedValues = 5; !! ERROR !!

console.log(combinedValues(8, 8));

addAndHandle(10, 20, (result) => {
    console.log(result);
});
