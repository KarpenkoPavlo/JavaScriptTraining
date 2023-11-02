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

//task 6
let i6 = document.querySelector(".i6");
let b6 = document.querySelector(".b6");
let out6 = document.querySelector(".out6");

b6.onclick = function f6() {
    if(i6.value % 2 ==0) {
        out6.innerHTML = "even";
    } else {
        out6.innerHTML = "odd";
    }
}

//task 7
let i7_1 = document.querySelector(".i7_1");
let i7_2 = document.querySelector(".i7_2");
let b7 = document.querySelector(".b7");
let out7 = document.querySelector(".out7");

b7.onclick = function f7() {
    if(true) {
        out7.innerHTML = i7_1.value**i7_2.value;
    }
}

//task 8
let s8 = document.querySelector(".s8");
let b8 = document.querySelector(".b8");
let out8 = document.querySelector(".out8");

b8.onclick = function f8() {
    switch(+s8.value) {
        case 1:
            out8.innerHTML = "one";
            break;

        case 2:
            out8.innerHTML = "two";
            break;
        
        case 3:
            out8.innerHTML = "three"
            break;
    }
}

//task 9
let i9 = document.querySelector(".i9");
let b9 = document.querySelector(".b9");
let out9 = document.querySelector(".out9");

b9.onclick = function () {
    if (i9.value >=1 && i9.value <= 32) {
        out9.innerHTML = 1;
    } else if (i9.value >=33 && i9.value <= 43) {
        out9.innerHTML = 2;
    } else if (i9.value >=44 && i9.value <= 64) {
        out9.innerHTML = 3;
    } else {
        out9.innerHTML = 0;
    }
}

//task 10
let s100 = document.querySelector(".s100");
let b10 = document.querySelector(".b10");
let out10 = document.querySelector(".out10");

b10.onclick = function() {
    out10.innerHTML = s100.value;
}

//task 11
let s110 = document.querySelector(".s110");
let b11 = document.querySelector(".b11");
let out11 = document.querySelector(".out11");

s110.onchange = function() {
    out11.innerHTML = s110.value;
}

//task 12
let i120 = document.querySelector(".i120");
let b12 = document.querySelector(".b12");
let out12 = document.querySelector(".out12");
let x12;

b12.onclick = function() {
    x12 = i120.value;
    out12.innerHTML = typeof(x12); 
}

//task 13
let i130 = document.querySelector(".i130");
let b13 = document.querySelector(".b13");
let out13 = document.querySelector(".out13");
let x13;

b13.onclick = function() {
    x13 = i130.value;
    out13.innerHTML = typeof(x13);
}

//task 14
let i141 = document.querySelector(".i141");
let i142 = document.querySelector(".i142");
let s143 = document.querySelector(".s143");
let b14 = document.querySelector(".b14");
let out14 = document.querySelector(".out14");

b14.onclick = function() {
    switch (+s143.value) {
        case 1:
            out14.innerHTML = +i141.value + +i142.value;
            break;
        
        case 2:
            out14.innerHTML = +i141.value - +i142.value;
            break;

        case 3:
            out14.innerHTML = +i141.value * +i142.value;            
            break;

        case 4:
            out14.innerHTML = +i141.value / +i142.value;
            break;
    }
}

//task 15
let s151 = document.querySelector(".s151");
let s152 = document.querySelector(".s152");
let s153 = document.querySelector(".s153");
let b15 = document.querySelector(".b15");
let out15 = document.querySelector(".out15");

b15.onclick = function() {
    if(s153.value == "&&") {
        out15.innerHTML = +s151.value && +s152.value;
    } else if(s153.value == "||") {
        out15.innerHTML = +s151.value || +s152.value;
    }
}