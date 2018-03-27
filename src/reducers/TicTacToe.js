//TicTacToe Reducer
import {MOVE} from '../actions/actionTypes'

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

function calculateWinner(board) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

//the initial state of TicTacToe
let initialState = {
    board: new Array(9),
    winner: null,
    xIsNext: true
}

export default function ticTacToe(state = initialState, action) {
    switch (action.type) {
        case MOVE:
            //do nothing if game over
            if (state.winner) {
                return state;
            }

            let newBoard = state.board.slice()
            newBoard[action.row * 3 + action.col] = state.xIsNext ? 'X' : 'O'
            return {
                board: newBoard,
                winner: calculateWinner(newBoard),
                xIsNext: !state.xIsNext
            }
        default:
            return state
    }
}
