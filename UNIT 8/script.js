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