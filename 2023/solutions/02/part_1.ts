import { task } from "../../utils/task";

export const p1 = (input: string): number => {
    return input
        .trim()
        .split("\n")
        .map(line => { 
                const [game, rounds] = line.split(":");

                const valid = rounds
                    .trim()
                    .split(';')
                    .map(round => {
                        const map = new Map<string, number>();

                        round.trim().split(",").forEach(item => {
                            const [count, color] = item.trim().split(" ");
                            map.set(color, (map.get(color) || 0) + parseInt(count));
                        })

                        return map;
                    })
                    .map(map => {
                        return (map.get("red") || 0) <= 12 
                            && (map.get("green") || 0) <= 13
                            && (map.get("blue") || 0) <= 14;
                    });

                return valid.indexOf(false) > -1 ? 0 : parseInt(game.trim().split(" ")[1]);
        })
        .reduce((acc, curr) => acc + curr, 0) || 0;
}

task(p1, 2, 1);
