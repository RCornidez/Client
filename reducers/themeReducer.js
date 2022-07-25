import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: { value: true, },
	reducers: {
		toggle: (state) => { state.value = !state.value },
		},
	},
);

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer
