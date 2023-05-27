class Book {
    constructor(title, pages, done) {
        this.title = title;
        this.pages = pages;
        this.done = done;
    }
    //동적으로 프로퍼티 만드는 역할

    finish() {
        let str = '';
        this.done === false ? str = '읽는 중' : str = '완독'
        return str;
    }
}

let git = new Book("깃교과서", 500, false);
console.log(git);
console.log(git.finish());