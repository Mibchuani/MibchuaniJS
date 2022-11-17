//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function sqwere (a, b) {
    let result = a*b
    console.log(result);
return result
}
sqwere(50, 20);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function roundsq(r) {
    let sqr = r*r*3.14
    console.log(sqr)
    return sqr
}
roundsq(5)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilindr (h, r) {
    let cilsq = 2*3.14*r*(r+h)
    console.log(cilsq)
    return cilsq
}
cilindr(20, 5);

// - створити функцію яка приймає масив та виводить кожен його елемент
function array (arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
array([1,2,7,12])

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function asd (text)
{
   document.write(`<p> ${text} </p>`)
}
asd('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, eius!')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function trx(text1) {
    document.write(`<ul>
<li>${text1}</li>
<li>${text1}</li>
<li>${text1}</li>
</ul>`)
}
trx('Lorem ipsum dolor')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function bcd(text2,num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        const text2Element = text2[i];
        document.write(`<li>${text2}</li>`)

    }

    document.write(`</ul>`)
}
bcd('hello',4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr1 = [2, true, 16, 15, 'olena'];
function arx1(array1) {
    document.write(`<ul>`)
    for (const array1Element of array1) {
        document.write(`<li>${array1Element}</li>`)
    }
    document.write(`</ul>`)
}
arx1(arr1);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 01},
    {name: 'petya', age: 30, id: 02},
    {name: 'kolya', age: 29, id: 03},
    ];

let us = function (array3){
for (const item of array3) {
    document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
}
}
us(users);

// - створити функцію яка повертає найменьше число з масиву

let arr = [1,-3,4,20,13,0]
let minnum = function (array4) {
    let min = array4[0];
    for (const minElement of array4) {
        if (minElement < min) {
            min = minElement
        }

    }
    return min;
}

console.log(minnum(arr))


//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function arsum (array5) {
    let sum=0
    for (const array5Element of array5) {
        sum+=array5Element
    }
    return sum;
}
arsum(arr);