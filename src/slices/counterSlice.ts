/* eslint-disable functional/prefer-immutable-types */
/* eslint-disable no-param-reassign */
/* eslint-disable functional/no-expression-statements */
/* eslint-disable functional/no-return-void */
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// Начальное значение
export interface CounterState {
  value: number
}
const initialState: CounterState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Редьюсеры в слайсах мутируют состояние и ничего не возвращают наружу
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // пример с данными
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})
// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default counterSlice.reducer
