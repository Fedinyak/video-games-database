/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface gamesType {
  id: number
  name: string
  background_image: string
}

export interface listsType {
  id: number
  name: string
  slug: string
  games_count: number
  image_background: string
}

export interface itemsState {
  items: gamesType[]
  itemsForInfinityScroll: gamesType[]
  itemsCount: number
  pageSize: number
  page: number
  infinityPageScroll: number
  order: string
  platformsList: listsType[]
  platforms: string[]
  publishersList: listsType[]
  publishers: string[]
  genresList: listsType[]
  genres: string[]
}

const initialState: itemsState = {
  items: [],
  itemsForInfinityScroll: [],
  itemsCount: 0,
  pageSize: 0,
  page: 1,
  infinityPageScroll: 1,
  order: '',
  platformsList: [],
  platforms: [],
  publishersList: [],
  publishers: [],
  genresList: [],
  genres: []
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGames: (state, action: PayloadAction<gamesType[]>) => {
      state.items = action.payload
    },
    addMoreGames: (state, action: PayloadAction<gamesType[]>) => {
      state.itemsForInfinityScroll = action.payload
    },
    addGamesCount: (state, action: PayloadAction<number>) => {
      state.itemsCount = action.payload
    },
    addInfinityPageScroll: (state, action: PayloadAction<number>) => {
      state.infinityPageScroll = action.payload
    },
    addActivePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    addOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload
    },
    addPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
    },
    addPlatformsList: (state, action: PayloadAction<listsType[]>) => {
      state.platformsList = action.payload
    },
    addPlatforms: (state, action: PayloadAction<string[]>) => {
      state.platforms = [...action.payload]
    },
    addPublishersList: (state, action: PayloadAction<listsType[]>) => {
      state.publishersList = action.payload
    },
    addPublishers: (state, action: PayloadAction<string[]>) => {
      state.publishers = [...action.payload]
    },
    addGenresList: (state, action: PayloadAction<listsType[]>) => {
      state.genresList = action.payload
    },
    addGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = [...action.payload]
    }
  }
})

export const {
  addGames,
  addMoreGames,
  addGamesCount,
  addActivePage,
  addInfinityPageScroll,
  addOrder,
  addPageSize,
  addPlatformsList,
  addPlatforms,
  addPublishersList,
  addPublishers,
  addGenresList,
  addGenres
} = gamesSlice.actions

export default gamesSlice.reducer
