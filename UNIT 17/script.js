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