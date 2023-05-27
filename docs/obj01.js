const park = {
    firstname: "tarry",
    lastname: "park",
    age: 28,
    address: "ansan"
    };
console.log(park)

console.log('---')

//프로퍼티 접근1
console.log(park.age)
console.log(park.firstname)
console.log(park.lastname)
console.log(park.address)

console.log('---')


//프로퍼티 접근2
console.log(park['age'])
console.log(park['firstname'])
console.log(park['lastname'])
console.log(park['address'])

console.log('---')

//뭐가 유리하다는 것인가?
let name = 'age';
console.log(park[name]); // 키 접근을 해야되는데, 간접적으로 쿠션을 통하여 프로퍼티에 접근할 수 있음

name = 'lastname';
console.log(park[name]);
    