import * as fs from 'fs';

export const p2 = (input: string): number => {
    const rounds = input.split(/\r?\n/);

    let score = 0;
    rounds.forEach((round: string) => {
        if (round.length !== 0) {
            const [elf, me] = round.split(' ');

            const myOption = mapping(me, elf);
            score += result(elf, myOption) + myHand(myOption);
        }
    });

    return score;
}

const mapping = (me: string, elf: string): string => {
    if (me === 'X') {
        switch (elf) {
            case 'A':
                return 'Z';
            case 'B':
                return 'X';
            default:
                return 'Y';
        }
    } else if (me === 'Y') {
        switch (elf) {
            case 'A':
                return 'X';
            case 'B':
                return 'Y';
            default:
                return 'Z';
        }
    } else {
        switch (elf) {
            case 'A':
                return 'Y';
            case 'B':
                return 'Z';
            default:
                return 'X';
        }
    }
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

console.log(p2(fs.readFileSync('./src/input', 'utf8')));
