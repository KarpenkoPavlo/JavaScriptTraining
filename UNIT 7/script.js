//task 1
let a1 = 8;
function f1() {
    let o1 = document.querySelector(".o1");
    o1.innerHTML = a1;
}
document.querySelector(".b1").onclick = f1;

//task 2
let a2 = 8;
function f2() {
    return a2;
}
document.querySelector(".b2").onclick = function() {
    document.querySelector(".o2").textContent = f2();
}

//task 3
function f3(a,b) {
    return a*b;
}
document.querySelector(".b31").onclick = function() {
    document.querySelector(".o31").textContent = f3(3,4);
}
document.querySelector(".b32").onclick = function() {
    document.querySelector(".o32").textContent = f3(5,6);
}

//task 4
function f4() {
    let i4 = document.querySelector(".i4").value;
    return 2023-i4;
}
document.querySelector(".b4").onclick = function() {
    document.querySelector(".o4").textContent = f4();
}

//task 5
function f5(name) {
    console.log("Hello " + name);
}

f5("Pavel");

//task 6
function f6(a,b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
document.querySelector(".b6").onclick = () => {
    document.querySelector(".o6").textContent = f6(1,6);
}

//task 7
function f7() {
    let x = Math.floor(Math.random() * (255 - 0 + 1));
    let y = Math.floor(Math.random() * (255 - 0 + 1));
    let z = Math.floor(Math.random() * (255 - 0 + 1));
    return `rgb(`+x+`,`+y+`,`+z+`)`;
}
document.querySelector(".b7").onclick = function() {
    document.querySelector(".b7").style.backgroundColor = f7();
}

//task 8
function f8(i8) {
    return i8.trim();
}
document.querySelector(".b8").onclick = () => {
    let i8 = document.querySelector(".i8").value;
    let i8Trim = f8(i8);
    document.querySelector(".i8").value = i8Trim;
}

//task 9
function f9(number) {
    if(number % 2 == 0) {
        return "true";
    } else {
        return "false";
    }
}
document.querySelector(".b9").onclick = () => {
    let i9 = document.querySelector(".i9").value;
    let o9 = document.querySelector(".o9");
    let result = f9(parseInt(i9));
    o9.innerHTML = result;
}

//task 10
function f10() {
    let i101 = parseFloat(document.querySelector(".i101").value);
    let i102 = parseFloat(document.querySelector(".i102").value);
    return i101 > i102 ? i101 : i102;
}
document.querySelector(".b10").onclick = () => {
    document.querySelector(".o10").textContent = f10();
}