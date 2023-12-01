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

//task 9-
let a9 = {
    "b": 17,
    "e": 22,
    "j": 17,
    "k": 22,
    "d": 54
};

function f9() {
    let i9 = document.querySelector('.i9').value;
    let o9 = document.querySelector('.o9');

    if(a9[i9] == undefined) {
        o9.innerHTML = '';
    } else {
        o9.innerHTML += a9.i9;
    }
}

document.querySelector('.b9').onclick = f9;