import React from 'react';
import TetrisGame from './components/TetrisGame';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tetris</h1>
      </header>
      <main>
        <TetrisGame />
      </main>
      <footer>
        <p>© 2024 Tetris Game. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;