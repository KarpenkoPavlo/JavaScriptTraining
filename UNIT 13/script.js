//task 1
let a1 = {
    "one" : 15,
    "two" : 16,
    "five" : 20
};

function f1() {
    document.querySelector('.o1').innerHTML = a1.two;
    return a1.two;
}

document.querySelector('.b1').onclick = f1;

//task 2
let a2 = {
    "one" : "hello",
    "two" : "mahai",
    "five" : "hi"
};

function f2() {
    document.querySelector('.o2').innerHTML = a2["five"];
    return a2["five"];
}

document.querySelector('.b2').onclick = f2;

//task 3
function f3() {
    let a3 = {
        "one": "hello",
        "two": "mahai",
        "five": "hi",
        "test": 21,
        "odd": "hi",
        "mix": "mix"
    };

    return a3["five"] + ' ' + a3["odd"];
}

document.querySelector('.b3').onclick = () => {
    document.querySelector('.o3').innerHTML = f3();
}

//task 4
let a4 = {
    "one": "hello",
    "two": "mahai",
    "five": "hi",
    "test": 21,
    "odd": "hi",
    "mix": "mix"
};

function f4() {
    let outStr4 = '';
    for(key in a4) {
        outStr4 += key + ' ' + a4[key] +  `<br>`;
    }
    return outStr4;
}

document.querySelector('.b4').onclick = () => {
    document.querySelector('.o4').innerHTML = f4();
}

//task 5
function f5(arr, block) {
    let out = '';
    for(key in arr) {
        out += `${key} : ${arr[key]} <br>`;
    }
    document.querySelector(block).innerHTML = out;
}

// давайте протестируем f5

document.querySelector('.b5').onclick = () => {
    let a5 = {
        "one": 1,
        "two": 2
    }
    f5(a5, '.o5');
}

//task 6
let a6 = {
    "b": 17,
    "e": 22
};

function f6() {
    let i61 = document.querySelector('.i61').value;
    let i62 = document.querySelector('.i62').value;
    let out = '';
    a6[i61] = i62;

    if(i61 !== '' && i62 !== '') {
        f5(a6, '.o6');
    } else {
        alert("Enter: i61 and i62")
    }
    
}

document.querySelector('.b6').onclick = f6;

//task 7
let a7 = {
    "b": 17,
    "e": 22
};

function f7() {
    let i7 = document.querySelector('.i7').value;
    let result;

    if (a7[i7] == undefined) {
        result = 0;
    } else {
        result = 1;
    }
    document.querySelector('.o7').innerHTML = result;
}

document.querySelector('.b7').onclick = f7;

//task 8
let a8 = {
    "b": 17,
    "e": 22
};

function f8() {
    let i8 = document.querySelector('.i8').value;
    let o8 = document.querySelector('.o8');

    if(a8[i8] == undefined) {
        o8.innerHTML = 0;
    } else {
        o8.innerHTML = a8[i8];
    }
}

document.querySelector('.b8').onclick = f8;

//task 9
let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let i9 = document.querySelector('.i9').value;
    let keyArr = [];

    for(key in a9) {
        if(a9[key] == i9) {
            keyArr.push(key);
        }
    }
    document.querySelector('.o9').innerHTML = keyArr.join(' ');
}

document.querySelector('.b9').onclick = f9;

//task 10
function f10(arr, val) {

    for(key in arr) {
        if(arr[key] == val) {
            return true;
        }
    }
    return false;
}

document.querySelector('.b10').onclick = () => {
    let a10 = {
        "k": 22,
        "d": 54,
        "m": 22,
    }
    document.querySelector('.o10').innerHTML = f10(a10, 22);
};

//task 11 Використовуємо функцію f5
// function f5(arr, block) {
//     let out = '';
//     for(key in arr) {
//         out += `${key} : ${arr[key]} <br>`;
//     }
//     document.querySelector(block).innerHTML = out;
// }

let a11 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f11() {
    let i11 = document.querySelector('.i11').value;

    for(key in a11) {
        if(key == i11) {
            delete a11[key];
        }
    }
    f5(a11, '.o11');
}

document.querySelector('.b11').onclick = f11;

//task 12
let a12 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 17,
};

