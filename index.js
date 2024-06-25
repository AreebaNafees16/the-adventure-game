#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("Welcome to the Adventure Game!"));
// classes player & opponent
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Enemy {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: chalk.yellow("Please Enter Your Name")
    }
]);
let enemy = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: chalk.yellow("Select Your Enemy"),
        choices: ["Skeleton", "Assassin", "Zombie"],
    }
]);
// Data Implement
let p1 = new Player(player.name);
let e1 = new Enemy(enemy.select);
do {
    // Skeleton
    if (enemy.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: chalk.yellow("Select Your Action"),
                choices: ["Attack", "Drink portion", "Run for your life.."],
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold("💀 Skeleton Win!\n\n\tThank you for playing the Adventure Game!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold(`😎 ${player.name} You Win!\n\n\tThank you for playing the Adventure Game!`));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel again is ${p1.fuel}`));
        }
        if (ask.option === "Run for your life..") {
            console.log(chalk.cyanBright.bold.italic("❌❌ You Loose\n"));
            console.log(chalk.redBright.bold.italic("\tGame Over!"));
            process.exit();
        }
    }
    //Assassin
    if (enemy.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: chalk.yellow("Select Your Action"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold(`🕵️‍♂️ Assassin Win!\n\n\tThank you for playing the Adventure Game!`));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold(`😎 ${player.name} You Win!\n\n\tThank you for playing the dventure Game!`));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.green(`You drink health portion your fuel again is ${p1.fuel}`));
        }
        if (ask.option === "Run for your life..") {
            console.log(chalk.cyanBright.bold.italic("❌❌ You Loose\n"));
            console.log(chalk.redBright.bold.italic("\tGame Over!"));
            process.exit();
        }
    }
    // Zombie
    if (enemy.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: chalk.yellow("Select Your Action"),
                choices: ["Attack", "Drink portion", "Run for your life.."]
            }
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold("🧟‍♀️ Zombie Win!\n\n\tThank you for playing the Adventure Game!"));
                    process.exit();
                }
            }
            if (num <= 0) {
                e1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${e1.name} fuel is ${e1.fuel}`));
                if (e1.fuel <= 0) {
                    console.log(chalk.cyanBright.bold(`😎 ${player.name} You Win!\n\n\tThank you for playing the Adventure Game!`));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink portion") {
            p1.fuelIncrease();
            console.log(chalk.cyanBright.bold.italic.green(`You drink health portion your fuel again is ${p1.fuel}`));
        }
        if (ask.option === "Run for your life..") {
            console.log(chalk.cyanBright.bold.italic("❌❌ You Loose\n"));
            console.log(chalk.redBright.bold.italic("\tGame Over!"));
            process.exit();
        }
    }
} while (true);
