import { getInput } from "./input";

export const task = (callback: (input: string) => number, day: number, part: number): void => {
    console.log(`[Day:${day}, Part:${part}]:`, callback(getInput(day)));
}
