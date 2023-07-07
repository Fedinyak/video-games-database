/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable functional/no-return-void */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface uiState {
  isFetching: boolean
}

const initialState: uiState = {
  isFetching: false
  // isFetching: true
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    fetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload
      // state.isFetching = !state.isFetching
    }
  }
})

export const { fetching } = uiSlice.actions

export default uiSlice.reducer
