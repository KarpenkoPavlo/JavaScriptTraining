let a = new Set();

a.add(1);
a.add(2); 
a.add('Hello'); 

console.log(a);

console.log(a.size);

a.delete('Hello');
console.log(a);

console.log(a.has( 2));

for(i of a) {
    console.log(i);
}

let arr = [1, 1, 1, 1, 5, 'Hello'];
let b = new Set(arr);
console.log(b);

let bArr = Array.from(b);
console.log(bArr);

//task 1
let s1 = new Set();
s1.add('h');
s1.add('b');
s1.add('o');
s1.add('h');
console.log(s1);

//task 2
const f2 = () => {
    let s2 = new Set();

    let i2 = document.querySelector('.i2').value;
    s2.add(i2);

    console.log(s2);
}

document.querySelector('.b2').onclick = f2;

//task 3
const f3 = () => {
    let i3 = document.querySelector('.i3').value;

    let s3 = new Set(['one', 'two', 'four']);
    if(s3.has(i3)) {
        s3.delete(i3);
    }
    console.log(s3);

}

document.querySelector('.b3').onclick = f3;

//task 4
let s4 = new Set(['a', 'b', 'c', 'z']);

const f4 = () => {
    let i4 = document.querySelector('.i4').value;

    if(s4.has(i4)) {
        document.querySelector('.o4').textContent = s4.has(i4);
    } else {
        document.querySelector('.o4').textContent = 'false';
    }
}

document.querySelector('.b4').onclick = f4;

//task 5
let s5 = new Set(['a', 'b', 'c', 'z', 'a2', 'b2', 'c2', 'z2']);

const f5 = () => {
    document.querySelector('.o5').innerHTML = s5.size;
}

document.querySelector('.b5').onclick = f5;

//task 6
const f6 = () => {
    let a6 = [1, 2, 3, 4, 5, 3, 4, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]; 
    let s6 = new Set(a6);
    let as6 = Array.from(s6);
    document.querySelector('.o6').innerHTML = as6;
}

document.querySelector('.b6').onclick = f6;

//task 7
const f7 = () => {
    let i7 = document.querySelector('.i7').value;
    let s7 = new Set(i7);
    let o7 = document.querySelector('.o7');
    
    if( i7.length >= 6 && i7.length === s7.size) {
        o7.innerHTML = 1;
    } else {
        o7.innerHTML = 0;
    }
}

document.querySelector('.b7').onclick = f7;

//task 8
let s8 = new Set([1, 2, 3, 4, 5, 3, 4, 7, 9, 5, 7, 8, 9, 23, 45, 5, 2, 4, 5, 3, 24, 5, 2, 4, 56, 4, 3, 2, 335, 2, 23, 41, 3, 4, 1, 1, 4, 2, 2, 4, 5, 24, 5, 3, 22, 56]);
let ar8 = [];

const f8 = () => {
    for(i of s8) {
        if(i > 5) {
            ar8.push(i);
        }
    }

    console.log(ar8);
}

document.querySelector('.b8').onclick = f8;

//task 9
const f9 = our_set => {
    let a9 = Array.from(our_set);
    return a9.join(' ');
}

document.querySelector('.b9').onclick = () => {
    let s9 = new Set([9, 8, 7, 6, 5]);
    document.querySelector('.o9').innerHTML = f9(s9);
}

//task 10
const f10 = (out_set, elem) => {
    let as10 = Array.from(out_set);
    document.querySelector(elem).innerHTML = as10.join(' ');
}

document.querySelector('.b10').onclick = () => {
    let a10 = new Set(['4', '5', '6']);
    f10(a10, '.o10');
};

//task 11
const f11 = () => {
    let s = new Set();
    s.add([1]);
    s.add([1]);
    console.log(s);
}

document.querySelector('.b11').onclick = f11;

// Ми змогли додати дві одиниці в Set тому що
// ці одиниця є масивами, а Set визнає унікальність
// лише для примітивних типів даних

//task 12
let str12 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';

const f12 = () => {
    let a12 = str12.split('');
    let s12 = new Set();
    
    for(i of a12) {
        s12.add(i);
    }
    return s12;
}

document.querySelector('.b12').onclick = () => {
    console.log(f12());
}

//task 13-
let str13 = 'The name conjures up visions of plum pudding and Christmas punch quaint coaching inns and cozy firesides but also of orphaned and starving children';


const f13 = () => {
    let a13 = str13.split('');
    let s13 = new Set(a13);

    let result = {};

    for (i of s13) {
        let count = a13.filter(c => c === i).length;
        result[i] = count;
    }

    return result;
}

document.querySelector('.b13').onclick = () => {
    console.log(f13());
}