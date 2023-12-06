import * as fs from 'fs';
import { p2 } from "./p2";

describe('p2', () => {
    test('returns 0 for empty input', () => {
        expect(p2('')).toBe(0);
    })

    test('returns 281 for test input', () => {
        expect(p2(fs.readFileSync('./data/p2.test', 'utf8'))).toBe(281);
    })
});
