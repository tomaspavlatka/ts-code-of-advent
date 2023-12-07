"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.day = void 0;
const _1_1 = require("../solutions/1/1");
const input_1 = require("../utils/input");
console.log("here");
exports.day = process.argv[2];
const part = process.argv[3] || 1;
console.log(exports.day);
if (!exports.day) {
    console.log("Please provide a day");
    process.exit(1);
}
console.log("---------------- Running day", exports.day, "part", part, "----------------");
console.log((0, _1_1.handle)((0, input_1.getInput)(parseInt(exports.day))));
