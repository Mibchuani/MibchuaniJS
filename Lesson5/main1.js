//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function abc (a,b,c) {
    if (a<b && a< c) {
      console.log(a)
    }
    else if (b<a && b<c) {
        console.log(b)
    }
    else if (c<a && c<b) {
        console.log (c)
    }

    else {
        console.log('???')
    }
}
abc(2, 3, 4)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function cde (c,d,e){
    if (c>d && c>e) {
        console.log(c)
    }
    else if (d>c && d>e){
        console.log(d)
    }
    else if (e>c && e>d){
        console.log(e)
    }
    else ('???')
}
cde (16, -3, 24)
// - створити функцію яка повертає найбільше число з масиву
let arr = [16, 21, -2, 0]
let maxNum = Math.max(...arr)
console.log(maxNum)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// (Math використовувати заборонено);


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
//
//
//
// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]