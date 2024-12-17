// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer
    }
  })
}
