// Test
// document.querySelector('.block-1').addEventListener('touchstart', myTouch);
// document.querySelector('.block-1').addEventListener('touchend', myTouchEnd);
// document.querySelector('.block-2').addEventListener('touchmove', myTouchMove);

// function myTouch(event) {
//     console.log(event);
//     //Скількома пальцями було здійснено клік
//     document.querySelector('.o1test').innerHTML = event.touches.length;
//     document.querySelector('.o2test').innerHTML += 'touch';
// }

// function myTouchEnd() {
//     document.querySelector('.o2test').innerHTML += ' end';
// }

// function myTouchMove(event) {
//     document.querySelector('.o1test').innerHTML = event.touches.length;
//     document.querySelector('.o2test').innerHTML += 'move';
// }

//----------------------------------------------------------------------

//task 1
document.querySelector('.d1').addEventListener('touchstart', f1);

function f1() {
    document.querySelector('.o1').innerHTML += 'touch-';
}

//task 2
document.querySelector('.d2').addEventListener('touchstart', f2);
let s = 0;
function f2(event) {
    document.querySelector('.o2').innerHTML = '(1)Кількість пальців які доторкнулись: ' + event.touches.length + '(2)Кількість кліків: ' + s++;
}

//task 3
document.querySelector('.d31').addEventListener('touchstart', f3);
document.querySelector('.d32').addEventListener('touchstart', f3);

function f3(event) {
    let o3 = document.querySelector('.o3');
    
    if(event.target.classList.contains('d31')) {
        o3.innerHTML = 1;
    } else if(event.target.classList.contains('d32')) {
        o3.innerHTML = 2;
    }
}

//task 4
function f4() {
    document.querySelector('.d4').addEventListener('touchstart', handleTouchStart);
}

function handleTouchStart() {
    document.querySelector('.o4').textContent += 'touch-';
}

document.querySelector('.b4').addEventListener('click', f4);

//task 5
function f5() {
    document.querySelector('.d4').removeEventListener('touchstart', handleTouchStart);
}

document.querySelector('.b5').addEventListener('click', f5);

//task 6
function f6() {
    document.querySelector('.o6').textContent += 'touchend-';
}

document.querySelector('.d4').addEventListener('touchend', f6);

//task 7
function f7() {
    document.querySelector('.d7').style.backgroundColor = "red";
}

document.querySelector(".d7").addEventListener("touchstart", function() {
    f7();
})

//task 8
function f8() {
    let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

    // а8[округлюємо(обираємо рандомне число з + довжини масиву)]
    let randomColor = a8[Math.floor(Math.random() * a8.length)];
    
    document.querySelector('.d8').style.backgroundColor = randomColor;
}

document.querySelector('.d8').addEventListener('touchstart', () => {
    f8();
})

//task 9
function f9(event) {
    document.querySelector('.o9').innerHTML = "Кількісьб одночастних доторків: " + event.touches.length;
}

document.querySelector('.d9').addEventListener('touchstart', () => {
    f9(event);
})