function f12() {
    let i12 = document.querySelector('.i12').value;

    for(key in a12) {
        if(a12[key] == i12) {
            delete a12[key];
        }
    }
    f5(a12, '.o12');
}

document.querySelector('.b12').onclick = f12;

//task 13
let a13 = {
    'prim': 'hello',
    'one': 4,
    'testt': 'vodoley',
    'ivan': 6
};

function f13() {
    let sum = 0;
    for(key in a13) {
        if(typeof(a13[key]) == "number") {
            sum = sum + a13[key];
        }
    }
    document.querySelector('.o13').innerHTML = sum;
}

document.querySelector('.b13').onclick = f13;

//task 14
let a14 = {
    'prim': [1, 2, 23],
    'one': [3, 4, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f14() {
    let out = '';
    for(key in a14) {
        out += a14[key][0] + ' ';
    }
    document.querySelector('.o14').innerHTML = out;
}

document.querySelector('.b14').onclick = f14;

//task 15 -
let a15 = {
    'prim': [1, 2, 23],
    'one': [3, 5],
    'testt': [6, 7, 8],
    'ivan': [9, 10]
};

function f15() {
    let out = '';
    for(key in a15) {
        for(val in a15[key]) {
            out += a15[key][val] + ' ';
        }
        out += `<br>`;
    }
    document.querySelector('.o15').innerHTML = out;
}

document.querySelector('.b15').onclick = f15;

//task 16
let a16 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f16() {
    let out = '';
    for(key in a16) {
        for(elem in a16[key]) {
            if(elem == "name") {
                out += elem + ': ' + a16[key][elem];
            }
        }
        out += `<br>`;
    }   
    document.querySelector('.o16').innerHTML = out;
}

document.querySelector('.b16').onclick = f16;

//task 17
let a17 = {
    "iis8sj": {
        "name": "Ivan",
        "age": 27,
    },
    "iiss7j": {
        "name": "Petr",
        "age": 26,
    },
    "s3s8sj": {
        "name": "Serg",
        "age": 47,
    },
}

function f17() {
    let out = '';
    for(key in a17) {
        for(elem in a17[key]) {
            if(a17[key][elem] > 30) {
                out += elem + ': ' + a17[key][elem];
            }
        }
    }
    document.querySelector('.o17').innerHTML = out;
}

document.querySelector('.b17').onclick = f17;

//task 18
let a18 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f18() {
    let i18 = document.querySelector('.i18').value;
    let out = '';

    for(key in a18) {
        for(elem in a18[key]) {
            if(key == i18) {
                out += a18[key][elem] + ', ';
            }
        }
    }
    document.querySelector('.o18').innerHTML = out;
}

document.querySelector('.b18').onclick = f18;

//task 19
let a19 = {
    "red": ['Akademmistechko', 'Nyvky', 'Universytet', 'Lisova'],
    "blue": ['Minska', 'Obolon', 'Pochaina', 'Holosiivska'],
    "green": ['Syrets', 'Zoloti Vorota', 'Klovska', 'Vidubichi']
}

function f19() {
    let i19 = document.querySelector('.i19').value.toLowerCase();
    let out = '';

    for(key in a19) {
        for(elem in a19[key]) {
            if(a19[key][elem].toLowerCase() == i19) {
                out += key + ' ';
            }
        }
    }
    document.querySelector('.o19').innerHTML = out;
}

document.querySelector('.b19').onclick = f19;

//task 20
let a20 = {
    "red": [['Akademmistechko', 1], ['Nyvky', 0], ['Universytet', 3], ['Lisova', 1]],
    "blue": [['Minska', 1], ['Obolon', 0], ['Pochaina', 2], ['Holosiivska', 0]],
    "green": [['Syrets', 1], ['Zoloti Vorota', 2], ['Klovska', 0], ['Vidubichi', 1]],
}

function f20() {
    let out = '';

    for(key in a20) {
        for(elem in a20[key]) {
            if(a20[key][elem][1] === 2) {
                out += a20[key][elem][0] + ', ';
            }
        }
    }
    document.querySelector('.o20').innerHTML = out;
}

document.querySelector('.b20').onclick = f20;