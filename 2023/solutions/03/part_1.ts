import { task } from "../../utils/task";

export const p1 = (input: string): number => {
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
            } else {
                symbols.set(`${i}:${index}`, char);
            }
        }
    });

    const adjacentNumber: string[] = [];
    symbols.forEach((_, key) => {
        let [x, y] = key.split(":").map((value) => parseInt(value));

        if (numbers.has(`${x + 1}:${y}`)) { // right 
            adjacentNumber.push(`${x + 1}:${y}`);
        }

        if (numbers.has(`${x - 1}:${y}`)) { // left 
            adjacentNumber.push(`${x - 1}:${y}`);
        }

        if (numbers.has(`${x + 1}:${y - 1}`)) { // above right 
            adjacentNumber.push(`${x + 1}:${y - 1}`);
        }

        if (numbers.has(`${x}:${y - 1}`)) { // above
            adjacentNumber.push(`${x}:${y - 1}`);
        }

        if (numbers.has(`${x - 1}:${y - 1}`)) { // above left 
            adjacentNumber.push(`${x - 1}:${y - 1}`);
        }

        if (numbers.has(`${x + 1}:${y + 1}`)) { // below right 
            adjacentNumber.push(`${x + 1}:${y + 1}`);
        }

        if (numbers.has(`${x}:${y + 1}`)) { // below
            adjacentNumber.push(`${x}:${y + 1}`);
        }

        if (numbers.has(`${x - 1}:${y + 1}`)) { // below left 
            adjacentNumber.push(`${x - 1}:${y + 1}`);
        }

    });

    let clean = adjacentNumber.filter((value) => {
        let [x, y] = value.split(":").map((value) => parseInt(value));
        return adjacentNumber.indexOf(`${x-1}:${y}`) === -1;
    });

    let sum = 0;
    clean.forEach((value) => {
        let [x, y] = value.split(":").map((value) => parseInt(value));

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

        sum += parseInt(number);
    });

    return sum;
}

const isDigit = (value: string): boolean => {
    return value !== undefined && value.match(/^\d$/g) !== null;
}

task(p1, 3, 1);
