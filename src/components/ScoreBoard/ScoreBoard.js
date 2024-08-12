import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ score, level }) => {
  return (
    <div className="score-board">
      <div className="score">
        <h3>Score</h3>
        <p>{score}</p>
      </div>
      <div className="level">
        <h3>Level</h3>
        <p>{level}</p>
      </div>
    </div>
  );
};

export default ScoreBoard;