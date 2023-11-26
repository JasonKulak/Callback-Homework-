/////////////////////////
//Model a venging machine
/////////////////////////

// const vendingMachine = {
//      snacks: [
//         {name: 'chips', price: 1},
//         {name: 'chocolate', price: 2},
//         {name: 'cookies', price: 3},
//     ],
//     vend: (num) => { 
//         if (num === 0) {
//             console.log(vendingMachine.snacks[0].name);
//         } else if (num === 1) {
//             console.log(vendingMachine.snacks[1].name);
//         } else { (num === 2) 
//             console.log(vendingMachine.snacks[2].name);
//         }
//     }
// }
// vendingMachine.vend(0);

///////////
//Callbacks
///////////
//Make a function add that takes two arguments (numbers) and sums them together

// function add(a, b) {
//     return a + b;
// }
// let n1 = 10;
// let n2 = 20;
// let sum = add(n1, n2);
// console.log(sum);

// function add(a, b) {
//     console.log(a + b);
// }
// add(1, 2)

//Make a function subtract that takes two arguments (numbers) and subtracts them

// function subtract(x, y) {
//     console.log(x - y);
// }
// subtract(15, 5)

//Make a function multiply that takes two arguments and multiplies them

// function multiply(j, k) {
//     console.log(j * k);
// }
// multiply(2, 4)

//Make a function divide that takes two arguments and divides them

// function divide(w, v) {
//     console.log(w / v);
// }
// divide(50, 25)

//Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
//version1
// function calculate(operates(num1, num2)){
//     return value;
//     let value = operates(1 + 2);
// }
// calculate(operates)

//version2
// function calculate(operates) {
//     return operates(5, 4)
// }
// console.log(calculate((a, b) => a + b))
// console.log(calculate((a, b) => a - b))
// console.log(calculate((a, b) => a * b))
// console.log(calculate((a, b) => a / b))

//Q??????????????????^^^

///////////////////////////////
//Function definition placement
///////////////////////////////

//Clean up this code, so that it works and has function definitions in the correct place


// const bar = () => {
//     console.log('bar here');
// }
// bar();

// const foo = () => {
//     console.log('foo here');
// }
// foo();

///////////////
//Error reading
///////////////

// foo();

// const foo ()=>{
//     console.log('hi');
// }

//Error - Missing initializer in cost declaration
//meaning - It's missing the equal sign before the arrow function.  A more textbook definition - This error occurs when a variable is declared using const. but it's value is no initialized on the same line.

//////////////////////////////
//Array methods with callbacks
//////////////////////////////


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

///////
//Every
///////

// for(let i = 0; i < nums.length; i++){
//     const item = nums[i]
//     if (item >= 0) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

// for (let i = 0; i < panagram.length; i++) {
//     const word = panagram[i].length
//     if(word < 8) {
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }

////////
//Filter
////////

// const smallNumbers = nums.filter(function(number){
//     return number < 4;
// });
// console.log(smallNumbers)

// const evenWords = panagram.filter(function(words){
//     return words.length % 2 === 0
// });
// console.log(evenWords)

//////
//Find
//////

const found = nums.find((value) => value / 5);
console.log(found);

const bigWord = panagram.find((element) => element.length > 5);
console.log(bigWord);