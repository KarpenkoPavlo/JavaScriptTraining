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

//task 12
document.querySelector('.b12').onclick = function f12() {
    let newDiv = document.createElement('div');
    newDiv.textContent = '12';
    newDiv.classList.add('bg12');
    document.querySelector('.o12').append(newDiv);
}

//task 13
document.querySelector('.b13').onclick = function f13() {
    let newDiv = document.createElement('div');
    newDiv.textContent = 'pushMe';
    newDiv.classList.add('bg13');
    newDiv.onclick = function f131() {
        document.querySelector('.o13').append(newDiv);
    }
    document.querySelector('.o13').append(newDiv);
}

//task 14
document.querySelector('.b14').onclick = function f14() {
    let newDiv = document.createElement('div');
    newDiv.textContent = '14';
    newDiv.classList.add('bg14');
    document.querySelector('.o14').prepend(newDiv);
}

//task 15
function f15() {
    let newDiv = document.createElement('div');
    newDiv.textContent = '15';
    newDiv.classList.add('bg15');
    document.querySelector('.o15').before(newDiv);
}

document.querySelector('.b15').onclick = f15;

//task 16
function f16() {
    let newDiv = document.createElement('div');
    newDiv.textContent = '16';
    newDiv.classList.add('bg16');
    document.querySelector('.o16').after(newDiv);
}

document.querySelector('.b16').onclick = f16;

//task 17
function f17() {
    let newDiv = document.createElement('div');
    newDiv.textContent = '17';
    newDiv.classList.add('bg17');
    document.querySelector('.o17').replaceWith(newDiv);
}

document.querySelector('.b17').onclick = f17;

//task 18
document.querySelector('.b18').onclick = function f18() {
    let getP = document.querySelector('.p18');
    document.querySelector('.o18').innerHTML = getP.getAttribute('data-b');
}

//task 19
document.querySelector('.b19').onclick = function f19() {
    let getP = document.querySelectorAll('.p19');
    let o19 = document.querySelector('.o19');
    o19.innerHTML = '';
    let i = 0;
    while(i<getP.length) {
        o19.innerHTML += getP[i].getAttribute('data-b') + " ";
        i++;
    }
}

//task 20
document.querySelector('.b20').onclick = function f20() {
    let o20 = document.querySelector('.o20');
    o20.setAttribute('title', 'go');
}