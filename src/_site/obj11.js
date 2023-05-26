// 클래스 선언
class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    buy() {
        console.log(`${this.title}를 ${this.price}원에 구매`)
    }
}

// let boo = new Book("자료구조", 15000);
// console.log(boo);
// boo.buy();

class Textbook extends Book {
    constructor(this, price, major) {
        super(title, price);
        this.major = major;
    
    }
    butTextBook() {
        console.log(`${this.major} 전공서적, ${this.title}을 구매`);
    }
}
    let bar = new Textbook('알고리즘', 2000, '전공필수');
    console.log(bar);