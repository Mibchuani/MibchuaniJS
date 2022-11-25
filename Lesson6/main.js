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
let strArr = arr.map(value => value.toString())
console.log(strArr)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3]
//let sortNums = nums.sort(function (a,b) {
  //if (a<b) {
   // return -1
  //}
 // if (a>b) {
 //   return 1
  //}
  //if (a === b){
    //return 0
 // }
//})
//console.log(sortNums);
//console.log(nums.reverse());
const sortNums = (direction, arr11) => {
if (direction === 'ascending') {
  arr11.sort((a, b) => a-b)
} else if (direction ==='descending') {
  arr11.sort((a, b) => b-a)
}
return arr11
}
console.log(sortNums('ascending', nums))
console.log(sortNums('descending', nums))

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





// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

//let cardSuits = ['spade', 'diamond','heart', 'clubs']
//let values = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker']
//let colors = ['red','black']
//let cards1 = []
//for (let i1 = 0; i1 < cardSuits.length; i1++)
//for (let i2 = 0; i2 < values.length-1; i2++)

  //{
    //let card1 = {cardSuit: cardSuits[i1], value: values[i2]}
   // cards1.push(card1)
  //}
//console.log(cards1);

//let cards2 = []
//for (let i2 = 9; i2 < values.length; i2++)
//for (let i3 = 0; i3 < colors.length; i3++){
  //let card2 = {value: values.length[i2], color: colors[i3]}
  //cards2.push(card2)
//}
//console.log(cards2);

//let cards =[]
//cards.concat(cards1, cards2)
//console.log(cards);



let deck = [
  {cardSuit:'Spade', value: 6, color:'Black'},
  {cardSuit:'Clubs', value: 6, color:'Black'},
  {cardSuit:'Hearts', value: 6, color:'Red'},
  {cardSuit:'Diamonds', value: 6, color:'Red'},
  {cardSuit:'Spade', value: 7, color:'Black'},
  {cardSuit:'Clubs', value: 7, color:'Black'},
  {cardSuit:'Hearts', value: 7, color:'Red'},
  {cardSuit:'Diamonds', value: 7, color:'Red'},
  {cardSuit:'Spade', value: 8, color:'Black'},
  {cardSuit:'Clubs', value: 8, color:'Black'},
  {cardSuit:'Hearts', value: 8, color:'Red'},
  {cardSuit:'Diamonds', value: 8, color:'Red'},
  {cardSuit:'Spade', value: 9, color:'Black'},
  {cardSuit:'Clubs', value: 9, color:'Black'},
  {cardSuit:'Hearts', value: 9, color:'Red'},
  {cardSuit:'Diamonds', value: 9, color:'Red'},
  {cardSuit:'Spade', value: 10, color:'Black'},
  {cardSuit:'Clubs', value: 10, color:'Black'},
  {cardSuit:'Hearts', value: 10, color:'Red'},
  {cardSuit:'Diamonds', value: 10, color:'Red'},
  {cardSuit:'Spade', value: 'Jack', color:'Black'},
  {cardSuit:'Clubs', value: 'Jack', color:'Black'},
  {cardSuit:'Hearts', value: 'Jack', color:'Red'},
  {cardSuit:'Diamonds', value: 'Jack', color:'Red'},
  {cardSuit:'Spade', value: 'Queen', color:'Black'},
  {cardSuit:'Clubs', value: 'Queen', color:'Black'},
  {cardSuit:'Hearts', value: 'Queen', color:'Red'},
  {cardSuit:'Diamonds', value: 'Queen', color:'Red'},
  {cardSuit:'Spade', value: 'King', color:'Black'},
  {cardSuit:'Clubs', value: 'King', color:'Black'},
  {cardSuit:'Hearts', value: 'King', color:'Red'},
  {cardSuit:'Diamonds', value: 'King', color:'Red'},
  {cardSuit:'Spade', value: 'Ace', color:'Black'},
  {cardSuit:'Clubs', value: 'Ace', color:'Black'},
  {cardSuit:'Hearts', value: 'Ace', color:'Red'},
  {cardSuit:'Diamonds', value: 'Ace', color:'Red'},
  {cardSuit:null, value: 'Jocker', color:'Red'},
  {cardSuit:null, value: 'Jocker', color:'Black'}
];

//  - знайти піковий туз

let filter1 = deck.filter(value => value.cardSuit === 'Spade' && value.value === 'Ace');
console.log(filter1);

//  - всі шістки

let filter2 = deck.filter(value => value.value === 6)
console.log(filter2)

//  - всі червоні карти

let filter3 = deck.filter(value => value.color === 'Red')
console.log(filter3)

//  - всі буби
let filter4 = deck.filter(value => value.cardSuit === 'Diamonds')
console.log(filter4)
//  - всі трефи від 9 та більше

let filter5 = deck.filter(value => (value.cardSuit === 'Clubs' && value.value > 8) ||
    (value.cardSuit === 'Clubs' && typeof value.value === 'string'))
console.log(filter5)

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let reduce = deck.reduce((accum, value) => {
  if (value.cardSuit === 'Spade') {
    accum.spades.push(value);
  } else if (value.cardSuit === 'Clubs') {
    accum.clubs.push(value);
  } else if (value.cardSuit === 'Diamonds') {
    accum.diamonds.push(value);
  } else if (value.cardSuit === 'Hearts') {
    accum.hearts.push(value);
  }
  return accum
},
{
  spades: [],
diamonds: [],
hearts: [],
clubs: []

})
console.log(reduce);