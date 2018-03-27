import { connect } from 'react-redux'
import {moveStep} from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => {
    return {
        squares: state.ticTacToe.board
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSquareClick: (row, col) => {
            dispatch(moveStep(row, col))
        }
    }
}

const MoveOnBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default MoveOnBoard