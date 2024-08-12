import { BOARD_WIDTH, BOARD_HEIGHT } from '../constants/gameConstants';

export const createEmptyBoard = () =>
  Array.from({ length: BOARD_HEIGHT }, () => Array(BOARD_WIDTH).fill(0));

export const isColliding = (board, position, shape) => {
  for (let y = 0; y < shape.length; y++) {
    for (let x = 0; x < shape[y].length; x++) {
      if (shape[y][x] !== 0) {
        const newY = y + position.y;
        const newX = x + position.x;
        if (
          newY < 0 || newY >= BOARD_HEIGHT ||
          newX < 0 || newX >= BOARD_WIDTH ||
          board[newY][newX] !== 0
        ) {
          return true;
        }
      }
    }
  }
  return false;
};

export const addPieceToBoard = (board, piece) => {
  const newBoard = board.map(row => [...row]);
  piece.shape.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        newBoard[y + piece.y][x + piece.x] = piece.type;
      }
    });
  });
  return newBoard;
};

export const clearLines = (board) => {
  let linesCleared = 0;
  const newBoard = board.filter(row => {
    if (row.every(cell => cell !== 0)) {
      linesCleared++;
      return false;
    }
    return true;
  });

  while (newBoard.length < BOARD_HEIGHT) {
    newBoard.unshift(Array(BOARD_WIDTH).fill(0));
  }

  return { newBoard, linesCleared };
};