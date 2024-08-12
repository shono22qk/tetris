import moveSound from '../assets/sounds/move.mp3';
import rotateSound from '../assets/sounds/rotate.mp3';
import dropSound from '../assets/sounds/drop.mp3';
import clearLineSound from '../assets/sounds/clear-line.mp3';
import gameOverSound from '../assets/sounds/game-over.mp3';

const sounds = {
  move: new Audio(moveSound),
  rotate: new Audio(rotateSound),
  drop: new Audio(dropSound),
  clearLine: new Audio(clearLineSound),
  gameOver: new Audio(gameOverSound)
};

export const playSound = (soundName) => {
  sounds[soundName].currentTime = 0;
  sounds[soundName].play();
};