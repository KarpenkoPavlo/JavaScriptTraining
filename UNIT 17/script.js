let a1_res = [],
    a2_res = [],
    a3_res = [],
    a4_res = [],
    b1_res = [],
    b6_res = [],
    b7_res = [],
    b8_res = [],
    b9_num = [],
    b9_string = [],
    b10_res;

//task 1
a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
a1_res = a1.map(function(item) { // За допомогою map
    return item * 2; // перемножаю кожен елемент масиву на 2
})

document.querySelector('.b1').onclick = () => {
    console.log(a1_res);
}

//task 2
a2 = [2,3,4,5,10,11,12]

function f2() {
    a2_res = a2.map(function(item) { // За допомогою map
        return item ** 2; // підношу кожен елемент масиву в другу степінь
    })
    return a2_res;
}

document.querySelector('.b2').addEventListener('click', () => {
    console.log(f2());
})

//task 3
a3 = [4,"3",6,7,"12",34,"56",78,90,11]

function f3() {
    a3.map(function(item) { // За допомогою map
        if(typeof item === 'number') { // знаходжу елементи, тип яких = число
            return a3_res.push(item); // додаю елементи з типом = число в новий масив
        } else {
            return a3_res.push(+item); // змінюю тип елементів з рядок на число та додаю в масив
        }
    })
    return a3_res;
}

document.querySelector('.b3').onclick = () => {
    console.log(f3());
}

//task 4
a4 = [4,"3",6,7,"12",34,"56",78,90,11]

function f4() {
    a4.map(function(item) { // Ха допомогою map
        if(typeof item === 'number') { // якщо тип елементів = число
            return a4_res.push(item); // додаю елементи в масив
        }
    })
    return a4_res;
}

document.querySelector('.b4').addEventListener('click', () => {
    console.log(f4());
})

//task 5
b1 = [3, 14, 15, 92];

function f5() {
    b1.filter(function(item, index) { // За допомогою filter
        if(item % 2 === 0) { // якщо елемент ділиться на 2
            return b1_res.push(item); // додаю елемент в масив
        }
    })
    return b1_res;
}

document.querySelector('.b5').addEventListener('click', () => {
    console.log(f5());
})

//task 6
b6 = [3, 14, 15, 92, "6", "5", "hello", 32]

function f6() {
    b6.filter(function(item) {
        if(typeof item === 'number') {
            return b6_res.push(item);
        }
    })
    return b6_res;
}

document.querySelector('.b6').onclick = () => {
    console.log(f6());
}

//task 7
b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32]

function f7() {
    b7.filter(function(item) {
        if(typeof item === 'string' && item.length > 3) {
            return b7_res.push(item);
        }
    })
    return b7_res;
}

document.querySelector('.b7').addEventListener('click', () => {
    console.log(f7());
})

//task 8
b8 = [3, 14, 15, 92, "6", "5", "hello", 32];

function f8() {
    b8.filter(function(item, index) {
        if(item % 2 === 0) {
            return b8_res.push(index);
        }
    })
    return b8_res;
}

document.querySelector('.b8').onclick = () => {
    console.log(f8());
}

//task 9
b9 = [3, "hello", 4, "world", 5, "hi"];

function f9() {
    b9.filter(function(item) {
        if(typeof item === 'number') {
            return b9_num.push(item);
        } else if(typeof item === 'string') {
            return b9_string.push(item);
        }
    })
    // return b9_num;
    // return b9_string;
}

document.querySelector('.b9').addEventListener('click', () => {
    console.log(f9());
})

//task 10
let b10 = [ [1,2,3], [3,4,6], [4,5,7], [8,9,3]];

function t10() {
    b10_res = b10.filter(function(item) {
        return item.includes(3);
    });
    return b10_res;
}

document.querySelector('.b10').onclick = () => {
    console.log(t10());
}