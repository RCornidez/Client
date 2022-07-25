import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './themeReducer.js';


export default configureStore({
	  reducer: {
		theme: themeSlice.reducer,
	  },
})
