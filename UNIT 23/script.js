//task 1
document.querySelector('.b1').addEventListener('click', function f1() {
    localStorage.setItem(5, 11);
})
// При повторному виклиці дані перезаписуюються в Local Storage

//task 2
document.querySelector('.b2').addEventListener('click', function f2() {
    const a2 = [7,6,5];

    // JSON.stringify перетворюємо значення: Java Script => JSON
    localStorage.setItem('a2', JSON.stringify(a2));
})
// При повторному виклиці дані перезаписуюються в Local Storage

//task 3
document.querySelector('.b3').addEventListener('click', function f3() {
    let a2Get = localStorage.getItem('a2');
    // Перетворюємо за допомогою JSON.parse a2Get в масив
    let a2Array = JSON.parse(a2Get);
    let output = '';

    for(let i = 0; i < a2Array.length; i++) {
        output += 'a2: ' + a2Array[i] + '<br>';
    }

    document.querySelector('.o3').innerHTML = output;
})

//task 4
document.querySelector('.b4').addEventListener('click', function f4() {
    const  a4 = {
        hello: 'world', 
        hi:'mahai',
    };

    try {
        localStorage.setItem('a4', JSON.stringify(a4));
        alert("Масив був записаний до Local Storage.")
    }
    catch (error) {
        alert("Масив не був записаний до Local Storage.", error)
    }
})

//task 5
// Запускаю ф-ю f5() при кліці на кнопку с класом b5
document.querySelector('.b5').addEventListener('click', function f5() {
    // В зманну a4Get отримую дані з Local Storage
    let a4Get = localStorage.getItem('a4');
    // Після отримання даних вони перетворилися на рядок тому зараз:
    // в змінну а5 за допомогою JSON.parse перетворюємо a4Get в масив а5
    let a5 = JSON.parse(a4Get);
    // Пуста змінна для запису в неї данних які будуть виведені в out5
    let output = '';

    // Перебираємо елементи в масиві а5
    for(i in a5) {
        // ЗАписуємо кожний ключ\значення з нового рядка
        output += i + ': ' + a5[i] + `<br>`;
    }

    // Виводимо в o5 дані які записанні в зміннії output
    document.querySelector('.o5').innerHTML = output;
})

//task 6
document.querySelector('.b6').addEventListener('click', function f6() {
    try {
        localStorage.clear();
        alert("Local Storage було очищено");
    }
    catch (error) {
        alert("Не вдалося очистити Local Storage");
    }
})

//task 7
// Порожній масив
let a7 = [];
document.querySelector('.b7').addEventListener('click', function f7() {
    let i7 = document.querySelector('.i7');
    let i7Value = i7.value;

    // Додаємо i7Value в кінець масива a7
    a7.push(i7Value);
    // Чистимо i7
    i7.value = '';
    // Зберігаємо масив а7 в Local Storage з ключем а7
    localStorage.setItem('a7', a7);
})

//task 8
document.querySelector('.b8').addEventListener('click', function f8() {
    // Видаляю останній елемент з масиву а7
    a7.pop();
    // Записую масив а7 в Local Storege з ключем а7
    localStorage.setItem('a7', a7);
})