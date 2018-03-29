import React from 'react'
import { Row, Col } from 'react-onsenui';
import '../index.css'
import Square from './Square'
import PropTypes from 'prop-types'

const Board = ({squares, onSquareClick}) => {
    const boardRows = []

    for (let i = 0; i < 3; i++) {
        const boardCols = []
        for (let j = 0; j < 3; j++) {
            let symbol = squares[i * 3 + j]
            boardCols.push(
                <Col>
                    <Square key={i + "-" + j} symbol={symbol} onClick={() => onSquareClick(i, j)}/>
                </Col>
            )
        }

        boardRows.push(
            <Row key={i.toString()} className="board-row">
                {boardCols}
            </Row>
        )
    }

    return boardRows;
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onSquareClick: PropTypes.func.isRequired
}

export default Board
