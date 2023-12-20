import { p1 } from './part_1';
import { getTestInput } from '../../utils/input';

describe('p1', () => {
    test('valid result', () => {
        expect(p1(getTestInput(4, 1))).toBe(13);
    })
});
