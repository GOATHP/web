let space = '';
let star = '*';
const size = 10;
let stars=[];


for (let i = 0; i <= 5 ; i++) {
    for(let j=0; j<i; j++){
        stars[i] += "*";
    }
}


for (line of stars) {
    console.log(line);
}
