 let m1 = 'JoJo';
 let m2 = 'Dio';
 let allAge = 16;

 let arrayJoJo1 = [m1, ,m2, allAge];
 console.log(arrayJoJo1);
 console.log(m1);
 console.log(m2);
 console.log(allAge);

console.log('Array length: ', arrayJoJo1.length);

 //-

 let arrayJoJo2 = ['JoJo', 'Dio', 16];
 console.log(arrayJoJo2);
 console.log(arrayJoJo2[0]);

arrayJoJo2[1] = 'Vampire';
console.log(arrayJoJo2);

//-

let array = [1, 2, 3, 4];
console.log(array);

let o = array[0]; //Тимчасова змінна
array[0] = array[ array.length - 1];
array[ array.length - 1] = o;
console.log(array);

let outStr = '';
for(i=0; i<array.length; i++) {
    if(array[i] % 2 == 0) {
        outStr += array[i] + " ";
    }
}

document.querySelector('.oTest1').innerHTML = outStr;

// Як знайти максимальне число в масиві?
let arrayMax = [2, 6, 32, 1, 76, 54, 4, 100];
let max = arrayMax[0];
for(i = 0; i<arrayMax.length; i++) {
    if(arrayMax[i] > max) {
        max = arrayMax[i];
}
}

console.log('max: ', max);

// Як знайти суму елементів в масиві?
let sum = 0;
for(i = 0; i<arrayMax.length; i++) {
    sum = sum + arrayMax[i];
}

console.log('sum: ', sum);

//tasks

//task 1
let ar1 = [false, 'string', 21, 'number', true, 69];

document.querySelector('.b1').onclick = () => {
    document.querySelector('.o1').innerHTML = ar1;
}

//task 2
let ar2 = [false, 'string', 21, 'number', true, 69];

function f2() {
    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out +=ar2[i]+' ';
    }
    document.querySelector('.o2').innerHTML = out;
}

document.querySelector('.b2').onclick = f2;

//task 3
let ar3 = [1, 2, 3];

function f3() {
    document.querySelector('.o3').innerHTML = ar3.length;
}
document.querySelector('.b3').onclick = f3;

//task 4
let ar4 = [1,2,3,4,5,6,7,8,9,10];

function f4() {
    let o4 = document.querySelector('.o4');
    o4.innerHTML = ar4[0] + ' ' + ar4[3] + ' ' + ar4[8];
}

document.querySelector('.b4').onclick = f4;

//task 5
let ar5 = [1,2,3,4,5,6,7,8,9,10];

function f5() {
    document.querySelector('.o5').innerHTML = ar5[0] + ar5[2] + ar5[3];
}

document.querySelector('.b5').onclick = f5;

//task 6
let ar6 = ['Pavel', 'scales', 19, 10];

function f6() {
    let i = 0;
    let outStr6 = '';
    while(i < ar6.length) {
        outStr6 += ar6[i] + ' ';
        i++;
    }
    document.querySelector('.o6').innerHTML = outStr6;
}

document.querySelector('.b6').onclick = f6;

//task 7
let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    ar7[5] = 'italy';
    ar7[6] = 'turkey';
    ar7[7] = 'vietnam';
    
    let i = 0;
    let outStr7 = '';
    while(i < ar7.length) {
        outStr7 += ar7[i] + ' ';
        i++;
    }
    document.querySelector('.o7').innerHTML = outStr7;
}

document.querySelector('.b7').onclick = f7;

//task 8
let ar8 = [0, 0, 0, 3.14, 17, 0, 5];

function f8() {
    let i = 0;
    let outStr8 = '';
    while(i < ar8.length) {
        outStr8 += ar8[i] + '-';
        i++;
    }
    document.querySelector('.o8').innerHTML = outStr8;
    document.querySelector('.o81').innerHTML = ar8.length;
}

document.querySelector('.b8').onclick = f8;

//task 9
let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    let i = 0;
    let outStr9 = '';
    while(i < ar9.length) {
        outStr9 = ar9[i];
        i++;
    }
    document.querySelector(".o9").innerHTML = 'Last element: ' + outStr9 + ' ' + 'Last index: ' + (ar9.length - 1);
}

document.querySelector('.b9').onclick = f9;

//task 10
let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
    let sum = 0;
    let i = 0;
    let outStr10 = '';
    while(i < ar10.length) {
        sum = ar10[1] + ar10[i];
        i++;
        outStr10 = sum;
    }
    document.querySelector('.o10').innerHTML = outStr10;
}

document.querySelector('.b10').onclick = f10;