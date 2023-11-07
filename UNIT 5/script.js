//task 1
document.querySelector(".b1").onclick = function t1() {
    for(i=1; i<=50; i++) {
        let out1 = document.querySelector(".out1");
        out1.innerHTML += i + " ";
    }
}

//task 2
document.querySelector(".b2").onclick = () => {
    for(i=0; i<=122; i = i + 2) {
        let out2 = document.querySelector(".out2");
        out2.innerHTML += i + " ";
    }
}

//task 3
document.querySelector(".b3").onclick = () => {
    for(i=25; i>=7; i--) {
        let out3 = document.querySelector(".out3");
        out3.innerHTML += i + " ";
    }
}

//task 4
document.querySelector(".b4").onclick = () => {
    for(i=77;i>=35;i -= 3) {
        let out4 = document.querySelector(".out4");
        out4.innerHTML += i + "_";
    }
}

//task 5
let out5 = document.querySelector(".out5");
document.querySelector(".b5").onclick = () => {
    for(i=1; i<=17; i++) {
        if(i % 2) {
            out5.innerHTML += i + "_*";
        } else {
            out5.innerHTML += i + "_**";
        }
    }
}

//task 6 -
document.querySelector(".b6").onclick = () => {
    for(i=0; i<3; i++) {
        let out6 = document.querySelector(".out6");
        for(x=0; x<6; x++) {
            out6.innerHTML += "*";
        }
        out6.innerHTML += `<br>`;
    }
}

//task 7
let i7 = document.querySelector(".i7");
document.querySelector(".b7").onclick = () => {
    for(i7.value; i7.value>=0; i7.value--) {
        let out7 = document.querySelector(".out7");
        out7.innerHTML += i7.value + " ";
    }
}

//task 8
let i81 = document.querySelector(".i81");
let i82 = document.querySelector(".i82");

document.querySelector(".b8").onclick = () => {
    for(i81.value>0; i81.value<i82.value; i81.value++) {
        let out8 = document.querySelector(".out8");
        out8.innerHTML += +i81.value + " ";
    }
}

//task 9
let i91 = document.querySelector(".i91");
let i92 = document.querySelector(".i92");

document.querySelector(".b9").onclick= () => {
    let out9 = document.querySelector(".out9");
    if(i91.value>i92.value) {
        for(i92.value<i91.value; i92.value<i91.value; i92.value++) {
            out9.innerHTML += i92.value + " ";
        }
    } else if(i92.value>i91.value) {
        for(i91.value<i92.value; i91.value<i92.value; i91.value++) {
            out9.innerHTML += i91.value + " ";
        }
    }
}

//task 10
document.querySelector(".b10").onclick = () => {
    for(i=1950; i<=2000; i+=2) {
        let out10 = document.querySelector(".out10");
        out10.innerHTML += i + " ";
    }
}

//task 11
document.querySelector(".b11").onclick = () => {
    let div = document.getElementsByTagName("div");
    for(div[i]=0; div[i]<div.length; div++) {
        let o11 = document.querySelector(".o11");
        o11.innerHTML += div[i];
    }
}