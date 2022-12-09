//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let Users =[]
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email
    this.phone = phone;

}
let user1= new User(10, 'Olena', 'Mibchuani', 'mibchuani@ukr.net', '0939910114')
console.log(user1);
let user2 = new User(2, 'Katya', 'Shevchenko', 'shevchenko@ukr.net', '0931112223')
let user3 = new User(35, 'Sergiy', 'Kostenko', 'kostenko@gmail.com', '0673332277')
let user4 = new User(4, 'Ivan', 'Petrenko', 'petrenko@gmail.com', '0685556699')
Users.push (user1, user2, user3, user4)
console.log(Users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let Usfilter = Users.filter(value => value.id %2 ===0)
console.log(Usfilter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let Ussort = Users.sort((a, b) => a.id - b.id)
console.log(Ussort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком
// товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
let Client1 = new Client(1, 'Kolya', 'Petrenko', 'petrenko@ukr.net',
    '0671112223', ['milk', 'shugar','butter'])

console.log(Client1);


// створити пустий масив, наповнити його 10 об'єктами Client
let Clients=[]
class ClientN {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}
let Client2 = new ClientN(2, 'Kolya', 'Petrenko', 'petrenko@ukr.net',
    '0671112223', ['milk', 'shugar','butter'])
let Client3 = new ClientN(3, 'Olya', 'Shoptenko', 'shoptenko@ukr.net',
    '0503215476', ['water', 'tea', 'coffee'])
let Client4 = new ClientN(4, 'Masha', 'Prykhodko', 'prykhodko@gmail.com',
    '0931001010', ['shugar', 'tea'])
let Client5 = new ClientN(5, 'Taras', 'Topolya', 'topolya@gmail.com',
    '0978903456', ['shugar', 'tea','coffee','butter'])
let Client6 = new ClientN(6, 'Sergiy', 'Fomenko', 'fomenko@gmail.com',
    '0637897676', ['shugar'])

Clients.push (Client2, Client3, Client4, Client5, Client6)
console.log(Clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню.
// (sort)
let ClientsN = Clients.sort((a, b) => a.order.length - b.order.length)
console.log(ClientsN);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, prod, year, maxSpeed, engineCap) {
    this.model = model
    this.prod = prod
    this.year = year
    this.maxSpeed = maxSpeed
    this.endineCap = engineCap
    this.greeting = function () {
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }





this.info = function (){
    for (const argument in this) {
        if (typeof this[argument] !== 'function'){
            console.log(`${argument} - ${this[argument]}`);
        }
    }
}

this.increaseMaxSpeed = function (newSpeed) {
    this.maxSpeed = newSpeed;
}


this.changeYear = function (newValue) {
    this.year = newValue;
}
this.addDriver = function (driver){
    this.driver = driver;
}
}
let Car1 = new Car ('A6', 'Audi', '2019', '220', '2.2')
console.log(Car1.greeting());

Car1.info();
Car1.increaseMaxSpeed('250')
Car1.changeYear('2021')
Car1.addDriver({name:'Vasya', age:'21'})
console.log(Car1);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarNew {
    constructor(model, prod, year, maxSpeed, engineCap) {
        this.model = model;
        this.prod = prod;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCap = engineCap;
    }
    info (){
        for (const argument in this) {
            if (typeof this[argument] !== 'function'){
                console.log(`${argument} -- ${this[argument]}`);
            }
        }
    }
drive (){
    console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
}
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
    }


    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver;
    }
}





let Car2 = new CarNew('Corola', 'Toyota', '2017', '200', '2.4' )
Car2.info();
Car2.increaseMaxSpeed('240')
Car2.changeYear('2020')
Car2.addDriver({name:'Petya', age:'25'})
console.log(Car2);
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let Cinderellas = []
class Cinderella {
    constructor(name, age, foot) {
        this.name = name;
        this.age = age;
        this.foot = foot;
    }

}
let Cinderella1 = new Cinderella('Katya', '18', '35')
let Cinderella2 = new Cinderella('Marichka', '19', '36')
let Cinderella3 = new Cinderella('Vika', '20', '34')
let Cinderella4 = new Cinderella('Olya', '18', '37')
let Cinderella5 = new Cinderella('Christine', '17', '36')
Cinderellas.push(Cinderella1, Cinderella2, Cinderella3, Cinderella4, Cinderella5)
console.log(Cinderellas);

let Prince = {
    name: 'Alex',
    age: '25',
    shooseFind: '34'
}
let findCinderella = (arr, prince) => {
    for (const item of arr) {
        if (item.foot === prince.shooseFind ){
            console.log(`My Cinderella is ${item.name}`);
        }
    }
}

findCinderella(Cinderellas, Prince)

let findC = Cinderellas.find(value => value.foot === Prince.shooseFind)
console.log(findC);
