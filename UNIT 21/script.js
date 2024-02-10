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
    document.querySelector('.o9').innerHTML = "Кількість одночастних доторків: " + event.touches.length;
}

document.querySelector('.d9').addEventListener('touchstart', () => {
    f9(event);
})

//task 10
function f10() {
    // обьект
    let d10 = document.querySelector('.d10');
    // поточна ширина обьекта
    let curentWidth = d10.offsetWidth;

    // ширина обьекта = (поточна ширина + 1) + 'рх'
    d10.style.width = (curentWidth + 1) + 'px';
}

// при русі на обьекті запускається функція
document.querySelector('.d10').addEventListener('touchmove', f10);

// task 11
function f11(event) {
    let d11 = document.querySelector('.d11');
    
    // радіуси доторків
    let radiusX = event.changedTouches[0].radiusX;
    let radiusY = event.changedTouches[0].radiusY;

    console.log("RadiusX: ", radiusX);
    console.log("RadiusY: ", radiusY);
}

document.querySelector('.d11').addEventListener('touchstart', f11);

// task 12
let items = document.querySelectorAll('.img-12-min');
let currentIndex = -1;
let imgMax = document.querySelector('.img-12-max');

function nextFunction() {

    // Находим текущий активный элемент
    items.forEach(function(item, index) {
      if(item.classList.contains('active-img')) {
        currentIndex = index;
      } 
    });
    
    // Если текущий активный элемент найден
    if(currentIndex !== -1) {
        // Удаляем класс active-img у текущего активного элемента
        items[currentIndex].classList.remove('active-img');

        // Находим индекс следующего элемента
        let nextIndex = currentIndex + 1;
        if(nextIndex >= items.length) {
            nextIndex = 0; // Если текущий элемент последний, переходим к первому
        }

        // Добавляем класс active-img к следующему элементу
        items[nextIndex].classList.add('active-img');

        imgMax.src = items[nextIndex].src;
    }
}

document.querySelector('.next').addEventListener('touchstart', nextFunction);

// -----------------------

function prevFunction() {
    let currentIndex = -1;

    // Находим текущий активный элемент
    items.forEach(function(item, index) {
        if (item.classList.contains('active-img')) {
            currentIndex = index;
        }
    });

    // Если текущий активный элемент найден
    if (currentIndex !== -1) {
        // Удаляем класс active-img у текущего активного элемента
        items[currentIndex].classList.remove('active-img');

        // Находим индекс предыдущего элемента
        let prevIndex = (currentIndex - 1 + items.length) % items.length; // Используем оператор % для обеспечения цикличности

        // Добавляем класс active-img к предыдущему элементу
        items[prevIndex].classList.add('active-img');

        imgMax.src = items[prevIndex].src;
    }
}

document.querySelector('.prev').addEventListener('touchstart', prevFunction);

// -----------------------

function resetFunction() {
    items.forEach(function(item,index) {
        if(item.classList.contains('active-img')) {
            item.classList.remove('active-img')
        }
    })

    items[0].classList.add('active-img');

    imgMax.src = items[0].src;
}

document.querySelector('.reset').addEventListener('touchstart', resetFunction);