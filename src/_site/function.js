hello();

function hello() {
    console.log("안녕하세요.")
}

let greeting = function () {
    console.log("반갑습니다.")
} //이름이 없는데 어떻게 관리? => 변수에 담아서 관리

greeting();

function myfunc(a, b) {
    return a + b;
}

console.log(myfunc(1, 2));

function sum() {
    let total = arguments[0] + arguments[1] + arguments[2]
    return total
}

console.log(sum(10, 20, 30));


numbers = []
function addNum(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum
}

numbers = []
function addNum(...numbers) {
    let sum = 0;
    for (let num of arguments) {
        sum += num;
    }
    return sum
}

console.log(addNum(10, 20, 30));
callThreeTIXX