import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'

registerServiceWorker();

let store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
