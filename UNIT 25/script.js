// let xhttp = new XMLHttpRequest();

// xhttp.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         myFunction(this.responseText)
//     }
// }

// xhttp.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
// xhttp.send();

// function myFunction() {
//     console.log(data);
// }

// //

// let xhttp2 = new XMLHttpRequest();
// xhttp2.onreadystatechange = function() {
//     if(this.readyState == 4 && this.status == 200) {
//         myFunction2(this.responseText)
//     }
// }

// xhttp2.open("POST", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
// xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// xhttp2.send("auth=zhrgB3DxC8LoG7Gcilzg&action=1");

// function myFunction2() {
//     console.log("POST");
//     console.log(data);
// }

//=========================

//task 1
document.querySelector('.b1').onclick = function() {
    let xhttp1 = new XMLHttpRequest();

    // Встановлення обробника подій для зміни стану об'єкта XMLHttpRequest
    xhttp1.onreadystatechange = function() {
        if(xhttp1.readyState == 4 && xhttp1.status == 200) {
            myFunction1();
        }
    }

    // Відкриття запиту
    xhttp1.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1");
    // Відправлення запиту
    xhttp1.send();

    // Функція, яка буде викликана при успішному отриманні відповіді від сервера
    function myFunction1() {
        document.querySelector('.o1').innerHTML = xhttp1.responseText;
    }
}

//task 2
document.querySelector('.b2').addEventListener('click', function() {
    let xhttp2 = new XMLHttpRequest();

    xhttp2.onreadystatechange = function() {
        if(xhttp2.readyState == 4 && xhttp2.status == 200) {
            myFunction2();
        }
    }

    xhttp2.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Pavlo");
    xhttp2.send();

    function myFunction2() {
        document.querySelector('.o2').innerHTML = xhttp2.responseText;
    }
})

//task 3
document.querySelector('.b3').onclick = function() {
    let xhttp3 = new XMLHttpRequest();

    xhttp3.onreadystatechange = function() {
        if(xhttp3.readyState == 4 && xhttp3.status == 200) {
            myFunction3();
        }
    }

    xhttp3.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=3&num2=7");
    xhttp3.send();

    function myFunction3() {
        document.querySelector('.o3').innerHTML = xhttp3.responseText;
    }
}

//task 4
document.querySelector('.b4').onclick = function() {
    let xhttp4 = new XMLHttpRequest();

    xhttp4.onreadystatechange = function() {
        if(xhttp4.readyState == 4 && xhttp4.status == 200) {
            myFunction4();
        }
    }

    xhttp4.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=3&num2=7");
    xhttp4.send();

    function myFunction4() {
        document.querySelector('.o4').innerHTML = xhttp4.responseText;
    }
}

//task 5
document.querySelector('.b5').addEventListener('click', function() {
    let xhttp5 = new XMLHttpRequest();

    xhttp5.onreadystatechange = function() {
        if(xhttp5.readyState == 4 && xhttp5.status == 200) {
            myFunction5();
        }
    }

    xhttp5.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5", true);
    xhttp5.send();

    function myFunction5() {
        document.querySelector('.o5').innerHTML = data;
    }
})

//task 6
document.querySelector('.b6').addEventListener('click', function() {
    let xhttp6 = new XMLHttpRequest();

    xhttp6.onreadystatechange = function() {
        if(xhttp6.readyState == 4 && xhttp6.status == 200) {
            myFunction6();
        }
    }

    xhttp6.open("GET", "http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=5&num2=2", true);
    xhttp6.send();

    function myFunction6() {
        document.querySelector('.o6').innerHTML = data;
    }
})