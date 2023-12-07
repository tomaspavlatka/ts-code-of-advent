import { task } from "../../utils/task";

export const p1 = (input: string): number => {
    let sum = 0;
    input.split("\n").forEach( line => {
        const matches = line.match(/\d/g);
        if (matches) {
            sum += 10 * Number(matches[0]) + Number(matches[matches.length-1]);
        }
    });
    return sum;
}

task(p1, 1, 1);
