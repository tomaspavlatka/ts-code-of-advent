"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p2 = void 0;
const p2 = (input) => {
    let sum = 0;
    input.split("\n").forEach(line => {
        sum += parseNumber(line);
    });
    return sum;
};
exports.p2 = p2;
const parseNumber = (input) => {
    const matches = input.match(/(\d|one|two|three|four|five|six|seven|eight|nine)/g);
    if (!matches) {
        return 0;
    }
    return 10 * toNumber(matches[0]) + toNumber(matches[matches.length - 1]);
};
const toNumber = (input) => {
    let map = new Map([
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
};
