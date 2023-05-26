const test = {

    //선언적 익명함수
    foo: function () {
        console.log("foo 메소드의 this")
        console.log(this)
        //자신을 메소드로 가진 상위 객체를 가리킴
    },
    //화살표함수
    bar: () => {
        console.log("bar 메소드의 this")
        console.log(this)
        //함수도 객체이다 => JS만의 특징
        //화살표 함수는 자신의 메소드를 가지고 있는 상위 객체를 가리키지 않고
        //자기 자신의 함수 객체를 가리킨다.
    }
}
    //메소드 호출
    test.foo(); //test의 객체 this가 출력됨
    test.bar(); //함수의 this가 출력됨
