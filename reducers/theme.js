import { createStore } from 'redux';

//Redux reducers (actions to adjust state)
const reducer = (state = true, action) => {
	  if (action.type === 'TOGGLE') {
		  return !state;
	  }
	return state;
};

export const store = createStore(reducer);

store.subscribe(() => {
	  console.log('current state', store.getState());
});

//How to call the reducer
//store.dispatch({
//	  type: 'TOGGLE'
//});
