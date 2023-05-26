const student = {

}; //빈 객체

//동적으로 프로퍼티 추가 가능
student.name = '정수영'
student.hobby = '인종차별'
student.dream = '설아남친'

console.log(student);

delete student.hobby;
console.log(student);
