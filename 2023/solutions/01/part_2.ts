import { task } from "../../utils/task";

export const p2 = (input: string): number => {
    const letterNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    return input
        .trim()
        .split("\n")
        .map(line => {
            return [...line.matchAll(/(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g)]
                .map(match => match[1])
                .map(match => {
                    const index = letterNumbers.indexOf(match);

                    return index > -1 ? index + 1 : parseInt(match);
                })
        })
        .map(data => parseInt(`${data[0]}${data[data.length-1]}`))
        .reduce((acc, curr) => acc + curr, 0) || 0;
}

task(p2, 1, 2);
