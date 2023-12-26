let a1_res = [], a2_res = [], a3_res = [], a4_res = [], a5_res = [], a6_res = [], a7_res = [], a8_res, a9_res = '', a10_res = '';

//task 1
a1 = [4,5,6,7,12,34,56,78,90,11];

function f1() {
    a1.forEach(function(item) {
        a1_res.push(item * 2);
    })
    document.querySelector('.o1').innerHTML = a1_res;
}

document.querySelector('.b1').onclick = () => {
    console.log(f1());
};

//task 2
a2 = [2,3,4,5,10,11,12];

function f2() {
    a2.forEach(function(elem) {
        a2_res.push(elem / 2);
    })
    document.querySelector('.o2').innerHTML = a2_res;
}

document.querySelector('.b2').addEventListener('click', () => {
    console.log(f2());
})

//task 3
a3 = [2, "hello", 3, "hi", 4, "Mazai"] ;

function f3() {
    a3.forEach(function(elem) {
        if(+elem) {
            a3_res.push(elem);
        }
    })
    document.querySelector('.o3').innerHTML = a3_res;
}

document.querySelector('.b3').onclick = () => {
    console.log(f3());
}

//task 4
function f4() {
    let span4 = document.querySelectorAll('.span4');

    span4.forEach(function(elem) {
        a4_res.push(elem.getAttribute('data'));
    })
    document.querySelector('.o4').innerHTML = a4_res;
}

document.querySelector('.b4').onclick = f4;

//task 5
function f5() {
    // Отримуємо значення атрибуту data поточного елемента (this вказує на поточний елемент, на який відбулася подія)
    let dataValue = this.getAttribute('data');
    // Додаємо значення до масиву a5_res
    a5_res.push(dataValue);
    // Виводимо масив a5_res у консоль для перевірки
    console.log(a5_res);
}

// Додаємо обробник подій для кожного елемента
document.querySelectorAll('.p5').forEach(elem => {
    elem.onclick = f5;
})

//task 6
function f6() {
    let str6 = 'helloworld';
    a6_res = str6.split('');
    document.querySelector('.o6').innerHTML = a6_res;
}

document.querySelector('.b6').onclick = f6;

//task 7
function f7() {
    let str7="hello world hi mazai";
    a7_res = str7.split(' ');
    document.querySelector('.o7').innerHTML = a7_res;
}

document.querySelector('.b7').addEventListener('click', () => {
    console.log(f7());
})

//task 8
a8 = [1,2,66,77,15];

function f8() {
    a8_res = a8.join('-');
    document.querySelector('.o8').innerHTML = a8_res;
}

document.querySelector('.b8').addEventListener('click', () => {
    console.log(f8());
})

//task 9
a9 = [['hi', 'mahai'], ['test', 'best']];

function f9() {
    a9.forEach(function(item) {
        a9_res += item.join('-') + '-';
    })
    document.querySelector('.o9').textContent = a9_res;
}

document.querySelector('.b9').onclick = f9;

//task 10-
a10 = {name: ivan, age: 15, sex: 1, id: 45};

function f10() {

}

document.querySelector('.b10').addEventListener('click', () => {
    console.log(f10());
})