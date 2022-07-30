import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle(state) {
		state.value = !state.value
    },
  },
})

// Action creators are generated for each case reducer function
const { actions, reducer } = themeSlice

export const { toggle } = actions

export default reducer
