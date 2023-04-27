import { dayNameToPrefix } from '../index';

test('Day Prefix', () => {
  expect(dayNameToPrefix('MONDAY')).toBe('M');
});