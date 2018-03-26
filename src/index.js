import React from 'react';
import ReactDOM from 'react-dom';
import Game from './App';
import registerServiceWorker from './registerServiceWorker';

registerServiceWorker();

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
