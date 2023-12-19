//task 1
let a1 = [5,7,9, 11, 13, 15];

function f1() {
    for( let i = 0; i < a1.length; i++) {
        document.querySelector('.o1').textContent += a1[i] + ' ';
    }
}

document.querySelector('.b1').addEventListener('click', f1);

//task 2
let a2 = [5,7,9, 11, 13, 15];

function f2() {
    for(let i = 0; i < a2.length; i++) {
        document.querySelector('.o2').textContent += '( Index: ' + i + ' Value:  ' + a2[i] + ' )';
    }
}

document.querySelector('.b2').addEventListener('click', f2);

//task 3
function f3() {
    let divS = document.getElementsByClassName('o3');
    for( let i = 0; i < divS.length; i++) {
        divS[i].textContent = 3;
    }
}

document.querySelector('.b3').addEventListener('click', f3);

//task 4
function f4() {
    let divS = document.querySelectorAll('.o4');
    for( let i = 0; i < divS.length; i++ ) {
        divS[i].textContent = 4;
    }
}

document.querySelector('.b4').addEventListener('click', f4);

//task 5
let a5 = [3,4,5,2,1,7,8,2,4,6,8,11,23,17];

function f5() {
    let a5New = [];
    for( item of a5) {
        if(item > 7) {
            a5New.push(item);
        }
    }
    return a5New;
}

document.querySelector('.b5').addEventListener('click', ()=> {
    document.querySelector('.o5').innerHTML = f5();
});

//task 6
let a6 = [[1,2], [3,4], [5,6]];

function f6() {
    let a6Copy = [];
    for(item of a6) {
        for(item2 of item)
        a6Copy.push(item2);
    }
    a6 = a6Copy;
    document.querySelector('.o6').textContent = a6.join(' ');
}

document.querySelector('.b6').addEventListener('click', f6);

//task 7
let a7 = [{ id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f7() {
    let a7Object = {}; // Створюю новий об'ект
    for(key of a7) { // Перебираю значення в масиві
        a7Object[key.id] = key.name; // Присвоюю замість значення id значення name
    }
    return a7Object; // Повертаю новий об'ект
}

document.querySelector('.b7').addEventListener('click', ()=>{
    console.log(f7());
});

//task 8
let a8 = [ { id : 23, name: 'Ivan'}, {id: 45, name : 'Petr'}];

function f8() {
    let a8Copy = []; // Створюю новий масив
    for(key of a8) { // Перебираю значення в масиві а8
        if(typeof key.id === 'number') { // Якщо тип значення id суворо 'число'
            a8Copy.push(key.id); // Додаю в новий масив лише значення id
        }
    }
    return a8Copy; // Повертаю новий масив
}

document.querySelector('.b8').addEventListener('click', ()=>{
    console.log(f8());
})

//task 9
let a9 = [ [4,3,2], [2,5], [0,0,0,0,0]];

function f9() {
    let maxSumIndex = 0;
    for(key of a9) {
        if(maxSumIndex < key.length - 1) {
            maxSumIndex = key.length - 1;
        }
    }
    return maxSumIndex;
}

document.querySelector('.b9').addEventListener('click', ()=>{
    document.querySelector('.o9').innerHTML = f9();
})

//task 10
let a10 = [4, 6, 9, 'Hello'];

function f10() {
    let a10Object = {};
    for(item of a10) {
        a10Object[item] = item;
    }
    return a10Object;
}

document.querySelector('.b10').addEventListener('click', ()=>{
    console.log(f10());
})

//task 11
let a11 = {
    one : 11,
    two : 7,
    three: 13,
    four: 0
}

function f11() {
    let o11 = document.querySelector('.o11');
    for(key in a11) {
        if(a11[key] > 10) {
            o11.innerHTML += a11[key] + ' ';
        }
    }
}

document.querySelector('.b11').addEventListener('click', f11);

//task 12
let a12 = [4,5,6,7];

function f12() {
    let o12 = document.querySelector('.o12');
    for(item of a12) {
        o12.innerHTML += item + ' ';
    }
}

document.querySelector('.b12').addEventListener('click', f12);

//task 13
let a13 = 'testone';

function f13() {
    let o13 = document.querySelector('.o13');
    for(item of a13.split('')) {
        o13.innerHTML += item + ' ';
    }
}

document.querySelector('.b13').addEventListener('click', f13);

//task 14
let a14 = new Set([4,5,6]);

function f14() {
    let o14 = document.querySelector('.o14');
    for(item of a14) {
        o14.innerHTML += item + ' ';
    }
}

document.querySelector('.b14').addEventListener('click', f14);

//task 15
function f15() {
    let o15 = document.querySelectorAll('.o15');
    for(item of o15) {
        item.textContent = 3;
    }
}

document.querySelector('.b15').addEventListener('click', f15);