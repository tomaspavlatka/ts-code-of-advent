"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handle = void 0;
const handle = (input) => {
    let sum = 0;
    input.split("\n").forEach(line => {
        const matches = line.match(/\d/g);
        if (matches) {
            sum += 10 * Number(matches[0]) + Number(matches[matches.length - 1]);
        }
    });
    return sum;
};
exports.handle = handle;
