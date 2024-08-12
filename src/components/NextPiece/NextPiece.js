import React from 'react';
import { TETROMINOS } from '../../constants/gameConstants';
import './NextPiece.css';

const NextPiece = ({ piece }) => {
  if (!piece) return null;

  const renderCell = (value) => (
    <div className={`next-cell ${value ? piece.color : ''}`} />
  );

  return (
    <div className="next-piece">
      <h3>Next Piece</h3>
      <div className="next-piece-grid">
        {piece.shape.map((row, y) => (
          <div key={y} className="next-row">
            {row.map((cell, x) => (
              <React.Fragment key={x}>
                {renderCell(cell)}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextPiece;