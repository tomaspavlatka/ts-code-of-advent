import { p2 } from './part_2';
import { getTestInput } from '../../utils/input';

describe('p2', () => {
    test('valid result', () => {
        expect(p2(getTestInput(4, 2))).toBe(30);
    })
});
