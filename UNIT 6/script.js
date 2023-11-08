//task 1
let o1 = document.querySelector(".o1");

for(i=0; i<3; i++) {
    for(k=0; k<3; k++) {
        o1.innerHTML += "*";
    }
    o1.innerHTML += "_";
}

//task 2
let o2 = document.querySelector(".o2");

for(i=1; i<=3; i++) {
    o2.innerHTML += i + `<br>`;
    for(k=0; k<3; k++) {
        o2.innerHTML += `*_`;
    }
    o2.innerHTML += `<br>`;
}

//task 3
let o3 = document.querySelector(".o3");

for(i=0; i<4; i++) {
    for(k=0; k<3; k++) {
        o3.innerHTML += "*" + "_";
    }
    o3.innerHTML += `<br>`;
}

//task 4
let o4 = document.querySelector(".o4");

for(i=1; i<=3; i++) {
    o4.innerHTML += i + "_1 ";
    for(k=2; k<=5; k++) {
        o4.innerHTML += k + " ";
    }
}

//task 5
let o5 = document.querySelector(".o5");

for(i=0; i<3; i++) {
    for(k=0; k<6; k++) {
        if(k%2) {
            o5.innerHTML += 0;
        } else {
            o5.innerHTML += 1;
        }
    }
    o5.innerHTML += `<br>`;
}

//task 6 Помилка в коді
// let o6 = document.querySelector(".o6");

// for(i=0; i<3; i=0) {
//     for(k=0; k<6; k++) {
//         if(k%2) {
//             o6.innerHTML += "0";
//         } else if(k/3) {
//             o6.innerHTML += "x";
//         } else {
//             o6.innerHTML += "1";
//         }
//     }
// }