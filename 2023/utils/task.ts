import { getInput } from "./input";

export const task = (callback: Function, day: number, part: number): void => {
    console.log(`[Day:${day}, Part:${part}]:`, callback(getInput(day)));
}
