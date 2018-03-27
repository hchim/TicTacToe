import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import ticTacToeApp from './reducers'

//registerServiceWorker();

let store = createStore(ticTacToeApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
