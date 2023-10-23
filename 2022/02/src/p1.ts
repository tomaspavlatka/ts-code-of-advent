import * as fs from 'fs';

export const p1 = (input: string): number => {
    const rounds = input.split(/\r?\n/);

    let score = 0;
    rounds.forEach((round: string) => {
        if (round.length !== 0) {
            const [elf, me] = round.split(' ');

            score += result(elf, me) + myHand(me);
        }
    });

    return score;
}

const myHand = (me: string): number => {
    switch (me) {
        case 'X':
            return 1;
        case 'Y':
            return 2;
        default:
            return 3;
    }
}

const result = (elf: string, me: string): number => {
    if (me === 'X') {
        switch (elf) {
            case 'A':
                return 3;
            case 'B':
                return 0;
            default:
                return 6;
        }
    } else if (me === 'Y') {
        switch (elf) {
            case 'A':
                return 6;
            case 'B':
                return 3;
            default:
                return 0;
        }
    } else {
        switch (elf) {
            case 'A':
                return 0;
            case 'B':
                return 6;
            default:
                return 3;
        }
    }
}

console.log(p1(fs.readFileSync('./src/input', 'utf8')));
