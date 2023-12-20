import { task } from "../../utils/task";

export const p2 = (input: string): number => {
    const numbers = new Map<string, number>();
    const symbols = new Map<string, string>();

    const lines = input.split("\n");

    lines.forEach((line, index) => {
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === ".") {
                continue;
            }

            if (isDigit(char)) {
                numbers.set(`${i}:${index}`, parseInt(char));
            } else if (char === '*') {
                symbols.set(`${i}:${index}`, char);
            }
        }
    });

    const gears: string[][] = [];
    symbols.forEach((_, key) => {
        const parts: string[] = [];
        let [x, y] = key.split(":").map((value) => parseInt(value));

        if (numbers.has(`${x + 1}:${y}`)) { // right 
            parts.push(`${x + 1}:${y}`);
        }

        if (numbers.has(`${x - 1}:${y}`)) { // left 
            parts.push(`${x - 1}:${y}`);
        }

        if (numbers.has(`${x + 1}:${y - 1}`)) { // above right 
            parts.push(`${x + 1}:${y - 1}`);
        }

        if (numbers.has(`${x}:${y - 1}`)) { // above
            parts.push(`${x}:${y - 1}`);
        }

        if (numbers.has(`${x - 1}:${y - 1}`)) { // above left 
            parts.push(`${x - 1}:${y - 1}`);
        }

        if (numbers.has(`${x + 1}:${y + 1}`)) { // below right 
            parts.push(`${x + 1}:${y + 1}`);
        }

        if (numbers.has(`${x}:${y + 1}`)) { // below
            parts.push(`${x}:${y + 1}`);
        }

        if (numbers.has(`${x - 1}:${y + 1}`)) { // below left 
            parts.push(`${x - 1}:${y + 1}`);
        }

        gears.push(parts.filter((value) => {
            let [x, y] = value.split(":").map((value) => parseInt(value));
            return !parts.includes(`${x-1}:${y}`);
        }));
    });

    const valid = gears.filter((gear) => gear.length === 2);

    let sum = 0;
    valid.forEach((value) => {
        sum += value.map((point) => getNumber(point, numbers)).reduce((a, b) => a * b, 1);
    });

    return sum;
}

const getNumber = (point: string, numbers: Map<string, number>): number => {
    let [x, y] = point.split(":").map((value) => parseInt(value));

    let idxNotDigit = x; 
    while (idxNotDigit-- > -1) {
        if (!numbers.has(`${idxNotDigit}:${y}`)) {
            break;
        }
    }

    let idx = idxNotDigit + 1;

    let number = "";
    while (true) {
        const key = `${idx}:${y}`;
        if (!numbers.has(key)) {
            break;
        }

        number += numbers.get(key);
        idx++;
    }

    return parseInt(number);
}

const isDigit = (value: string): boolean => {
    return value !== undefined && value.match(/^\d$/g) !== null;
}

task(p2, 3, 2);
