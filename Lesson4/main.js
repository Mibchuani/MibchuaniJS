
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
let texts = [1,2,3,4,5,6,7,8,9,10];
for (let text of texts) {
    document.write(`<div> hello </div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let arr = [1,2,3,4,5,6,7,8,9,10]
for (const arrKey in arr) {
    document.write(`<div> hello , ${arrKey} </div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let abs = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let x = 0
while (x < abs.length) {
console.log(abs[x]);
    x++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

//- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
// Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i=0; i < listOfItems.length; i++) {
//    const list = listOfItems [i];
 console.log(listOfItems[i])

}


//Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону  Зробити адекватну стилізацію
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (let product of products) {
    document.write (`<div className="product-card">
<h3 className="product-title"> TITLE - ${product.title}, PRICE ${product.price}</h3>
<img src="${product.image}" alt="product.image">
</div>
`)
}

//є масив
// за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users) {
    if (user.status) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`)
    }
}

for (let user of users) {
    if (!user.status) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`)
    }
}

for (let user of users) {
    if (user.age>30) {
        document.write(`<div>${user.name}, ${user.age}, ${user.status}</div>`)
    }
}
