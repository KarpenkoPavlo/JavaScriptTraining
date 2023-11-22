//  let m1 = 'JoJo';
//  let m2 = 'Dio';
//  let allAge = 16;

//  let arrayJoJo1 = [m1, ,m2, allAge];
//  console.log(arrayJoJo1);
//  console.log(m1);
//  console.log(m2);
//  console.log(allAge);

// console.log('Array length: ', arrayJoJo1.length);

//  //-

//  let arrayJoJo2 = ['JoJo', 'Dio', 16];
//  console.log(arrayJoJo2);
//  console.log(arrayJoJo2[0]);

// arrayJoJo2[1] = 'Vampire';
// console.log(arrayJoJo2);

// //-

// let array = [1, 2, 3, 4];
// console.log(array);

// let o = array[0]; //Тимчасова змінна
// array[0] = array[ array.length - 1];
// array[ array.length - 1] = o;
// console.log(array);

// let outStr = '';
// for(i=0; i<array.length; i++) {
//     if(array[i] % 2 == 0) {
//         outStr += array[i] + " ";
//     }
// }

// document.querySelector('.oTest1').innerHTML = outStr;

// // Як знайти максимальне число в масиві?
// let arrayMax = [2, 6, 32, 1, 76, 54, 4, 100];
// let max = arrayMax[0];
// for(i = 0; i<arrayMax.length; i++) {
//     if(arrayMax[i] > max) {
//         max = arrayMax[i];
// }
// }

// console.log('max: ', max);

// // Як знайти суму елементів в масиві?
// let sum = 0;
// for(i = 0; i<arrayMax.length; i++) {
//     sum = sum + arrayMax[i];
// }

// console.log('sum: ', sum);

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

//task 11
let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let i = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = i;
    document.querySelector('.o11').innerHTML = ar11.join(' ');
}

document.querySelector('.b11').onclick = f11;

//task 12
ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
    let i = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = i;
    document.querySelector('.o12').innerHTML = ar12.join(' ');
    
}

document.querySelector(".b12").onclick = f12;

//task 13
let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    let i = 0;
    while(i < ar13.length) {
        let o13 = document.querySelector('.o13');
        o13.innerHTML += (i + ' ' + ar13[i] + ' ');
        i++;
    }
}

document.querySelector('.b13').onclick = f13;

//task 14
let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    for(i = ar14.length - 1; i >= 0; i--) {
        document.querySelector('.o14').innerHTML += ar14[i] + ' ';
    }
}

document.querySelector('.b14').onclick = f14;

//task 15
ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    for(i = 0; i < ar15.length; i++) {
        if(ar15[i] > 0) {
            document.querySelector('.o15').innerHTML += ar15[i] + ' ';
        }
    }
}

document.querySelector('.b15').onclick = f15;

//task 16
let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    for(i=0; i<ar16.length; i++) {
        if(ar16[i] % 2 == 0) {
            ar16_even[i] = ar16[i];
        } else {
            ar16_odd[i] = ar16[i];
        }
        document.querySelector('.o16').innerHTML = 'Array: ' + ar16.join(' ');
        document.querySelector('.o16-odd').innerHTML = 'Even: ' + ar16_even.join(' ');
        document.querySelector('.o16-even').innerHTML = 'Odd: ' + ar16_odd.join(' ');
    }
}

document.querySelector('.b16').onclick = f16;

//task 17
let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let result = 0;
function f17() {
    for(i=0; i<ar17.length; i++) {
        if(ar17[i] > 3) {
            result++;
            document.querySelector('.o17').innerHTML = result;
        }
    }
}

document.querySelector('.b17').onclick = f17;

//task 18
let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let max = ar18[0];

function f18() {
    for(i=0; i<ar18.length; i++) {
        if(max < ar18[i]) {
            max = ar18[i];
        }
        document.querySelector('.o18').innerHTML = 'Array max: ' + max;
    }
}

document.querySelector('.b18').onclick = f18;

//task 19
let ar19 = [15,424,313,78,241,4,45,67];
let min = ar19[0];

function f19() {
    for(i=0; i<ar19.length; i++) {
        if(min > ar19[i]) {
            min = ar19[i];
        }
        document.querySelector('.o19').innerHTML = 'Array min: ' + min;
    }
}

document.querySelector('.b19').onclick = f19;

//task 20
let ar20 = [1,2,3];
let sum = 0;

function f20() {
    let i = 0;
    while(i < ar20.length) {
        sum = sum + ar20[i];
        i++;
    }
    document.querySelector('.o20').innerHTML = 'Sum: ' + sum;
}

document.querySelector('.b20').onclick = f20;