#! /usr/bin/env node

import inquirer from "inquirer"
let todos = [];
let condition = true;

while (condition) {
   let todo = await inquirer.prompt(
    [
        {
            name: "todoList",
             type: "input",  
             message: "what you want to add in your todos?" 
        },

        {
            name: "addMore",
            type: "confirm",
            message: "do you want to add more?",
            default: "false"

        }, 

    ]
);
todos.push(todo.todoList);
console.log(todos);
condition = todo.addMore;
};
     
    

    

