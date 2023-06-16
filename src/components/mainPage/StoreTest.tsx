/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
// Хуки находятся в react-redux
// import { useSelector, useDispatch } from 'react-redux'

// Импортируем нужные действия
import { decrement, increment, incrementByAmount } from '../../slices/counterSlice'
// import { type RootState } from '../../slices/store'

const StoreTest = () => {
  // Вытаскиваем данные из хранилища. state – все состояние
  // const count = useSelector((state: RootState) => state.counter.value)
  const count = useAppSelector((state) => state.counter.value)
  // Возвращает метод store.dispatch() текущего хранилища
  const dispatch = useAppDispatch()

  return (
    <div>
      <div>
        <button
          type="button"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Прибавить
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          type="button"
          onClick={() => dispatch(decrement())}
        >
          Отнять
        </button>
        <br />
        <button
          type="button"
          onClick={() => dispatch(incrementByAmount(42))}
        >
          Прибавить 42

        </button>
      </div>
    </div>
  )
}

export default StoreTest
