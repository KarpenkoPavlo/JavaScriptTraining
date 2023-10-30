//task 1
let a = 7;
let b = 9;

console.log(a * b);

//task 2
let c = 7;
let d = 9;

// alert(c / d);

//task 3
let e = 3;
let f = 5;

// alert(e + f);

//task 4
let e1 = "3";
let f1 = 5;

// alert(e1 + f1); //Оскільки 1й елемент це рядок відбувається конкатенація

//task 5
let e2 = 3;
let f2 = 0;

// alert(e2 / f2);

//task 6
let e3 = 3;
let f3 = "Hello";

// alert(e3 + f3);

//task 7
let e4 = 3;
let f4 = "Hello";

// alert(e4 * f4);

//task 8
let inp1 = document.querySelector(".inp1");
let but1 = document.querySelector(".but1");

but1.onclick = function() {
    console.log(inp1.value);
}

//task 9
let inp2 = document.querySelector(".inp2");
let but2 = document.querySelector(".but2");

but2.onclick = function() {
    // alert(inp2.value);
    inp2.value = "";
}

//task 10
let inp3 = document.querySelector(".inp3");
let but3 = document.querySelector(".but3");

but3.onclick = function() {
    alert(inp3.value * 10);
}

//task 11
let inp4 = document.querySelector(".inp4");
let but4 = document.querySelector(".but4");

but4.onclick = function() {
    alert(inp4.value + 10);
}

//task 12
let inp5_1 = document.querySelector(".inp5_1");
let inp5_2 = document.querySelector(".inp5_2");
let but5 = document.querySelector(".but5");

but5.onclick = function() {
    console.log("Hello" + " " + inp5_1.value + " " + inp5_2.value);
}

//task 13
let inp6_1 = document.querySelector(".inp6_1");
let inp6_2 = document.querySelector(".inp6_2");
let but6 = document.querySelector(".but6");
let out6 = document.querySelector(".out6");

but6.onclick = function() {
    let sum6 = +inp6_1.value + +inp6_2.value;
    out6.innerHTML = sum6;
}

//task 14
let inp7 = document.querySelector(".inp7");

inp7.value = "Hello";

//task 15
let y = document.querySelector(".inp8");

y.style.border = "2px solid red"; //Змінився колір границі

//task 16
let inp9_1 = document.querySelector(".inp9_1");
let inp9_2 = document.querySelector(".inp9_2");
let but9 = document.querySelector(".but9");
let out9 = document.querySelector(".out9");

but9.onclick = function() {
    out9.innerHTML = +inp9_1.value + +inp9_2.value;
}

//task 17
let inp10 = document.querySelector(".inp10");
let but10 = document.querySelector(".but10");

but10.onclick = function() {
    let t = inp10.value;
    t = parseInt(t);
    console.log(t); //При виведенні буде ціле число
}

//task 18
let inp11 = document.querySelector(".inp11");
let but11 = document.querySelector(".but11");

but11.onclick = function() {
    let t = inp11.value;
    t = parseFloat(t);
    console.log(t); //Повертає десяткове число
}

//task 19
let inp12_1 = document.querySelector(".inp12_1");
let inp12_2 = document.querySelector(".inp12_2");
let but12 = document.querySelector(".but12");
let out12 = document.querySelector(".out12");

but12.onclick = function() {
    out12.innerHTML = +inp12_1.value + +inp12_2.value;

}

//task 20
let inp13_1 = document.querySelector(".inp13_1");
let inp13_2 = document.querySelector(".inp13_2");
let inp13_3 = document.querySelector(".inp13_3");
let inp13_4 = document.querySelector(".inp13_4");
let but13 = document.querySelector(".but13");
let out13 = document.querySelector(".out13");

but13.onclick = function() {
    out13.innerHTML = "Шановний " + inp13_1.value + ", " + inp13_2.value + ", " + "ваш вік " + inp13_3.value + " років," + " по професії ви " + inp13_4.value;
}