// document.querySelector('.it1').oninput = function(event) {
//     console.log('oninput:');
//     console.log(event);
// }

// document.querySelector('.it1').onkeypress = function(event) {
//     console.log('onkeypress:');
//     console.log(event);
// }

//task 1
function f1(event) {
    document.querySelector('.o1').innerHTML = event.key;
    return event.key;
}

document.querySelector('.i1').onkeypress = f1;

//task 2
function f2(event) {
    document.querySelector('.o2').innerHTML = event.code;
} 

document.querySelector('.i2').onkeypress = f2;

//task 3
// false якщо цифра та true якщо літера
function f3(event) {
    let o3 = document.querySelector('.o3');
    if(event.keyCode >= 48 && event.keyCode <= 57) {
        o3.innerHTML = 'false';
    } else if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        o3.innerHTML = 'true';
    }
}

document.querySelector('.i3').onkeypress = f3;

//task 4
function f4(event) {
    let o4 = document.querySelector('.o4');
    console.log(event);
    if(event.key.toUpperCase()) {
        o4.innerHTML += event.key.toLowerCase();
    }
}

document.querySelector('.i4').onkeypress = f4;

//task 5
function f5(event) {
    let o5 = document.querySelector('.o5');
    console.log(event);
    if(event.key.toLowerCase()) {
        o5.innerHTML += event.key.toUpperCase();
    }
}

document.querySelector('.i5').onkeypress = f5;

//task 6
function f6(event) {
    let i6 = document.querySelector('.i6');

    // Якщо в літери малі то пишемо їх
    if(event.key === event.key.toLowerCase()) {
        i6.value += event.key;
    // Якщо літери великі то відміняємо подію
    } else if(event.key === event.key.toUpperCase()) {
        event.preventDefault();
    }
    // Відмяняємо подію повторного написання малих літер
    event.preventDefault();
}

document.querySelector('.i6').onkeypress = f6;

//task 7
function f7() {
    const a7 = [1, 'one', 2, 'two'];
    // Генерує випадковий індекс масиву в межах його довжини, 
    // дозволяючи потім обирати випадковий елемент масиву
    let randomElem = Math.floor(Math.random() * a7.length);
    document.querySelector('.o7').innerHTML = a7[randomElem];
}

document.querySelector('.i7').onkeypress = f7;

//task 8
function f8(event) {
    let o8 = document.querySelector('.o8');

    const a8 = {
        'i' : 1,
        'o' : 0,
        'l' : 7,
    }
    // Якщо натиснута кнопка знаходиться в масиві 
    if(a8[event.key] !== undefined) {
    // то записуємо її в о8
        o8.innerHTML += a8[event.key];
    } else {
        event.preventDefault();
    }
}

document.querySelector('.i8').onkeypress = f8;

//task 9
let s = 0;

function f9(event) {
    let o9 = document.querySelector('.o9')

    if(event.key === 'ArrowDown') {
        s = s + 1;
        o9.innerHTML = 'Кнопка "ArrowDown" була натиснута: ' + s + ' раз'; 
    } else {
        event.preventDefault();
    }
}

document.querySelector('.i9').onkeydown = f9;

//task 10
let w10 = 64;
let h10 = 64;

function f10(event) {
    let img10 = document.querySelector('.img10');
    
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        w10++;
        img10.style.width = w10 + 'px';
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        h10++;
        img10.style.height = h10 + 'px';
    } else {
        event.preventDefault();
    }
}

document.querySelector('.i10').onkeydown = f10;