import { configureStore } from '@reduxjs/toolkit'
import gamesReducer from './gamesSlice'
import counterReducer from './counterSlice'
import activeGameReducer from './activeGameSlice'
import uiReducer from './uiSlice'
import searchGameReducer from './searchSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    games: gamesReducer,
    searchGames: searchGameReducer,
    activeGame: activeGameReducer,
    uiState: uiReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
