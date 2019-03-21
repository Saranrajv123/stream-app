import React from 'react';
import App from './components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from  './reducers';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
         <App />
    </Provider>,
    document.getElementById('root')
)