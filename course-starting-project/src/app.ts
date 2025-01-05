let appId = 'abc';
const button = document.querySelector('button')!;

function add_(n1: number, n2:number) {
    if(n1 + n2 > 0) {
        return n1 + n2;
    }
    return 0;
}

function clickHandler(messgage: string) {
    console.log("Clicked! ", messgage);
    
}

if(button) {
    button.addEventListener('click', () => {
        clickHandler('button!!');
    })
}