import { p2 } from './p2';
import * as fs from 'fs';

describe('p2', () => {
    test('should return 0 for empty input', () => {
        expect(p2('')).toBe(0);
    })

    test('should return 45_000 from the test file', () => {
        expect(p2(fs.readFileSync('./src/input.test', 'utf-8'))).toBe(45000);
    })
});
