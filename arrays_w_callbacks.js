/////////////////////////
//Model a venging machine
/////////////////////////

const vendingMachine = {
     snacks: [
        {name: 'chips', price: 1},
        {name: 'chocolate', price: 2},
        {name: 'cookies', price: 3},
    ],
    vend: (num) => { 
        if (num === 0) {
            console.log(vendingMachine.snacks[0].name);
        } else if (num === 1) {
            console.log(vendingMachine.snacks[1].name);
        } else { (num === 2) 
            console.log(vendingMachine.snacks[2].name);
        }
    }
}
vendingMachine.vend(0);