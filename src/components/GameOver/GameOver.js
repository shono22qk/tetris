import React from 'react';
import { Button } from '@/components/ui/button';
import './GameOver.css';

const GameOver = ({ score, onRestart }) => {
  return (
    <div className="game-over-overlay">
      <div className="game-over-modal">
        <h2>Game Over</h2>
        <p>Your score: {score}</p>
        <Button onClick={onRestart}>Play Again</Button>
      </div>
    </div>
  );
};

export default GameOver;