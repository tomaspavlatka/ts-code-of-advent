import { task } from "../../utils/task";

export const p1 = (input: string): number => {
    return input.split("\n")
        .map((line) => {
            const [winning, mine] = line.split(":")[1].split("|").map((n) => n.trim());
            // the puzzle contains usually 2 places for a number, 5 is not `5` but ` 5`
            const winningNumbers = winning.split(" ").map((n) => n.trim()).filter((n) => n.length > 0);

            return mine
                .split(" ")
                .map((n) => n.trim())
                .filter((n) => winningNumbers.includes(n))
                .map((n) => {console.log(n); return n})
                .reduce((acc) => acc === 0 ? 1 : acc * 2, 0);
        })
        .reduce((acc, n) => acc + n, 0);
}

task(p1, 4, 1);
