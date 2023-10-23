import { p1 } from './p1';
import * as fs from 'fs';

describe('p1', () => {
    test('should return 0 for empty input', () => {
        expect(p1('')).toBe(0);
    })

    test('should return 15 from the test file', () => {
        expect(p1(fs.readFileSync('./src/input.test', 'utf-8'))).toBe(15);
    })
});
