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

    const adjacentNumbers: string[] = [];
    symbols.forEach((_, key) => {
        const [x, y] = key.split(":").map((value) => parseInt(value));

        if (numbers.has(`${x + 1}:${y}`)) { // right 
            adjacentNumbers.push(`${x + 1}:${y}`);
        }

        if (numbers.has(`${x - 1}:${y}`)) { // left 
            adjacentNumbers.push(`${x - 1}:${y}`);
        }

        if (numbers.has(`${x + 1}:${y - 1}`)) { // above right 
            adjacentNumbers.push(`${x + 1}:${y - 1}`);
        }

        if (numbers.has(`${x}:${y - 1}`)) { // above
            adjacentNumbers.push(`${x}:${y - 1}`);
        }

        if (numbers.has(`${x - 1}:${y - 1}`)) { // above left 
            adjacentNumbers.push(`${x - 1}:${y - 1}`);
        }

        if (numbers.has(`${x + 1}:${y + 1}`)) { // below right 
            adjacentNumbers.push(`${x + 1}:${y + 1}`);
        }

        if (numbers.has(`${x}:${y + 1}`)) { // below
            adjacentNumbers.push(`${x}:${y + 1}`);
        }

        if (numbers.has(`${x - 1}:${y + 1}`)) { // below left 
            adjacentNumbers.push(`${x - 1}:${y + 1}`);
        }

    });

    return adjacentNumbers
        .filter((value) => {
            const [x, y] = value.split(":").map((value) => parseInt(value));
            return !adjacentNumbers.includes(`${x-1}:${y}`);
        })
        .map((value) => getNumber(value, numbers))
        .reduce((acc, value) => acc + value, 0);
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

task(p1, 3, 1);
