// store.js
import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './slices/dataSlice'
//creation du store a chaque appelation et liaison de ces store au slice data
export const makeStore = () => {
  return configureStore({
    reducer: {
      data: dataReducer
    }
  })
}
