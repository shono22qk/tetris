import React from 'react';
import { TETROMINOS } from '../../constants/gameConstants';
import './Board.css';

const Board = ({ board, currentPiece }) => {
  const renderCell = (cell, x, y) => {
    const isCurrent = currentPiece &&
      x >= currentPiece.x &&
      x < currentPiece.x + currentPiece.shape[0].length &&
      y >= currentPiece.y &&
      y < currentPiece.y + currentPiece.shape.length &&
      currentPiece.shape[y - currentPiece.y][x - currentPiece.x] !== 0;

    const cellColor = isCurrent ? currentPiece.color : TETROMINOS[cell]?.color || 'transparent';

    return (
      <div
        key={`${y}-${x}`}
        className={`cell ${cellColor}`}
      />
    );
  };

  return (
    <div className="board">
      {board.map((row, y) => (
        <div key={y} className="row">
          {row.map((cell, x) => renderCell(cell, x, y))}
        </div>
      ))}
    </div>
  );
};

export default Board;