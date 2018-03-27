import { connect } from 'react-redux'
import StatusLabel from '../components/StatusLabel'

function getNewStatus(winner, xIsNext) {
    if (winner) {
        return 'Winner is ' + winner
    }

    return 'Next player: ' + (xIsNext ? 'X' : 'O')
}

const mapStateToProps = state => {
    return {
        status: getNewStatus(state.ticTacToe.winner, state.ticTacToe.xIsNext)
    }
}

const UpdateStatus = connect(
    mapStateToProps
)(StatusLabel)

export default UpdateStatus