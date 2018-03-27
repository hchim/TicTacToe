import React from 'react'
import '../index.css'
import Square from './Square'
import PropTypes from 'prop-types'

const Board = ({squares, onSquareClick}) => {
    const boardRows = []

    for (let i = 0; i < 3; i++) {
        const boardCols = []
        for (let j = 0; j < 3; j++) {
            let symbol = squares[i * 3 + j]
            boardCols.push(<Square key={i + "-" + j} symbol={symbol} onClick={() => onSquareClick(i, j)}/>)
        }

        boardRows.push(
            <div key={i.toString()} className="board-row">
                {boardCols}
            </div>
        )
    }

    return (
        <div className="game-board">
            {boardRows}
        </div>
    )
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onSquareClick: PropTypes.func.isRequired
}

export default Board
