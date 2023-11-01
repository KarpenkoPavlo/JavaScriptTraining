//task 1
let i1 = document.querySelector(".i-1");
let b1 = document.querySelector(".b-1");
let out1 = document.querySelector(".out1");

b1.onclick = function f1() {
    if(i1.value == 4) {
        out1.innerHTML = "true";
    } else {
        out1.innerHTML = "false";
    }
}

//task 2
let a21 = 5;
let a22 = 10;
let b2 = document.querySelector(".b-2");
let out2 = document.querySelector(".out2");

b2.onclick = function f2() {
    if(a21 > a22) {
        out2.innerHTML = a21;
    } else {
        out2.innerHTML = a22;
    }
}

//task 3
let i31 = document.querySelector(".i-31");
let i32 = document.querySelector(".i-32");
let bt3 = document.querySelector(".b-3");
let out3 = document.querySelector(".out3");
let a3_1;
let a3_2;

bt3.onclick = function f3() {
    a3_1 = i31.value;
    a3_2 = i32.value;

    if(i31 > i32) {
        out3.innerHTML = i31.value;
    } else {
        out3.innerHTML = i32.value;
    }
}

//task 4
let i4 = document.querySelector(".i-4");
let bt4 = document.querySelector(".b-4");
let out4 = document.querySelector(".out4");

bt4.onclick = function f4() {
    if(2023 - i4.value >= 18) {
        out4.innerHTML = 1;
    } else {
        out4.innerHTML = 0;
    }
}

//task 5
let i5 = document.querySelector(".i-5");
let bt5 = document.querySelector(".b-5");
let out5 = document.querySelector(".out5");

bt5.onclick = function f5() {
    if(i5.value < 0) {
        out5.innerHTML = "m";
    } else if (i5.value == 0) {
        out5.innerHTML = 0;
    } else {
        out5.innerHTML = 1;
    }
}