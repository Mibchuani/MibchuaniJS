// Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [100, true, 400, 'Olena', 3, 2, 1, 13, false, 4]
console.log(arr)

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])
console.log(arr[10])


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {

title: 'The plum tree',
pageCount: 512,
genre: 'novele',
}

console.log(book1);

let book2 = {

    title: 'Moonwalking with Einstein',
    pageCount: 302,
    genre: 'non-fiction',
}

console.log(book2);

let book3 = {

    title: 'he Apachi heart',
    pageCount: 100,
    genre: 'poems',
}

console.log(book3);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let book11 = {

    title: 'The plum tree',
    pageCount: 512,
    genre: 'novele',
    authors:  {
        name: 'Elen Marie Wiseman',
        age: 52,
    }
}
console.log(book11);

book2.author = {name:'Joshua Foer', age: 48}
console.log(book2);

book3 ['authors name'] = 'Semesiuk'
book3 ['autors age'] = 45
console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let member1 = {name: 'Vasya', username: 'Diabolo', password: 1234}
let member2 = {name: 'Petya', username: 'hater', password: 345}
let member3 = {name: 'Kolya', username: 'tankist', password: 6456}
let member4 = {name: 'Olya', username: 'Kvitka', password: 7878}
let member5 = {name: 'Polya', username: 'kotyk', password: 1414}

let List = {
    member1,
    member2,
    member3,
    member4,
    member5,
}

console.log(List);

console.log(List[0].password);
console.log(List[1].password);
console.log(List[2].password);
console.log(List[3].password);
console.log(List[4].password);