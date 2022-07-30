import { configureStore } from '@reduxjs/toolkit'
import reducer from '../features/themes/themesSlice'

export const store = configureStore({
  reducer: {
    theme: reducer,
  },
})
