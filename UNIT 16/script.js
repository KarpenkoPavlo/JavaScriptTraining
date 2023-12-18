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