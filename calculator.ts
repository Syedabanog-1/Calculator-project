#! /usr/bin/env node

import inquirer from "inquirer";

let answer = await inquirer.prompt([
    {message: "Enter your First Number", type: "number", name: "firstNumber"},
    {message: "Enter your Second Number", type: " number", name: "secondNumber"},
    {
         message: " Select one operator to perform operations",
         type: "list",
         name: "operator",
         choices: ["Addition","Subtraction","Multiplication","Division"],
    }
    
]);
console.log(answer); 


if (answer.operator === "ADDITION")
{
 console.log(answer.firstNumber + answer.secondNumber);
} 
else if (answer.operator === "Subtraction")
{
    console.log(answer.firstNumber - answer.secondNumber); 
}
else if (answer.operator === "Multiplication")
{ 
    console.log(answer.firstNumber * answer.secondNumber);
} 
 
else if (answer.operator === "Division")
{
    console.log(answer.firstNumber / answer.secondNumber);
}

 else
 {
    console.log("Invalid Number");
}
