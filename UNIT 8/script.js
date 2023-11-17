//task 1
document.querySelector(".b1").onclick = function f1() {
    let i = 0;
    while(i<50) {
        i++;
        document.querySelector(".o1").textContent += i + " ";
    }
}


//task 2
document.querySelector(".b2").onclick = function f2() {
    let i = 0;
    while(i<=122) {
        i++;
        if(i % 2 == 0) {
            document.querySelector(".o2").textContent += i + " ";
        }
    }
}

//task 3
function f3() {
    let i = 26;
    while(i>7) {
        i--;
        document.querySelector(".o3").textContent += i + " ";
    }
}
document.querySelector(".b3").onclick = f3;

//task 4
function f4() {
    let i = 77;
    while(i>=35) {
        document.querySelector(".o4").textContent += i + "_";
        i -= 3;
    }
}

document.querySelector(".b4").onclick = f4;

//task 5
function f5() {
    let i = 0;
    while(i<17) {
        i++;
        let o5 = document.querySelector(".o5");
        if(i % 2 == 0) {
            o5.textContent += i + "_**";
        } else {
            o5.textContent += i + "_*";
        }
    }
}

document.querySelector(".b5").onclick = f5;

//task 6
let i6 = document.querySelector(".i6");

function f6() {
    let i = 0;
    while(i < i6.value) {
        let k = 0;
        while(k<6) {
            k++;
            document.querySelector(".o6").innerHTML += "*";
        }
        document.querySelector(".o6").innerHTML += `<br></br>`;
        i++;
    }
}

document.querySelector(".b6").onclick = f6;

//task 7
function f7() {
    let i7 = document.querySelector(".i7");
    while(i7.value >= 0) {
        document.querySelector(".o7").innerHTML += i7.value + " ";
        i7.value--;
    }
}

document.querySelector(".b7").onclick = f7;

//task 8
function f8() {
    let i81 = document.querySelector(".i81");
    let i82 = document.querySelector(".i82");

    while(i82.value > i81.value) {
        document.querySelector(".o8").innerHTML += +i81.value++;
    }
}

document.querySelector(".b8").onclick = f8;

//task 9
function f9() {
    let i91 = document.querySelector(".i91");
    let i92 = document.querySelector(".i92");
    let o9 = document.querySelector(".o9");

    if(i91.value > i92.value) {
        while(i91.value >= i92.value) {
            o9.innerHTML += i92.value + " ";
            i92.value++;
        }
    } else {
        while(i91.value <= i92.value) {
            o9.innerHTML += i91.value + " ";
            i91.value++;
        }
    }
}

document.querySelector(".b9").onclick = f9;

//task 10
function f10() {
    let i = 1950;
    while(i <= 2000) {
        i++;
        if(i % 2 == 0) {
            document.querySelector(".o10").innerHTML += i + " ";

        }
    }
}

document.querySelector(".b10").onclick = f10;

//task 11
function f11() {
    let elements = document.querySelectorAll('.d11');
    let i = 0;
    let result = '';
    while(i < elements.length) {
        result += elements[i].innerHTML + " ";
        i++;
    }
    document.querySelector(".o11").innerHTML = result.trim();
}

document.querySelector(".b11").onclick = f11;

//task 12
function f12() {
    let elements = document.querySelectorAll(".d12");
    let i = 0;
    while(i < elements.length) {
        elements[i].style.background = 'orange';
        i++;
    }
}

document.querySelector(".b12").onclick = f12;

//task 13
function f13() {
    let elements = document.querySelectorAll(".i13");
    let i = 0;
    while(i < elements.length) {
        elements[i].value += i + 1;
        i++;
    }
}

document.querySelector(".b13").onclick = f13;

//task 14
function f14() {
    let elements = document.querySelectorAll(".i14");
    let i = 0;
    while(i < elements.length) {
        if(elements[i].checked) {
            document.querySelector(".o14").innerHTML = elements[i].value;
            break;
        }
        i++;
    }
}

document.querySelector(".b14").onclick = f14;

//task 15
function f15() {
    let i = 0;
    let k = 10;
    while(i <= 10) {
        document.querySelector(".o15").innerHTML += k-- + " " + i++ + " ";
    }
}

document.querySelector(".b15").onclick = f15;