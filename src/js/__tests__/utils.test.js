import { calcTileType } from '../utils';

test.each([
  [0, 'top-left'],
  [5, 'top'],
  [7, 'top-right'],
  [16, 'left'],
  [30, 'center'],
  [23, 'right'],
  [56, 'bottom-left'],
  [60, 'bottom'],
  [63, 'bottom-right'],
])(
  ('should return correct value'),
  (index, expected) => {
    const reseived = calcTileType(index, 8);

    expect(reseived).toBe(expected);
  },
);
