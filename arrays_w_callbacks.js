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


const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

///////////////
//Error reading
///////////////

foo();

const foo ()=>{
    console.log('hi');
}

//Error - Missing initializer in cost declaration
//meaning - It's missing the equal sign before the arrow function.  A more textbook definition - This error occurs when a variable is declared using const. but it's value is no initialized on the same line.
