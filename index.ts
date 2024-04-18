#!  /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let flag = true;

while (flag) {
    let addTask = await inquirer.prompt([
        {
            name: 'todo',
            type: 'input',
            message: 'What do you want to add in your todo?'
        },
        {
            name: 'addMore',
            type: 'confirm',
            message: 'Do you want to add more',
            default: false
        }
    
    ])
    
    todos.push(addTask.todo);
    flag = addTask.addMore;
    console.log(todos);
}
