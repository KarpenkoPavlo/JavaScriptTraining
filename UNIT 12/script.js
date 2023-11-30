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

//task 7
function f7() {
    let out = '';
    let a7 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];

    for(let i = 0; i < a7.length; i++) {
        let c = a7[i];
        for(let k = 0; k < a7[i].length; k++) {
            if(a7[i][k] % 2 == 0) {
                out += a7[i][k] + ' ';
            }
        }
    }
    document.querySelector('.o7').innerHTML = out;
}

document.querySelector('.b7').onclick = f7;

//task 8
function f8() {
    let out = '';
    let a8 = [
        [1, 2, 3, 9],
        [3, 4, 7],
        [5, 6, 8, 32],
        [21, 34, 43],
        [44, 56]
    ];

    for(let i = 0; i < a8.length; i++) {
        let c = a8[i];
        for(let k = 0; k < a8[i].length; k++) {
            if(a8[i][k] % 3 == 0) {
                out += a8[i][k] + ' ';
            }
        }
    }
    document.querySelector('.o8').innerHTML = out;

}

document.querySelector('.b8').onclick = f8;

//task 9
function f9() {
    let out = '';
    let a9 = [
        [-2, 7, -3],
        [3, 4, -7],
        [-5, 6, -8, 32],
        [21, -34, -43],
        [44, -56]
    ];

    for(let i = 0; i < a9.length; i++) {
        let c = a9[i];
        for(let k = 0; k < a9[i].length; k++) {
            if(a9[i][k] > 0) {
                out += a9[i][k] + ' ';
            }
        }
    }
    document.querySelector('.o9').innerHTML = out;

}

document.querySelector('.b9').onclick = f9;

//task 10
function f10() {
    let out = '';
    let a10 = [
        [-2, '7', -3],
        [3, 4, -7],
        [-5, 6, -8, 32, 'a'],
        ['st', 21, -34, -43],
        [44, -56, 'task']
    ];

    for(let i = 0; i < a10.length; i++) {
        for(let k = 0; k < a10[i].length; k++) {
            if(a10[i][k] !== +a10[i][k]) {
                out += a10[i][k] + ' ';
            }
        }
    }
    document.querySelector('.o10').innerHTML = out;
}

document.querySelector('.b10').onclick = f10;

//task 11
let a11 = [
    [4, 5, 6],
    [7, 8],
    [9, 10, 11, 12, 13]
];

function f11() {
    let out = '';

    for(let i = 0; i < a11.length; i++) {
        for(let k = a11[i].length - 1; k >= 0; k--) {
            out += a11[i][k] + ' ';
        }
        out += `<br>`;
    }
    document.querySelector('.o11').innerHTML = out;
}

document.querySelector('.b11').onclick = f11;

//task 12
function f12() {
    let a12 = [
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
        [0,1,0,1,0,1,0,1],
        [1,0,1,0,1,0,1,0],
    ];
    let o12 = document.querySelector('.o12');

    for(let i = 0; i < a12.length; i++) {
        for(let k = 0; k < a12[i].length; k++) {
            if(a12[i][k] == 1) {
                o12.innerHTML += a12[i][k] + ' ';
            } else {
                o12.innerHTML += '(^-^)';
            }
        }
        o12.innerHTML += `<br>`;
    }
}

document.querySelector('.b12').onclick = f12;

//task 13
let a13 = [];

function f13() {
    for(let i = 0; i < 8; i++) {
        let row = [];
        for(let k = 0; k < 8; k++) {
            row.push((i + k) % 2);
        }
        a13.push(row);
    }
    console.log(a13);
}

document.querySelector('.b13').onclick = f13;

//task 14
let a14 = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];

function f14() {
    for(let i = 0; i < a14.length; i++) {
        document.querySelector('.o14').innerHTML += a14[i].length + ' ';
    }

}

document.querySelector('.b14').onclick = f14;

//task 15
let a15 = [
    [],
    [1,0],
    [1,0,0,0],
    [3,4,5,6,7,8],
    [1,2]
];
let lenArray = 0;

function f15() {
    for(let i = 0; i < a15.length; i++) {
        if(a15[i].length > lenArray) {
            lenArray = a15[i].length;
        }
    }
    document.querySelector('.o15').innerHTML = lenArray;
}

document.querySelector('.b15').onclick = f15;

//task 16
let a16 = [
    [0,7,0,6],
    0,
    0,
    8
];

console.group('Task 16 ================');
console.log(a16[3] == 8);
console.log(a16[0][1] == 7);
console.log(a16[0][3] == 6);

console.groupEnd();

//task 17
let a17 = [
    [0,0,6],
    [0,7],
    [0],
    [0,0,8]
];

console.group('Task 17 ================');

console.log(a17[3][2] == 8);
console.log(a17[1][1] == 7);
console.log(a17[0][2] == 6);

console.groupEnd();

//task 18
let a18 = [
    [3],
    [0],
    [0,12],
    [0],
    [8]
];

console.group('Task 18 ================');

console.log(a18[0] == 3);
console.log(a18[4][0] == 8);
console.log(a18[2][1] == 12);

console.groupEnd();

//task 19
let a19 = [
    [[0,3]],
    [[0,0,8]],
    [0,[12]]
];

console.group('Task 19 ================');

console.log(a19[0][0][1] == 3);
console.log(a19[1][0][2] == 8);
console.log(a19[2][1][0] == 12);

console.groupEnd();

//task 20
let a20 = [
    [0],
    [0,[0,9]],
    [0,0,18],
    [12]
];

console.group('Task 20 ================');

console.log(a20[1][1][1] == 9);
console.log(a20[2][2] == 18);
console.log(a20[3]== 12);

console.groupEnd();