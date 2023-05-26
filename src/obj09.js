const product = ['우유', '식빵'];
console.log(product);

const goods = product;
console.log(product);

goods.push('고구마');
console.log(goods)
console.log(product);
//goods에 고구마를 넣었는데도 product에 고구마가 출력됨 => 얕은 복사

const food = [...product];
console.log(food);
food.push('토마토');
console.log(food);
console.log(product);
//깊은 복사로 토마토를 넣었어도 product에는 추가되지 않음