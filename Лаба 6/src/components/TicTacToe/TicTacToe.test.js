// src/components/TicTacToe/TicTacToe.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TicTacToe from './TicTacToe';

test('renders Tic Tac Toe game', () => {
    render(<TicTacToe />);
    expect(screen.getByText(/Next player:/i)).toBeInTheDocument();
});

test('allows players to take turns', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');

    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent('X');

    fireEvent.click(squares[1]);
    expect(squares[1]).toHaveTextContent('O');
});

test('displays winner when game is won', () => {
    render(<TicTacToe />);
    const squares = screen.getAllByRole('button');

    fireEvent.click(squares[0]); // X
    fireEvent.click(squares[1]); // O
    fireEvent.click(squares[3]); // X
    fireEvent.click(squares[4]); // O
    fireEvent.click(squares[6]); // X (X wins)

    expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
});
