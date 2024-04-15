#!/usr/bin/env node
import inquirer from "inquirer";
console.log("=====welcome to currency converter=====");

let currency :any= {
 USD:1,
 PKR:280,
 INR:74.57,
 RIYAL:3.64,

};

const userInput = await inquirer.prompt([
    {
        type: 'list',
        name: 'from',
        message: 'Enter from currency',
        choices: ['USD', 'PKR', 'INR', 'RIYAL' ]
    },
    {
        type: 'list',
        name: 'to',
        message: 'Enter to currency',
        choices: ['USD', 'PKR', 'INR', 'RIYAL']
        

    },
    {
        type: 'number',
        name: 'amount',
        message: 'Enter your amount'
    }
]);


let fromAmount = currency[userInput.from]
    let toAmount = currency[userInput.to]
    let amount = userInput.amount;
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;
    console.log(`Converted amount = ${convertedAmount}`);
    console.log(fromAmount);
    console.log(toAmount);
    console.log(amount);
    console.log("===amount successfuly converted===");
    
    
    
    

