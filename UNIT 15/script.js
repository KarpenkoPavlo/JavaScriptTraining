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
    
    if(s7.size >= 6) {
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