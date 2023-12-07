import { task } from "../../utils/task";

export const p2 = (input: string): number => {
    return input
        .trim()
        .split("\n")
        .map(line => { 
                const map = new Map<string, number>();

                line.split(":")[1]
                    .trim()
                    .split(';')
                    .map(round => {
                        round.trim().split(",").forEach(item => {
                            const [count, color] = item.trim().split(" ");
                            if ((map.get(color) || 0) < parseInt(count)) {
                                map.set(color, parseInt(count));
                            }
                        })

                        return map;
                    });

                let power = 1;
                map.forEach((value: number) => {
                    power *= value;
                });

                return power;
        })
        .reduce((acc, curr) => acc + curr, 0) || 0;
}

task(p2, 2, 2);
