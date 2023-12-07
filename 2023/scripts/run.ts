import { getInput } from "../utils/input";

console.log("here");
export const day = process.argv[2];
const part = process.argv[3] || 1;

console.log(day);

if (!day) {
    console.log("Please provide a day");
    process.exit(1);
}

console.log("---------------- Running day", day, "part", part, "----------------");

import {handle} from `../solutions/${day}/${part}`;

console.log(
    handle(getInput(parseInt(day)))
)

