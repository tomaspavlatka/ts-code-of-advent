"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.p1 = void 0;
const p1 = (input) => {
    let sum = 0;
    input.split("\n").forEach(line => {
        const matches = line.match(/\d/g);
        if (matches) {
            sum += 10 * Number(matches[0]) + Number(matches[matches.length - 1]);
        }
    });
    return sum;
};
exports.p1 = p1;
