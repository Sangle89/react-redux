import React from 'react';
import ReactDOM from 'react-dom';
const { createStore } = require('redux');
import {Provider} from 'react-redux';
import HomePage from './components/HomePage';
import ComA from './components/ComA'

const defaultStore = {value: 10}
const reducer = (state = defaultStore, action) => {
	if(action.type === 'UP')  return {value: state.value + 1};
	if(action.type === 'DOWN') return {value: state.value-1};
	return state;
}
const store = createStore(reducer);
const myState = store.getState();
store.dispatch({type: 'UP'});
console.log(myState);
ReactDOM.render(
	<Provider store={store}>
		<ComA/>
	</Provider>,
	document.getElementById('myapp')
);