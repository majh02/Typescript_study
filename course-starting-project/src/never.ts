let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// unknown: 문자열을 받으려 하는 변수에 할당하기 전에 
// 먼저 userInput에 담긴 값의 타입을 확인함
// userName = userInput; // ERROR
if(typeof userInput === 'string') {
    userName = userInput;
}

// never: 절대 반환값을 생성하지 않음
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
}

generateError('An error occured!', 500);