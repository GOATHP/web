const park = {
    firstname: "tarry",
    lastname: "park",
    age: 28,
    address: "ansan"
    };

for (let key in park) {
    console.log(key);
    park[key] += "===";
}
//배열인 경우 인덱스 숫자로 요소에 대한 접근이 가능함
//프로퍼티에 접근하기 위해서는 그게 불가능함
//따라서 for문을 통해 변경하기 위해서는 프로퍼티에 대해 모두 알아야하는 문제가 발생
//하지만 part[key]와 같이 접근한다면 그럴 필요가 사라짐
console.log(park);