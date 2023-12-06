import * as fs from 'fs';
import { p1 } from "./p1";

describe('p1', () => {
    test('returns 0 for empty input', () => {
        expect(p1('')).toBe(0);
    })

    test('returns 142 for test input', () => {
        expect(p1(fs.readFileSync('./data/p1.test', 'utf8'))).toBe(142);
    })
});
