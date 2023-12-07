import { p1 } from './part_1';
import { getTestInput } from '../../utils/input';

describe('p1', () => {
    test('returns 0 for empty input', () => {
        expect(p1('')).toBe(0);
    })

    test('returns 142 for test input', () => {
        expect(p1(getTestInput(1, 1))).toBe(142);
    })
});
