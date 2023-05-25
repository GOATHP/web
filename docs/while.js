let i = 5;
let status = false;

do { //한번은 실행해 주어야 하는 상태가 됨.
    status = true; //무한 루프

    console.log("*");
    i--;
    if (i == 0) status = false;
} while (i>0)

for (let i = 1; i <= 10; i++) {
    if (i % 2) {
        // 1 이상이므로 true가 나오게 된다. 또한 이게 1 이상이라는 것은 홀수라는 것을 의미한다.
        continue; //반복문 코드블럭 처음으로 이동
    } else {
        // 0이므로 나머지 값이 없음
    }
    console.log(i);
}


