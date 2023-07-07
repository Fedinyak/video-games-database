/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface searchGamesState {
  id: number
  name: string
  background_image: string
}

export interface searchItemsState {
  items: searchGamesState[]
  itemsCount: number
  pageSize: number
  page: number
  searchWords: string
}

const initialState: searchItemsState = {
  items: [],
  itemsCount: 0,
  pageSize: 20,
  page: 1,
  searchWords: ''
}

const searchGamesSlice = createSlice({
  name: 'searchGames',
  initialState,
  reducers: {
    addSearchGames: (state, action: PayloadAction<searchGamesState[]>) => {
      state.items = action.payload
    },
    addSearchGamesCount: (state, action: PayloadAction<number>) => {
      state.itemsCount = action.payload
    },
    addActivePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    addSearchWord: (state, action: PayloadAction<string>) => {
      state.searchWords = action.payload
    }
  }
})
// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const {
  addSearchGames,
  addSearchGamesCount,
  addActivePage,
  addSearchWord
} = searchGamesSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default searchGamesSlice.reducer
