import { task } from "../../utils/task";

export const p1 = (input: string): number => {

    let sum = 0;

    const lines = input.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        [...lines[i].matchAll(/\d+/g)].filter(match => {
            return hasSymbolNearby(lines, i, (match.index || 0));
        }).forEach(match => sum += parseInt(match[0]));
    }
    
    return sum;
}

const isSymbol = (char: string): boolean => {
    return !isDigit(char) && char !== '.';
}

const isDigit = (value: string): boolean => {
    return value !== undefined && value.match(/^\d$/g) !== null;
}

const hasSymbolNearby = (lines: string[], lineIndex: number, index: number): boolean => {
    // Left
    if (index > 0 && isSymbol(lines[lineIndex][index-1])) {
        return true;
    } 

    // Right
    if (index < lines[lineIndex].length-1) {
        const right = lines[lineIndex][index+1];

        if (isSymbol(right)) return true;

        if (isDigit(right) && hasSymbolNearby(lines, lineIndex, index+1)) return true;
    }

    // Above 
    if (lineIndex > 0) {
        const above = lines[lineIndex-1][index];
        if (isSymbol(above)) return true;

        if (index > 0) {
            const aboveLeft = lines[lineIndex-1][index-1];
            if (isSymbol(aboveLeft)) return true;
        }

        if (index < lines[lineIndex].length-1) {
            const aboveRight = lines[lineIndex-1][index+1];
            if (isSymbol(aboveRight)) return true;
        }
    }

    // Below
    if (lineIndex < lines.length - 1) {
        const below = lines[lineIndex+1][index];
        if (isSymbol(below)) return true;

        if (index > 0) {
            const belowLeft = lines[lineIndex+1][index-1];
            if (isSymbol(belowLeft)) return true;
        }

        if (index < lines[lineIndex].length-1) {
            const belowRight = lines[lineIndex+1][index+1];
            if (isSymbol(belowRight)) return true;
        }
    }

    return false;
}

task(p1, 3, 1);
