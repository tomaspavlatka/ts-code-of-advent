import * as fs from 'fs';

export const p2 = (input: string): number => {
    const calories = Array<number>();
    let current: number = 0;

    const lines = input.split(/\r?\n/);
    for (const line of lines) {
        if (line.length === 0) {
            calories.push(current);
            current = 0;
        } else {
            current += parseInt(line);
        }
    } 

    return calories.sort((a, b) => a - b).reverse().slice(0, 3).reduce((a, b) => a + b);
}

console.log(p2(fs.readFileSync('./src/input', 'utf8')));

