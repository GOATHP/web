// for (let i = 0, j = 1; i < 5; i++) { 
//     console.log("loop " + i);
//     console.log("loop " + j);

// }


// for (let i = 0, j = 1; i < 5;) { 
//     console.log("loop " + i + "loop " + j);
//     i++;
// }

// for (let i = 0, j = 1; i < 5;) { 
//     console.log("loop " + i + "loop " + j);
//     i++;
// }

for (let i = 0, j = 1; i < 5; i++, j+=5) { 
    console.log("loop " + i + " loop " + j);

}


let students = ["강태환 빨리와" , "임서영 어디있니", "김관중 왔다"];

for ( item of students ) {
    console.log(item);
}

const students2 = ["강태환 빨리와" , "임서영 어디있니", "김관중 왔다"];

for ( index in students2 ) {
    console.log(`$(index) 번째 학생은 $(student[index])입니다.`);
}

for ( index in students2 ) {
    item = "화이팅";
    console.log(item);
}

for ( index in students2 ) {
    item = "화이팅";
    console.log(item);
}

for (let index in students2) {
    
} 