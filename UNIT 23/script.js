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