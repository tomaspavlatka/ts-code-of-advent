import * as fs from 'fs';

export const p1 = (input: string): number => {
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

    return Math.max(...calories);
}

console.log(p1(fs.readFileSync('./src/input', 'utf8')));
