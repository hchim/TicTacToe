import { connect } from 'react-redux'
import StatusLabel from '../components/StatusLabel'

function getNewStatus(winner, xIsNext, steps) {
    if (winner) {
        return 'Winner is ' + winner
    } else if (steps === 9) {
        return 'Nobody wins.'
    }

    return 'Next player: ' + (xIsNext ? 'X' : 'O')
}

const mapStateToProps = state => {
    return {
        status: getNewStatus(state.gameReducer.winner, state.gameReducer.xIsNext, state.gameReducer.steps)
    }
}

const UpdateStatus = connect(
    mapStateToProps
)(StatusLabel)

export default UpdateStatus