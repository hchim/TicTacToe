import React from 'react';
import '../index.css';
import UpdateStatus from '../containers/UpdateStatus';
import MoveOnBoard from '../containers/MoveOnBoard';

const App = () => (
    <div className="game">
        <MoveOnBoard />
        <div className="game-info">
            <UpdateStatus />
        </div>
    </div>
)

export default App