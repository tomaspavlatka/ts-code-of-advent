import { task } from "../../utils/task";

export const p2 = (input: string): number => {
    let sum = 0;

    const lines = input.trim().split("\n");
    let prevLine = '';
    let nextLine = '';
    for (let i = 0; i < lines.length; i++) {

        prevLine = lines[i - 1] || '';
        nextLine = lines[i + 1] || '';

        [...lines[i].matchAll(/\*/g)].forEach(star => {
            let numbers = findSurroundingNumbers(star.index || 0, [prevLine, lines[i], nextLine]);
            if (numbers.length > 1) {
                sum += numbers.flat().reduce((a, b) => a * b, 1);
            }
        })

    }

    return sum;
}

const getNumberAtIndex = (str: string, index: number): number => {
    if (index < 0 || index >= str.length) {
        return NaN;
    }

    let startIndex = index;
	while (startIndex > 0 && /\d/.test(str[startIndex - 1])) startIndex--;

    let endIndex = index;
	while (endIndex < str.length && /\d/.test(str[endIndex + 1])) endIndex++;

    return parseInt(str.slice(startIndex, endIndex + 1));
}

const isDigit = (value: string): boolean => {
    return value !== undefined && value.match(/^\d$/g) !== null;
}

const findSurroundingNumbers = (index: number, lines: string[]): number[][] => {
    const charBeforeIndex = (str: string, index: number): string => 
        index === 0 ? '' : str[index - 1];
    
    const charAfterIndex = (str: string, index: number): string => 
        index < str.length-1 ? str[index + 1] : '';

    const firstLine = [
        isDigit(charBeforeIndex(lines[0], index)) ? index - 1 : -1,
        isDigit(lines[0].split('')[index]) ? index : -1,
        isDigit(charAfterIndex(lines[0], index)) ? index + 1 : -1,
    ]

    const middleLine = [
        isDigit(charBeforeIndex(lines[1], index)) ? index - 1 : -1,
        isDigit(charAfterIndex(lines[1], index)) ? index + 1 : -1,
    ]

    const afterLine = [
        isDigit(charBeforeIndex(lines[2], index)) ? index - 1 : -1,
        isDigit(lines[2].split('')[index]) ? index : -1,
        isDigit(charAfterIndex(lines[2], index)) ? index + 1 : -1,
    ]

    return ([firstLine, middleLine, afterLine])
        .map(line => line.filter(i => i !== -1))
        .map(line => line.filter((element, index) => !isConsecutive(line[index - 1] || NaN, element))) 
        .map((line, i) => line.map(index => getNumberAtIndex(lines[i], index)))
        .filter(line => line.length > 0);
}

const isConsecutive = (number1: number, number2: number): boolean => 
    number2 - number1 === 1

task(p2, 3, 2);
