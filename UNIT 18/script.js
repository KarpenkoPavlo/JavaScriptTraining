let a1_res = [], a2_res = [], a3_res = [], a4_res = [], a5_res = [], a6_res = [], a7_res = [], a8_res, a9_res = '', a10_res = '';

//task 1
a1 = [4,5,6,7,12,34,56,78,90,11];

function f1() {
    a1.forEach(function(item) {
        a1_res.push(item * 2);
    })
    document.querySelector('.o1').innerHTML = a1_res;
}

document.querySelector('.b1').onclick = () => {
    console.log(f1());
};

//task 2
a2 = [2,3,4,5,10,11,12];

function f2() {
    a2.forEach(function(elem) {
        a2_res.push(elem / 2);
    })
    document.querySelector('.o2').innerHTML = a2_res;
}

document.querySelector('.b2').addEventListener('click', () => {
    console.log(f2());
})

//task 3
a3 = [2, "hello", 3, "hi", 4, "Mazai"] ;

function f3() {
    a3.forEach(function(elem) {
        if(+elem) {
            a3_res.push(elem);
        }
    })
    document.querySelector('.o3').innerHTML = a3_res;
}

document.querySelector('.b3').onclick = () => {
    console.log(f3());
}

//task 4
function f4() {
    let span4 = document.querySelectorAll('.span4');

    span4.forEach(function(elem) {
        a4_res.push(elem.getAttribute('data'));
    })
    document.querySelector('.o4').innerHTML = a4_res;
}

document.querySelector('.b4').onclick = f4;