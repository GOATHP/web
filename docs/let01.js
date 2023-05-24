// let x = 10;
// let y = 4;
// let result = 0;

// result = x + y--;
// console.log(result)
// console.log(y)
// console.log('----')
// result = x + y-- + 5;
// console.log(result)
// console.log(y)
// console.log('----')
// result = ++x - y;
// console.log(result)
// console.log(y)

// y += x;
// console.log(y);

// y -= x;
// console.log(y);

// y *= x;
// console.log(y);

// y /= x;
// console.log(y);

// y %= x;
// console.log(y);


// function birthCheck() {
//     const currentYear = 2023;
//     let birthYear;
//     let age;

//     birthYear = parseInt(prompt("태어난 연도"));
//     if (isNaN(birthYear)) {
//         alert(`태어난 연도를 입력하세요.`);
//         return;
//     } else {
//         age = currentYear - birthYear + 1;
//         if (age < 20) {
//             alert("성인이 아닙니다.");
//         }
//         alert(`${currentYear}년 현재 당신은 ${age}살입니다.`);
//     }
// }

birthCheck();

function birthCheck() {
    const date = new Date();
    const currentYear = date.getFullYear();
    let birthYear;
    let birthStr;
    let birthNum;

    birthStr = prompt("태어난 년도"); // 문자열
    if (birthStr.length == 4) {
        //연도 4자리이면
            console.log("태어난 해" + birthStr);
            birthYear = parseInt(birthStr);
            console.log(birthYear)

            if (!isNaN(birthYear) || birth != 0) {
            let age = currentYear - birthYear + 1;
            if (age < 20) {
                alert("성인이 아닙니다.");
            }
            alert(`${currentYear}년 현재 당신은 ${age}살입니다.`);
        } else {
            console.log(birthStr)
        }
    }
    else {
        alert('정확한 연도 입력 바람')
    }
} 


// const date = new Date();
// const hour = date.getHours();

// console.log(date.getFullYear);
// console.log(date.getMonth() + 1 );
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// if (hour < 12) {
//     alert('오전입니다.')
// }
// else {
//     alert('오후입니다.')
// }