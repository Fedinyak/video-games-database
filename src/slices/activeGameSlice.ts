/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type listsType } from './gamesSlice'

export interface activeGamesState {
  id: number
  name: string
  image: string
  description: string
  metacritic: number
  released: string
  website: string
  rating: number
  playtime: number
  platforms: [
    {
      platform: listsType
    },
  ]
  genres: listsType[]
  publishers: listsType[]
  // stores: [
  //   {
  //     id: number
  //     url: string
  //     store: {
  //       id: number
  //       name: string
  //       slug: string
  //       domain: string
  //       games_count: number
  //       image_background: string
  //     }
  //   }
  // ]
}

export interface screenshotsState {
  id: number
  image: string
}

export interface itemsState {
  item: activeGamesState | null
  screenshots: screenshotsState[] | null
}

const initialState: itemsState = {
  item: null,
  screenshots: null
}

const activeGameSlice = createSlice({
  name: 'activeGame',
  initialState,
  reducers: {
    addActiveGame: (state, action: PayloadAction<activeGamesState | null>) => {
      console.log(action.payload, 'action.item')
      state.item = action.payload
    },
    addScreenshots: (state, action: PayloadAction<screenshotsState[]>) => {
      state.screenshots = action.payload
    }
  }
})

export const { addActiveGame, addScreenshots } = activeGameSlice.actions

export default activeGameSlice.reducer
