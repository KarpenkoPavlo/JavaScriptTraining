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