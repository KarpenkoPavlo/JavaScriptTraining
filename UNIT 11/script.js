//task 1
function showArr(domElem, arr) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += arr[i] + ' ';
    }
    document.querySelector(domElem).innerHTML = out;
}

let d1 = [33, 'best', 66, 'best'];

function f1() {

    let i1 = document.querySelector('.i1').value;
    d1.push(i1);

    showArr('.o1', d1);
}

document.querySelector('.b1').onclick = f1;

//task 2
function f2() {
    d1.pop();

    showArr('.o2', d1);
}

document.querySelector('.b2').onclick = f2;

//task 3
function f3() {
    d1.shift();

    showArr('.o3', d1);
}

document.querySelector('.b3').onclick = f3;

//task 4
function f4() {
    let i4 = document.querySelector('.i4').value;
    if(i4.trim() !== '') { //Додав перевірку на пустий рядок
        d1.push(i4);
    } else {
        alert("Enter element for array!");
    }
    

    showArr('.o4', d1);
}

document.querySelector('.b4').onclick = f4;

//task 5
function f5() {
    let i5 = document.querySelector('.i5').value;
    d1.unshift(i5);

    showArr('.o5', d1);
}

document.querySelector('.b5').onclick = f5;

//task 6
d6 = ['test', 5, 12];

function f6() {
        d6[d6.length] = document.querySelector('.o6').value;


    showArr('.o6', d6);
}

document.querySelector('.b6').onclick = f6;

//task 7
let d7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    d7.splice(-1,1);

    showArr('.o7', d7);
}

document.querySelector('.b7').onclick = f7;

//task 8
let d8 = [2, '4', 12, 67, 'hello'];

function f8() {
    let i8 = document.querySelector('.i8').value;
    d8.splice(0, 0, i8);

    showArr('.o8', d8);
}

document.querySelector('.b8').onclick = f8;

//task 9
let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
    d9.splice(0, 1);

    showArr('.o9', d9);
}

document.querySelector('.b9').onclick = f9;

//task 10
let d10 = [3, 14, 15, 92, 6];

function f10() {
    d10.reverse();

    showArr('.o10', d10);
}

document.querySelector('.b10').onclick = f10;

//task 11
let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let i11 = parseInt(document.querySelector('.i11').value);
    document.querySelector('.o11').innerHTML = d11.indexOf(i11);
}

document.querySelector('.b11').onclick = f11;

//task 12
let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
    let i12 = parseInt(document.querySelector('.i12').value)
    let o12 = document.querySelector('.o12');

    for(let i = 0; i < d12.length; i++) {
        if(d12[i] == i12) {
            indexD12 = i;
            break;
        } else {
            o12.innerHTML = -1;
        }
    }
    o12.innerHTML = indexD12;
}

document.querySelector('.b12').onclick = f12;