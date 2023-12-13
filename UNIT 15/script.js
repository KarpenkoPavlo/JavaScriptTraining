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