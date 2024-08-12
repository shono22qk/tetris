import { useState, useCallback, useEffect } from 'react';
import { BOARD_WIDTH, TETROMINOS, LEVEL_SPEED } from '../constants/gameConstants';
import { createEmptyBoard, isColliding, addPieceToBoard, clearLines } from '../utils/boardUtils';

const useGameLogic = () => {
  const [board, setBoard] = useState(createEmptyBoard());
  const [currentPiece, setCurrentPiece] = useState(null);
  const [nextPiece, setNextPiece] = useState(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const spawnNewPiece = useCallback(() => {
    const pieceTypes = Object.keys(TETROMINOS);
    const randomType = pieceTypes[Math.floor(Math.random() * pieceTypes.length)];
    const newPiece = {
      type: randomType,
      shape: TETROMINOS[randomType].shape,
      color: TETROMINOS[randomType].color,
      x: Math.floor(BOARD_WIDTH / 2) - Math.floor(TETROMINOS[randomType].shape[0].length / 2),
      y: 0
    };

    if (isColliding(board, newPiece, newPiece.shape)) {
      setGameOver(true);
    } else {
      setCurrentPiece(newPiece);
      setNextPiece(getRandomPiece());
    }
  }, [board]);

  const moveHorizontal = useCallback((dir) => {
    if (!currentPiece || gameOver) return;
    const movedPiece = { ...currentPiece, x: currentPiece.x + dir };
    if (!isColliding(board, movedPiece, movedPiece.shape)) {
      setCurrentPiece(movedPiece);
    }
  }, [board, currentPiece, gameOver]);

  const rotate = useCallback(() => {
    if (!currentPiece || gameOver) return;
    const rotatedShape = currentPiece.shape[0].map((_, index) =>
      currentPiece.shape.map(row => row[index]).reverse()
    );
    const rotatedPiece = { ...currentPiece, shape: rotatedShape };
    if (!isColliding(board, rotatedPiece, rotatedPiece.shape)) {
      setCurrentPiece(rotatedPiece);
    }
  }, [board, currentPiece, gameOver]);

  const moveDown = useCallback(() => {
    if (!currentPiece || gameOver) return;
    const movedPiece = { ...currentPiece, y: currentPiece.y + 1 };
    if (!isColliding(board, movedPiece, movedPiece.shape)) {
      setCurrentPiece(movedPiece);
    } else {
      const newBoard = addPieceToBoard(board, currentPiece);
      const { newBoard: clearedBoard, linesCleared } = clearLines(newBoard);
      setBoard(clearedBoard);
      setScore(prevScore => prevScore + linesCleared * 100 * level);
      setLevel(prevLevel => Math.floor(score / 1000) + 1);
      spawnNewPiece();
    }
  }, [board, currentPiece, gameOver, level, score, spawnNewPiece]);

  const hardDrop = useCallback(() => {
    if (!currentPiece || gameOver) return;
    let newY = currentPiece.y;
    while (!isColliding(board, { ...currentPiece, y: newY + 1 }, currentPiece.shape)) {
      newY++;
    }
    setCurrentPiece({ ...currentPiece, y: newY });
    moveDown();
  }, [board, currentPiece, gameOver, moveDown]);

  const resetGame = useCallback(() => {
    setBoard(createEmptyBoard());
    setCurrentPiece(null);
    setNextPiece(null);
    setScore(0);
    setLevel(1);
    setGameOver(false);
    spawnNewPiece();
  }, [spawnNewPiece]);

  useEffect(() => {
    if (!currentPiece && !gameOver) {
      spawnNewPiece();
    }
  }, [currentPiece, gameOver, spawnNewPiece]);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      moveDown();
    }, LEVEL_SPEED[level]);

    return () => {
      clearInterval(gameLoop);
    };
  }, [level, moveDown]);

  return {
    board,
    currentPiece,
    nextPiece,
    score,
    level,
    gameOver,
    moveHorizontal,
    rotate,
    moveDown,
    hardDrop,
    resetGame
  };
};

export default useGameLogic;