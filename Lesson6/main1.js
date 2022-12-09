//- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, n) => {
    let arr2 = []
    for (let i = 0; i < str.length; i+=n) {
       arr2.push(str.slice(i,n+i))
        
    }
    return arr2;
}

   let cutString1 = cutString('наслаждение', 3);

console.log(cutString1);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
// кількості символів.
//     document.writeln(delete_characters(str, 7)); // Каждый
//let str = 'Каждый охотник желает знать'
//document.write(delete_characters(str, 7))
let str = 'Каждый охотник желает знать'
const delete_characters = (str, length) => str.slice(0, length)
let deleteCharacters = delete_characters('Каждый охотник желает знать', 7)
document.write(deleteCharacters);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";

const insert_dash = (str) => str2.split(' ').join('-').toUpperCase()
let insertDash = insert_dash (str2)
console.log(insertDash);
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру
// у верхній.
let str3 = 'hello'
const toUp = (str) => str3[0].toUpperCase() + str3.slice(1);
console.log(toUp(str3));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let n1 = 'Harry..Potter'
const norm1 = (n1) => {
    let string1 = n1.split('').map(value => (value >= 'A' && value <= 'Z') || (value>='a' && value <= 'z')
        ? value: ' ').join('')
    return string1
    while (string1.includes('  '))
    string11=string1.replace('  ', '')
}
let norm11=norm1(n1)
console.log(norm11);

let n2 = 'Ron---Whisley'
const norm2 = (n2) => {
    let string2 = n2.split('').map(value => (value >= 'A' && value <= 'Z') || (value>='a' && value <= 'z')
        ? value: ' ').join('')
    return string2
    string22=string2.replace('  ', '')
}
let norm22=norm1(n2)
console.log(norm22);

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let arr = []
function farray(array) {
    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random()*100);
        
    }
    console.log(arr);;
}
farray()


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let str31 = 'функція яка приймає'
const capitalize = (str) => str31.split(' ').map(value => value[0].toUpperCase()+value.slice(1)).join(' ');
console.log(capitalize(str31));

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом,
// з регулярками будете потім бавитись.
let val = (str111) => {
    let str = str111.toLowerCase();
    if(!str.startsWith('@') && str.includes('@') && str.includes('.', str.indexOf('@') + 3)){
        console.log('Valid')
    }
    else {
        console.log('Not Valid')
    }
}
val('someemail@gmail.com');
val('someeMAIL@gmail.com');
val('someeMAIL@i.ua');
val('some.email@gmail.com');

//
// - є масивlet coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArray = [
              {
                 title: 'JavaScript Complex',
                monthDuration: 5,
                 hourDuration: 909,
               modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
         },
           {
                title: 'Java Complex',
                 monthDuration: 6,
                  hourDuration: 909,
                modules: ['html',
                  'css',
                     'js',
                     'mysql',
                     'mongodb',
                    'angular',
                      'aws',
                      'docker',
                     'git',
                      'java core',
                     'java advanced']
            },
             {
                  title: 'Python Complex',
                monthDuration: 6,
                  hourDuration: 909,
                 modules: ['html',
                    'css',
                     'js',
                     'mysql',
                    'mongodb',
                      'angular',
                     'aws',
                    'docker',
                     'python core',
                     'python advanced']
              },
            {
                title: 'QA Complex',
                monthDuration: 4,
                hourDuration: 909,
                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
            },
            {
                 title: 'FullStack',
                 monthDuration: 7,
                  hourDuration: 909,
                  modules: ['html',
                     'css',
                      'js',
                      'mysql',
                     'mongodb',
                     'react',
                     'angular',
                     'aws',
                    'docker',
                     'git',
                      'node.js',
                      'python',
                     'java']
             },
              {
                 title: 'Frontend',
                  monthDuration: 4,
                  hourDuration: 909,
                 modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
              }
         ];

let sortCours = coursesArray.sort((a, b) => {
    if (a.modules > b.modules) {
        return 1
    }
    if (a.modules < b.modules) {
        return -1
    }
    if (a.modules = b.modules) {
        return 0
    }
})
console.log(sortCours);

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
//
//
// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
// - вісортувати книжки по кількості сторінок по зростанню