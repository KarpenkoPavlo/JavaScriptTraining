//task 1
document.querySelector(".b1").onclick = function() {
    alert("task1");
}

//task 2
document.querySelector(".i2").onclick = function() {
    alert("task2");
}

//task 3
document.querySelector(".p3").onclick = function() {
    alert("task3");
}

//task 4
let i4 = document.querySelector(".i4");
let b4 = document.querySelector(".b4");
let out4 = document.querySelector(".out4");

b4.onclick = function() {
    if(i4.checked) {
        out4.innerHTML = "true";
    } else {
        out4.innerHTML = "false";
    }
}

//task 5
let i5 = document.querySelector(".i5");
let b5 = document.querySelector(".b5");
let out5 = document.querySelector(".out5");

b5.onclick = function() {
    if(i5.checked) {
        out5.innerHTML = i5.value;
    } else {
        out5.innerHTML = "false";
    }
}

//task 6
let i6 = document.querySelector(".i6");
let b6 = document.querySelector(".b6");
let out6 = document.querySelector(".out6");

b6.onclick = function() {
    out6.innerHTML = i6.value;
}

//task 7
let i7 = document.querySelector(".i7");
let b7 = document.querySelector(".b7");
let out71 = document.querySelector(".out71");
let out72 = document.querySelector(".out72");

b7.onclick = function() {
    out71.innerHTML = i7.value;
    if(i7.value.length >=6) {
        out72.innerHTML = "1";
    } else {
        out72.innerHTML = "0";
    }
}

//task 8 -
let out8 = document.querySelector(".out8");
let b8 = document.querySelector(".b8");

b8.onclick = function() {
    out8.innerHTML(input);
}