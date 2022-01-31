#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let mhm;

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
     const animated = chalkAnimation.glitch(
        'How did you get here Young Developer?'
    );

    await sleep();
    animated.stop();
    
    console.log(`
    ${chalk.bgBlack('Hello I am your new virtual assistant!')}
    ${chalk.bgBlack('I am here to help you with your daily tasks')}
    ${chalk.bgBlack('My name is')} ${chalk.green('Gatsby')}
    `);

    }


async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What do I call you?',
        default() {
            return 'Player';
        },
    });
console.log('Hello', answers.player_name, 'I will take good care of you!');
const animated = chalkAnimation.glitch(
    'Run, I am being controlled by... '
);

await sleep();
animated.stop();
}


async function welcome2() {
    console.log(`
    ${chalk.bgBlack('Hello I am your new virtual assistant!')}
    ${chalk.bgBlack('I am here to help you with your daily tasks')}
    ${chalk.bgBlack('My name is')} ${chalk.green('Gatsby')}
    `);

}

await welcome();
await askName();
console.clear();
await sleep();
await welcome2();
await sleep();
await console.log('Visit Again For something more');