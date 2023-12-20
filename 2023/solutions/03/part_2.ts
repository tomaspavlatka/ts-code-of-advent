import { task } from "../../utils/task";

export const p2 = (input: string): number => {
    const numbers = new Map<string, number>();
    const symbols = new Map<string, string>();

    input.split("\n").forEach((line, index) => {
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

    const adjacentNumbers: string[][] = [];
    symbols.forEach((_, key) => {
        const parts: string[] = [];
        const [x, y] = key.split(":").map((value) => parseInt(value));

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

        adjacentNumbers.push(parts.filter((value) => {
            const [x, y] = value.split(":").map((value) => parseInt(value));
            return !parts.includes(`${x-1}:${y}`);
        }));
    });

    return adjacentNumbers
        .filter((gear) => gear.length === 2)
        .map((value) => value.map((point) => getNumber(point, numbers)).reduce((a, b) => a * b, 1))
        .reduce((a, b) => a + b, 0)
}

const getNumber = (point: string, numbers: Map<string, number>): number => {
    const [x, y] = point.split(":").map((value) => parseInt(value));

    let idx = x; 
    while (idx-- > -1) {
        if (!numbers.has(`${idx}:${y}`)) {
            break;
        }
    }

    idx++;

    let number = "";
    do {
        number += numbers.get(`${idx}:${y}`);
    } while(numbers.has(`${idx++}:${y}`));

    return parseInt(number);
}

const isDigit = (value: string): boolean => {
    return value !== undefined && value.match(/^\d$/g) !== null;
}

task(p2, 3, 2);
