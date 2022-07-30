import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../features/themes/themesSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})
