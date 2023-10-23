import { readFile } from "./helpers";

const DAY = process.env["DAY"] ? Number(process.env["DAY"]) : undefined;

export const solvePartOne = (input: string) => {
    console.log(input);
}

const input = await readFile("input", Number(DAY));
console.log(solvePartOne(input));
