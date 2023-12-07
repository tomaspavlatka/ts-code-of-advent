import { p1 } from './part_1';
import { getTestInput } from '../../utils/input';

describe('p1', () => {
    test('returns 8 for test input', () => {
        expect(p1(getTestInput(2, 1))).toBe(8);
    })
});
