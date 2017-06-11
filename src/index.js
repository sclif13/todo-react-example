import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import createStore from './store/createStore';
import './normalize.css';
import './index.css';
import { Provider } from 'react-redux';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

