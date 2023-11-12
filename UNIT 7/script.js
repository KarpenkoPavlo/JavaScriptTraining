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
// function f6(a,b) {
//     return Math.floor(Math.random()*(a-b+1))+a;
// }
