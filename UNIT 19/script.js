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

//task 9
function f9(event) {
    event.preventDefault();
    let d9 = document.querySelector('.d9');
    let d9img = d9.querySelector('img');
    if (d9img.src = ('/UNIT 19/img/1.png')) {
        d9img.src = '/UNIT 19/img/2.png';
    }
}

document.querySelector('.d9').oncontextmenu = f9;

//task 10
function f10() {
    let d10 = document.querySelector('.d10');
    let d10img = d10.querySelector('img');
    if(d10img.src = ('/UNIT 19/img/1.png')) {
        d10img.src = '/UNIT 19/img/2.png';
    }
}

document.querySelector('.d10').addEventListener('mouseenter', f10);

//task 11
function f11() {
    // Отримуємо блок
    let d11 = document.querySelector('.d11');
    // Отримуємо елемент img блока
    let d11img = d11.querySelector('img');
    
    // Навішуємо подію ,вхід миші, на елемент блока
    d11img.addEventListener('mouseenter', () => {
        d11img.src = ('/UNIT 19/img/2.png');
    })

    // Навішуємо подію ,вихід миші, на елемент блока
    d11img.addEventListener('mouseleave', () => {
        d11img.src = ('/UNIT 19/img/1.png');
    })
}

document.querySelector('.d11').addEventListener('mouseenter', f11);

//task 12
function f12() {
    // Додаю клас
    document.querySelector('.d12').classList.add('active');
}
// При події ,мишка натиснута, ( просто натиснута,не відпускаючи )
document.querySelector('.d12').addEventListener('mousedown', f12);

//task 13
function f13() {

    let d13 = document.querySelector('.d13');
    // Додаю клас
    d13.classList.add('active');
    // Видаляю класс при події ,мишка відпущенна,
    d13.addEventListener('mouseup', () => {
        d13.classList.remove('active');
    })
}
// Запускаю ф-ю при події ,мишка натиснута,
document.querySelector('.d13').addEventListener('mousedown', f13);

//task 14
function f14() {
    let d14 = document.querySelector('.d14');
    d14.onclick = () => {
        d14.classList.add('active');
    }
}

document.querySelector('.b14').onclick = f14;

//task 15 
// Рахуємо в блоці кількість рухів мишкою
let n = 0;

function f15() {
    let d15 = document.querySelector('.d15');
    d15.textContent = n++;
}

document.querySelector('.d15').addEventListener('mousemove', f15);

//task 16
// Додаємо при кожному русі в блокі +1 до його довжини
let w16 = 75;

function f16() {
    document.querySelector('.d16').style.width = w16 + 'px';
    w16++;
}

document.querySelector('.d16').addEventListener('mousemove', f16);

//task 17
// Вмикаємо подію в task 16
function f17on() {
    let d16 = document.querySelector('.d16');
    d16.addEventListener('mousemove', f16);
}

// Вимикаємо подію в task 16
function f17off () {
    let d16 = document.querySelector('.d16');
    d16.removeEventListener('mousemove', f16);
}

document.querySelector('.b17on').onclick = f17on;
document.querySelector('.b17off').onclick = f17off;

//task 18
// Виводимо в блоці його довжину
function f18() {
    let d18 = document.querySelector('.d18');
    d18.textContent = 'width: ' + d18.offsetWidth;
}

document.querySelector('.d18').addEventListener('mouseenter', f18);

//task 19
// Виводимо в блоці його класи
function f19() {
    let d19 = document.querySelector('.d19');
    d19class = d19.classList;
    d19.textContent = d19class;
}

document.querySelector('.d19').addEventListener('mouseout', f19);

//task 20
// При русі в progress додаємо +1 до його value
let v = 0;

function f20() {
    document.querySelector('progress').value = v;
    v++;

}

document.querySelector('progress').addEventListener('mousemove', f20);