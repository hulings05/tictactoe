// App.js
import React, { useState } from 'react';
import './App.css';
import Board from './Board';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }

  const renderStatus = () => {
    const winner = calculateWinner(board);
    if (winner) {
      return `Winner: ${winner}`;
    } else if (board.every((square) => square !== null)) {
      return 'Draw';
    } else {
      return `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }
  }

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      <div className="status">{renderStatus()}</div>
      <button className="restart" onClick={resetGame}>Restart</button>
    </div>
  );
}

export default App;
