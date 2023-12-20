import { task } from "../../utils/task";

export const p2 = (input: string): number => {

    const cards = new Map<number, number>();

    input.split("\n")
        .forEach((line, index) => {
            const [winningSet, mySet] = line.split(":")[1].split("|").map((n) => n.trim());
            // the puzzle contains usually 2 places for a number, 5 is not `5` but ` 5`
            const winningNumbers = winningSet.split(" ").map((n) => n.trim()).filter((n) => n.length > 0);
            const myWinners =  mySet
                .split(" ")
                .map((n) => n.trim())
                .filter((n) => winningNumbers.includes(n));

            cards.set(index, (cards.get(index) || 0) + 1);
            for (let i = 1; i <= myWinners.length; i++) {
                const idx = index + i;
                cards.set(idx, (cards.get(idx) || 0) + (cards.get(index) || 0));
            }
        })

    return Array.from(cards.values()).reduce((acc, n) => acc + n, 0);
}

task(p2, 4, 2);
