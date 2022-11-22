//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

let str1='hello world'
console.log(str1.length)

let str2='lorem ipsum'
console.log(str2.length)

let str3='javascript is cool'
console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
console.log(str1.toUpperCase())
console.log(str2.toUpperCase())
console.log(str3.toUpperCase())

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str11 = 'HELLO WORLD'
console.log(str11.toLowerCase())

let str21 = 'LOREM IPSUM'
console.log(str21.toLowerCase())

let str31 = 'JAVASCRIPT IS COOL'
console.log(str31.toLowerCase())

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtystr = ' dirty string   '
let cleanstr = dirtystr.trim()
console.log(cleanstr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні'
let stringToarray = str.split(` `)
console.log(stringToarray);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на
// стрінгові.

let arr = [10,8,-7,55,987,-1011,0,1050,0]
//let strArr = arr.map((numbers) => ({''}))
//console.log(strArr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3]
let sortNums = nums.sort(function (a,b) {
  if (a<b) {
    return -1
  }
  if (a>b) {
    return 1
  }
  if (a === b){
    return 0
  }
})
console.log(sortNums);

console.log(nums.reverse());

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4} ]

let filterUs1 = coursesAndDurationArray.sort((a, b) => {
  return a.monthDuration - b.monthDuration
})
console.log(filterUs1);

let filterUs = coursesAndDurationArray.filter(value=> value.monthDuration > 5)
console.log(filterUs);

//  описати колоду карт
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cardSuits = ['spade', 'diamond','heart', 'clubs']
let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker']
let colors = ['red','black']
let cards1 = []
for (let i1 = 0; i1 < cardSuits.length; i1++)
for (let i2 = 0; i2 < values.length-1; i2++)

  {
    let card1 = {cardSuit: cardSuits[i1], value: values[i2]}
    cards1.push(card1)
  }
console.log(cards1);

let cards2 = []
for (let i2 = 9; i2 < values.length; i2++)
for (let i3 = 0; i3 < colors.length; i3++){
  let card2 = {value: values.length[i2], color: colors[i3]}
  cards2.push(card2)
}
console.log(cards2);

let cards =[]
cards.concat(cards1, cards2)
console.log(cards);

let cards1filter = cards1.filter((card6) => cards1.value === 6)
console.log(cards1filter)

//let cardSort = cards.sort('spade', 'ace')
//console.log(cardSort);



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

