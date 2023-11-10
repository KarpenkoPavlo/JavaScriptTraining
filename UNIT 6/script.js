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

//task 6
let o6 = document.querySelector(".o6");

for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k % 3 === 0) {
            o6.innerHTML += "1";
        } else if (k % 3 === 1) {
            o6.innerHTML += "0";
        } else {
            o6.innerHTML += "x";
        }
    }
    o6.innerHTML += "<br>";
}

//task 7
let o7 = document.querySelector(".o7");

for(i=0; i<5; i++) {
    for(k=0; k<i; k++) {
        o7.innerHTML += "*";
    }
    o7.innerHTML += `<br>`;
}

//task 8
let o8 = document.querySelector(".o8");
 for(i=0; i<5; i++) {
    for(k=4; k>=i; k--) {
        o8.innerHTML += "*";
    }
    o8.innerHTML += `<br>`;
 }

 //task 9
 let o9 = document.querySelector(".o9");

 for(i=1; i<7; i++) {
    for(k=1; k<i; k++) {
        o9.innerHTML += k + " ";
    }
    o9.innerHTML += `<br>`;
 }

 //task 10
 let o10 = document.querySelector(".o10");

 for(i=0; i<5; i++) {
    for(k=1; k<=10; k++) {
        let num = i * 10 + k;
        if(num<10) {
            o10.innerHTML += "0" + num + " ";
        } else {
            o10.innerHTML += num + " ";
        }
    }
    o10.innerHTML += `<br>`;
 }

//+Tasks

 //task 11
let o11 = document.querySelector(".o11");

for(k=0; k<=10; k++) {
    for(i=0; i<=10; i++) {
        o11.innerHTML += `${k}*${i}=${i * k}<br>`;
    }
    o11.innerHTML += `<hr>`
}

//task 12
let o12 = document.querySelector(".o12");
for(i=0; i<3; i++) {
    for(k=0; k<5; k++) {
        o12.innerHTML += "*";
    }
    o12.innerHTML += `<br>`;
}

//task 13
let o13 = document.querySelector(".o13");

for(i=0; i<5; i++) {
    for(k=i; k<5; k++) {
        o13.innerHTML += "*";
    }
    o13.innerHTML += `<br>`;
}

//task 14
let o14 = document.querySelector(".o14");