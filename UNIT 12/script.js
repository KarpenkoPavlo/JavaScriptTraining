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