#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "Please guess a number between 1-6:",
        type: "number",
        name: "UserGuessedNumber"
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations! you guessed a right number.");
}
else {
    console.log("You guessed a wrong number.");
}
