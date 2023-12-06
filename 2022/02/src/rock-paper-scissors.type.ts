export const enum Shape {
    ROCK = 1,
    PAPER = 2,
    SCISSOR = 3
}

export type ShapeKey = 'A' | 'B' | 'C';
export type StrategyResponse = 'X' | 'Y' | 'Z';

export type Strategy = [ShapeKey, StrategyResponse];

export const shapeKeyMap: Record<ShapeKey, Shape> = {
    A: Shape.ROCK,
    B: Shape.PAPER,
    C: Shape.SCISSOR
};

export const winningResponseMap: Record<Shape, Shape> = {
    [Shape.ROCK]: Shape.PAPER,
    [Shape.PAPER]: Shape.SCISSOR,
    [Shape.SCISSOR]: Shape.ROCK
}

export const loosingResponseMap: Record<Shape, Shape> = {
    [Shape.ROCK]: Shape.SCISSOR,
    [Shape.PAPER]: Shape.ROCK,
    [Shape.SCISSOR]: Shape.PAPER
}

export const enum Outcome {
    WIN = 6,
    LOOSE = 0,
    DRAW = 3
}

export const getOutcome = (opponentChoice: Shape, myChoice: Shape): Outcome => {
    if (winningResponseMap[opponentChoice] === myChoice) {
        return Outcome.WIN;
    } else if (loosingResponseMap[opponentChoice] === myChoice) {
        return Outcome.LOOSE;
    } else {
        return Outcome.DRAW;
    }
}
