export const p2 = (input: string): number => {
    let sum = 0;
    input.split("\n").forEach( line => {
        sum += parseNumber(line);
    });
    return sum;
}


const parseNumber = (input: string): number => {
    const matches = input.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g);
    if (!matches) {
        return 0;
    }

    return 10 * toNumber(matches[0]) + toNumber(matches[matches.length-1]);
}

const toNumber = (input: string): number => {
    let map = new Map<string, number>([
        ["one", 1],
        ["two", 2],
        ["three", 3],
        ["four", 4],
        ["five", 5],
        ["six", 6],
        ["seven", 7],
        ["eight", 8],
        ["nine", 9]
    ]);

    const value = map.get(input);

    return value != undefined ? value : Number(input);
}

