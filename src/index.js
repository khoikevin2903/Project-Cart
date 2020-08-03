import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import appReducer from './Reducers/index';
import { Provider } from 'react-redux'

const store = createStore(
	appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
