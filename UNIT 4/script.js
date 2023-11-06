//task 1
document.querySelector(".b1").onclick = function() {
    alert("task1");
}

//task 2
document.querySelector(".i2").onclick = function() {
    alert("task2");
}

//task 3
document.querySelector(".p3").onclick = function() {
    alert("task3");
}

//task 4
let i4 = document.querySelector(".i4");
let b4 = document.querySelector(".b4");
let out4 = document.querySelector(".out4");

b4.onclick = function() {
    if(i4.checked) {
        out4.innerHTML = "true";
    } else {
        out4.innerHTML = "false";
    }
}

//task 5
let i5 = document.querySelector(".i5");
let b5 = document.querySelector(".b5");
let out5 = document.querySelector(".out5");

b5.onclick = function() {
    if(i5.checked) {
        out5.innerHTML = i5.value;
    } else {
        out5.innerHTML = "false";
    }
}

//task 6
let i6 = document.querySelector(".i6");
let b6 = document.querySelector(".b6");
let out6 = document.querySelector(".out6");

b6.onclick = function() {
    out6.innerHTML = i6.value;
}

//task 7
let i7 = document.querySelector(".i7");
let b7 = document.querySelector(".b7");
let out71 = document.querySelector(".out71");
let out72 = document.querySelector(".out72");

b7.onclick = function() {
    out71.innerHTML = i7.value;
    if(i7.value.length >=6) {
        out72.innerHTML = "1";
    } else {
        out72.innerHTML = "0";
    }
}

//task 8 -
let out8 = document.querySelector(".out8");
let b8 = document.querySelector(".b8");

b8.onclick = function f8() {
    out8.innerHTML = `<input class = "i81">Input81</input><button class = "b81">Push81</button><div class = "out81"></div>`;

    let b81 = document.querySelector(".b81");
    let i81 = document.querySelector(".i81");
    let out81 = document.querySelector(".out81");

b81.onclick = function f81() {
    out81.innerHTML = i81.value;
}
}

//task 9
let i9 = document.querySelector(".i9");
let b9 = document.querySelector(".b9");
let out9 = document.querySelector(".out9");

b9.onclick = function() {
    if(i9.checked) {
        out9.innerHTML = i9.value;
    } else {
        out9.innerHTML = 0;
    }
}

//task 10
let i10 = document.querySelector(".i10");
let b10 = document.querySelector(".b10");
let out10 = document.querySelector(".out10");

b10.onclick = function() {
    out10.style.backgroundColor = i10.value;
}

//task 11
let i111 = document.querySelector(".i111");
let i112 = document.querySelector(".i112");
let b11 = document.querySelector(".b11");

b11.onclick = function() {
    i112.value = i111.value;
}

//task 12
let i12 = document.querySelector(".i12");
let b12 = document.querySelector(".b12");
let out12 = document.querySelector(".out12");

b12.onclick = function() {
    out12.innerHTML = i12.value;
}

//task 13
let i13 = document.querySelector(".i13");
let out13 = document.querySelector(".out13");

i13.oninput = function() {
    out13.innerHTML = i13.value;
}

//task 14
let t14 = document.querySelector(".t14");
let b14 = document.querySelector(".b14");
let out14 = document.querySelector(".out14");

b14.onclick = function() {
    out14.innerHTML = t14.value;
}

//task 15
let t15 = document.querySelector(".t15");
let i15 = document.querySelector(".i15");
let b15 = document.querySelector(".b15");
let out15 = document.querySelector(".out15");

b15.onclick = function() {
    t15.innerHTML = i15.value;
    out15.innerHTML = i15.value;
}

//task 16
let s16 = document.querySelector(".s16");
let b16 = document.querySelector(".b16");
let out16 = document.querySelector(".out16");

b16.onclick = function() {
    out16.innerHTML = s16.value;
}

//task 17
let s17 = document.querySelector(".s17");
let out17 = document.querySelector(".out17");

s17.onchange = function() {
    out17.innerHTML = s17.value;
}

//task 18
let s18 = document.querySelector(".s18");
let i18 = document.querySelector(".i18");

s18.onchange = function() {
    i18.value = s18.value;
}

//task 19
let i191 = document.querySelector(".i191");
let i192 = document.querySelector(".i192");
let b19 = document.querySelector(".b19");
let out19 = document.querySelector(".out19");

b19.onclick = function() {
    out19.innerHTML = i191.value + " " + i192.value;
}

//task 20
let f20 = document.querySelector(".f20").elements;
let i201 = document.querySelector(".i201");
let i202 = document.querySelector(".i202")
let b20 = document.querySelector(".b20");
let out20 = document.querySelector(".out20");

b20.onclick = function(event) {
    event.preventDefault();
    out20.innerHTML = i201.value + " " + i202.value;
}