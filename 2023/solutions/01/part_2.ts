import { isNumeric } from "../../utils/string";
import { task } from "../../utils/task";

export const p2 = (input: string): Number => {
    const letterNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    return input
        .trim()
        .split("\n")
        .map(line => {
            return [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]
                .map(match => match[1])
                .map(match => isNumeric(match) ? Number(match) : letterNumbers.indexOf(match) + 1)
        })
        .map(data => new Number(`${data[0]}${data[data.length-1]}`))
        .reduce((acc, curr) => acc + curr, 0);
}

task(p2, 1, 2);
