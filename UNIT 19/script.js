//task 1
function f1() {
    // Отримуємо текст який є в блоці
    let d1 = document.querySelector('.d1').textContent;
    // Виводимо текст в блоці в o1
    document.querySelector('.o1').textContent = d1;
}
// При натискані на блок спрацьовує функція
let d1 = document.querySelector('.d1').onclick = f1;

//task 2
// Додаю параметр в функцыю
function f2(event) {
    let o2 = document.querySelector('.o2');
    // Якщо під час кліку натиснули alt
    if(event.altKey) {
        o2.textContent = 'true';
    } else {
        o2.textContent = 'false';
    }
}

document.querySelector('.d2').addEventListener('click', f2);

//task 3
let w3 = 75;

function f3() {
    w3 += 5;
    document.querySelector('.d3').style.width = w3 + 'px';
    document.querySelector('.o3').textContent = 'd3= ' + w3 + 'px';
}

document.querySelector('.d3').addEventListener('click', f3);

//task 4
function f4() {
    let d4 = document.querySelector('.d4').textContent;
    document.querySelector('.o4').textContent = d4;
}

document.querySelector('.d4').ondblclick = f4;

//task 5
function f5() {
    let d5 = document.querySelector('.d5');
    // Перевіряю на наявність класу active в d5
    if(d5.classList.contains('active')) {
        d5.classList.remove('active');
    } else {
        d5.classList.add('active');
    }
}

document.querySelector('.d5').ondblclick = f5;

//task 6
function f6() {
    let u6 = document.querySelector('.u6');
    if(u6.classList.contains('hide')) {
        u6.classList.remove('hide');
    } else {
        u6.classList.add('hide');
    }
}

document.querySelector('.d6').ondblclick = f6;

//task 7
function f7(event) {
    event.preventDefault();
    let d7 = document.querySelector('.d7');
    d7.classList.toggle('active');
}

document.querySelector('.d7').oncontextmenu = f7;

//task 8
function f8(event) {
    let ch8 = document.querySelector('.ch8');
    // Якщо ch8 активовано то припираємо клік на ПКМ
    if(ch8.checked) {
        event.preventDefault();
    }
}

document.querySelector('.ch8').onchange = function () {
    // Додаємо та видаляємо клік на ПКМ
    if(this.checked) {
        document.addEventListener('contextmenu', f8);
    } else {
        document.removeEventListener('contextmenu', f8);
    }
};