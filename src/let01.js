let x = 10;
let y = 4;
let result = 0;

result = x + y--;
console.log(result)
console.log(y)
console.log('----')
result = x + y-- + 5;
console.log(result)
console.log(y)
console.log('----')
result = ++x - y;
console.log(result)
console.log(y)

y += x;
console.log(y);

y -= x;
console.log(y);

y *= x;
console.log(y);

y /= x;
console.log(y);

y %= x;
console.log(y);


function birthCheck() {
    const currentYear = 2023;
    let birthYear;
    let age;

    birthYear = parseInt(prompt("태어난 연도"));
    if (isNaN(birthYear)) {
        alert(`태어난 연도를 입력하세요.`);
        return;
    } else {
        age = currentYear - birthYear + 1;
        if (age < 20) {
            alert("성인이 아닙니다.");
        }
        alert(`${currentYear}년 현재 당신은 ${age}살입니다.`);
    }
}


birthCheck();