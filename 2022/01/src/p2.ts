import * as fs from 'fs';

const lines = fs.readFileSync('./src/input', 'utf8').split(/\r?\n/);

let calories = Array<number>();
let current: number = 0;
for (const line of lines) {
    if (line.length === 0) {
        calories.push(current);
        current = 0;
    } else {
        current += parseInt(line);
    }
} 

console.log(calories.sort((a, b) => a - b).reverse().slice(0, 3).reduce((a, b) => a + b));

