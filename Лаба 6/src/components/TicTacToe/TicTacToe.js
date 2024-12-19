import React, { useState } from 'react';
import './TicTacToe.css'; 

const TicTacToe = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentBoard = history[currentMove];
    const isXNext = currentMove % 2 === 0;
    const winner = calculateWinner(currentBoard);

    const handleClick = (index) => {
        if (currentBoard[index] || winner) return; 
        const newBoard = currentBoard.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        const newHistory = [...history.slice(0, currentMove + 1), newBoard];
        setHistory(newHistory);
        setCurrentMove(newHistory.length - 1);
    };

    const handleRestart = () => {
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    };

    const jumpTo = (move) => {
        setCurrentMove(move);
    };

    const renderSquare = (index) => (
        <button className="square" onClick={() => handleClick(index)}>
            {currentBoard[index]}
        </button>
    );

    const moves = history.map((squares, move) => {
        const description = move ? `Перейти к ходу #${move}` : 'Перейти к началу игры';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="container">
            <div className="status">
                {winner ? `Победитель: ${winner}` : `Следующий ход: ${isXNext ? 'X' : 'O'}`}
            </div>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <button className="restart-button" onClick={handleRestart}>Играть заново</button>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default TicTacToe;
