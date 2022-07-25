//Reducer

import { createStore } from 'redux';

function changeStatus (state = { value: false }, action) {
	switch (action.type) {
		case 'VISIBLE' :
			return { value: true }
		case 'INVISIBLE' :
			return { value: false }
		default:
			return state

	}
}

const store = createStore(changeStatus)

export default store;

// Dispatches
//store.dispatch({ type: 'VISIBLE'})



// Get State
//store.getState()
