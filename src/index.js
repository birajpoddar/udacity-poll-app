import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import reducer from './reducers';
import middlewares from './middlewares';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

export const store = createStore(reducer, middlewares);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
