// document.querySelector('.it1').oninput = function(event) {
//     console.log('oninput:');
//     console.log(event);
// }

// document.querySelector('.it1').onkeypress = function(event) {
//     console.log('onkeypress:');
//     console.log(event);
// }

//task 1
function f1(event) {
    document.querySelector('.o1').innerHTML = event.key;
    return event.key;
}

document.querySelector('.i1').onkeypress = f1;

//task 2
function f2(event) {
    document.querySelector('.o2').innerHTML = event.code;
} 

document.querySelector('.i2').onkeypress = f2;

//task 3
// false якщо цифра та true якщо літера
function f3(event) {
    let o3 = document.querySelector('.o3');
    if(event.keyCode >= 48 && event.keyCode <= 57) {
        o3.innerHTML = 'false';
    } else if((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        o3.innerHTML = 'true';
    }
}

document.querySelector('.i3').onkeypress = f3;