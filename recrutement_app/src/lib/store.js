// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import dataReducer from './slices/dataSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer
    }
  })
}
