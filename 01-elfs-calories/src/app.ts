import * as fs from 'fs/promises';

const file = await fs.open('./data', 'utf8');

let sum = 0;
let max = 0;
for await (const line of file.readLines()) {
    if (line.length == 0) {
        if (sum > max) {
            max = sum;
        }

        sum = 0;
    } else {
        sum = sum + parseInt(line);
    }
}

console.log(max);


