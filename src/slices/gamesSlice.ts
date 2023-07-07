/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface gamesState {
  id: number
  name: string
  background_image: string
}

export interface itemsState {
  items: gamesState[]
  itemsCount: number
  pageSize: number
  page: number
  order: string
}

const initialState: itemsState = {
  items: [],
  itemsCount: 0,
  pageSize: 20,
  page: 1,
  order: ''
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGames: (state, action: PayloadAction<gamesState[]>) => {
      // state.id = action.payload.id
      // state.name = action.payload.name
      // state.background_image = action.payload.background_image
      console.log(action.payload, 'action.payloaddddddd')
      state.items = action.payload
      // state.items = [state.items, ...action.payload]
      // state = 'action.payload'
    },
    addGamesCount: (state, action: PayloadAction<number>) => {
      state.itemsCount = action.payload
    },
    addActivePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    addOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload
    }
    // gamesTest: (state) => {
    //   state.value += 'dfdfdfdf'
    // }
  }
})
// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { addGames, addGamesCount, addActivePage, addOrder } = gamesSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default gamesSlice.reducer
// const gamesSlice = createSlice({
//   name: 'games',
//   initialState,
//   reducers: {
//     addGames: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     }
//   }
// })

// /* eslint-disable functional/prefer-immutable-types */
// /* eslint-disable no-param-reassign */
// /* eslint-disable functional/no-expression-statements */
// /* eslint-disable functional/no-return-void */
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

// export interface itemsState {
//   items: Array<{
//     id: number
//     name: string
//     background_image: string
//   }>
// }

// const initialState: itemsState = {
//   items: [
//   ]
// }

// const gamesSlice = createSlice({
//   name: 'games',
//   initialState,
//   reducers: {
//     addGames: (state, action: PayloadAction<itemsState>) => {
//       // state.id = action.payload.id
//       // state.name = action.payload.name
//       // state.background_image = action.payload.background_image
//       console.log(action.payload, 'action.payloaddddddd')
//       state.items = action.payload
//       // state.items = [state.items, ...action.payload]
//       // state = 'action.payload'
//     }
//     // gamesTest: (state) => {
//     //   state.value += 'dfdfdfdf'
//     // }
//   }
// })
// // Слайс генерирует действия, которые экспортируются отдельно
// // Действия генерируются автоматически из имен ключей редьюсеров
// export const { addGames } = gamesSlice.actions

// // По умолчанию экспортируется редьюсер, сгенерированный слайсом
// export default gamesSlice.reducer
// // const gamesSlice = createSlice({
// //   name: 'games',
// //   initialState,
// //   reducers: {
// //     addGames: (state, action: PayloadAction<number>) => {
// //       state.value += action.payload
// //     }
// //   }
// // })
