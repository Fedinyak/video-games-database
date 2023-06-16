import { configureStore } from '@reduxjs/toolkit'
// import gamesListReducer from "./gamesList";
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer
    // gamesList: gamesListReducer,
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
