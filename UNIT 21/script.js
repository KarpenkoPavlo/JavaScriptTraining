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