import * as fs from 'fs';

export const p1 = (input: string): number => {
    const lines = input.split(/\r?\n/);
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

    return Math.max(...calories);
}

console.log(p1(fs.readFileSync('./src/input', 'utf8')));
