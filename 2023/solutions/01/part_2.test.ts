import { p2 } from "./part_2";
import { getTestInput } from '../../utils/input';

describe('p2', () => {
    test('returns 0 for empty input', () => {
        expect(p2('')).toBe(0);
    })

    test('returns 281 for test input', () => {
        expect(p2(getTestInput(1, 2))).toBe(281);
    })
});
