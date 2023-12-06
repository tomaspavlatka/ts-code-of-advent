import * as fs from 'fs';
import { Shape, getOutcome, shapeKeyMap, type Strategy, type StrategyResponse } from './rock-paper-scissors.type';

export const p1 = (input: string): number => {
    const rounds = input.split(/\r?\n/);

    let score = 0;
    rounds.forEach((round: string) => {
        if (round.length !== 0) {
            const choices = round.split(' ');

            console.log(choices);
        }
    });

    return score;
}

