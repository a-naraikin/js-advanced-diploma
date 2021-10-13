import Character from '../Character';
import Bowman from '../characters/Bowman';

test('should return error if user use "new Character()"', () => {
  const expected = 'Character should created through type';
  expect(() => new Character(1)).toThrow(expected);
});

test('should not return an error', () => {
  expect(() => new Bowman(1)).not.toThrow();
});
