let a = [4, 5, 6];
console.log(a);

let b = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(b);

// Перебираємо елементи елментів двовимірногго масиву
// Перший варіант
for(let i = 0; i < b.length; i++) {
    let c = b[i];
    for(let k = 0; k < c.length; k++) {
        //console.log(c[k]);
    }
}

console.log('---'); // Лінія для того щоб відділити код зверху від коду знизу
// Другий варіант

let out = '';

for(let i = 0; i < b.length; i++) {
    for(let k = 0; k < b[i].length; k++) {
        //console.log(b[i][k]);
        out += b[i][k] + ' ';
    }
    out += '<br>';
}

document.querySelector('.oTest').innerHTML = out;

// Виведемо лише ті числа які більше 4

out = ''; // Очистимо out тому-що він також викоростовується в минулому завданні
for(let i = 0; i < b.length; i++) {
    for(let k = 0; k < b[i].length; k++) {
        //console.log(b[i][k]);
        if(b[i][k] > 4) {
            out += b[i][k] + ' ';
        }
    }
    out += '<br>';
}

console.log(out);

console.log('---'); // Лінія для того щоб відділити код зверху від коду знизу

//Виводимо елементи масиву з кінця на початок
// тобто
// 3 2 1 6 5 4 9 8 7
for(let i = 0; i < b.length; i++) {
    let c = b[i];
    for(let k = c.length - 1; k >= 0; k--) {
        //console.log(c[k]);
    }
}

console.log('---'); // Лінія для того щоб відділити код зверху від коду знизу

let d = [1, 0, 0, 0, 0];
document.querySelector('.oTest2').innerHTML = d;
let k = 0;
document.querySelector('.bTest').onclick = () => {
    if(k + 1 < 5) {
        d[k] = 0;
        d[k + 1] = 1;
        k++;
    }
    document.querySelector('.oTest2').innerHTML = d;
}

//task 1
document.querySelector('.b1').onclick = function f1() {
    let a1 = [12, [45, 87], [55, 13]];
    document.querySelector('.o1').innerHTML = a1[2][0];
    return a1[2][0];
}

//task 2
function f2() {
    let a2 = [[12, 'hi'], [45, 87], [55, 13]];
    document.querySelector('.o2').innerHTML = a2[0][1];
    return a2[0][1];
}

document.querySelector('.b2').onclick = f2;

//task 3
function f3() {
    let a3 = [[1, 2, 3], [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.o3').innerHTML = a3[2][1][1];
    return a3[2][1][1];
}

document.querySelector('.b3').onclick = f3;

//task 4
function f4() {
    let a4 = [[1, 2, 3], 'go', [3, 4, 5], [6, [7, 'my']]];
    document.querySelector('.o4').innerHTML = a4[1];
    return a4[1];
}

document.querySelector('.b4').onclick = f4;

//task 5
function f5() {
    let out = '';
    let a5 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for (let i = 0; i < a5.length; i++) {
        if (a5[i][0] % 2 == 0) out += a5[i][0] + ' ';
        if (a5[i][1] % 2 == 0) out += a5[i][1] + ' ';
    }
    document.querySelector('.o5').innerHTML = out;
}

document.querySelector('.b5').onclick = f5;

//task 6
function f6() {
    let out = '';
    let a6 = [[1, 2], [3, 4], [5, 6], [21, 34], [44, 56]];
    for(let i = 0; i < a6.length; i++) {
        if(a6[i][0] % 2 !== 0) out += a6[i][0] + ' ';
        if(a6[i][1] % 2 !== 0) out += a6[i][1] + ' ';
    }
    document.querySelector('.o6').innerHTML = out;
}

document.querySelector('.b6').onclick = f6;