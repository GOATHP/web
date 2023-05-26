const student = {};

const poly = [
    ['박태현', "풋살왕", "풋살"],
    ['박준하', "인종차별주의자", "흑인"],
    ['정수영', '노벨 개발자','포켓몬스티커모으기']
];

// poly에 있는 2차원 배열을 객체로 변환하는 코드를 작성

let columns = ['name', 'dream','hobby', 'score'];
let empty = true;

for (let item of poly) {

    let col = {}
    for(let i=0; i<columns.length;i++) {
        if (isNaN(item[i]) == undefined){
            if(empty){
                continue;
            } else {
                col[columns[i]] = '';
            }
        }
        else {
            col[columns[i]] = item[i];
        }
    }

    let key = item[0];
    student[key] = col;
}

console.log(student);
