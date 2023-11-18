//task 1
function f1() {
    let o1 = document.querySelector('.o1');
    o1.style.width = '200px';
    o1.style.heigth = '40px';
    o1.style.background = 'pink';
}

document.querySelector(".b1").onclick = f1;

//task 2
function f2() {
    document.querySelector("#o2").classList.add(".bg2");
}

document.querySelector('.b2').onclick = f2;

//task 3
function f3() {
    document.querySelector("#o3").classList.remove('bg3');
}

document.querySelector('.b3').onclick = f3;

//task 4
function f4() {
    document.querySelector('.o4').classList.toggle('.bg4');
}

document.querySelector('.b4').onclick = f4;

//task 5
let o4 = document.querySelector(".o4");

function f5() {
    if(o4.classList.contains('.bg4')) {
        document.querySelector(".o5").innerHTML = 'true';
    } else {
        document.querySelector(".o5").innerHTML = 'false';
    }
}

document.querySelector(".b5").onclick = f5;

//task 6
function f6() {
    let p6 = document.querySelectorAll(".p6");
    document.querySelector(".o6").innerHTML = p6.length;
}

document.querySelector(".b6").onclick = f6;

//task 7
function f7() {
    let o7 = document.querySelectorAll(".o7");
    let i = 0;
    while(i<o7.length) {
        o7[i].classList.add('.bg7');
        i++;
    }
}

document.querySelector('.b7').onclick = f7;

//task 8
function f8() {
    let o8 = document.querySelectorAll('.o8');
    let i = 0;
    while(i<o8.length) {
        o8[i].classList.toggle('.bg8');
        i++;
    }
}

document.querySelector(".b8").onclick = f8;

//task 9
let o9 = document.querySelectorAll('.o9');
let i = 0;

while(i<o9.length) {
    o9[i].addEventListener('click', function f9() {
        this.classList.add('.bg9');
    });
    i++;
}

//task 10
let o10 = document.querySelectorAll('.o10');
let k = 0;

while(k<o10.length) {
    o10[k].addEventListener('click', function f10() {
        this.classList.toggle('.bg10');
    });
    k++;
}

//task 11
function f11() {
    let o11 = document.querySelector('.o11');
    let newDiv = document.createElement('div');
    newDiv.textContent = '25';
    o11.append(newDiv);
}

document.querySelector(".b11").onclick = f11;