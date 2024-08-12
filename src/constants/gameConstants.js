export const BOARD_WIDTH = 10;
export const BOARD_HEIGHT = 20;
export const TETROMINOS = {
  I: { shape: [[1, 1, 1, 1]], color: 'cyan' },
  O: { shape: [[1, 1], [1, 1]], color: 'yellow' },
  T: { shape: [[0, 1, 0], [1, 1, 1]], color: 'purple' },
  S: { shape: [[0, 1, 1], [1, 1, 0]], color: 'green' },
  Z: { shape: [[1, 1, 0], [0, 1, 1]], color: 'red' },
  J: { shape: [[1, 0, 0], [1, 1, 1]], color: 'blue' },
  L: { shape: [[0, 0, 1], [1, 1, 1]], color: 'orange' }
};
export const LEVEL_SPEED = {
  1: 800,
  2: 700,
  3: 600,
  4: 500,
  5: 400,
  6: 300,
  7: 200,
  8: 100,
  9: 50,
  10: 25
};