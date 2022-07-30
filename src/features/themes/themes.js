import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function ThemeToggle() {
  const toggle = useSelector((state) => state.theme.value)
  const dispatch = useDispatch()

  return (
    <div>
        <button
          aria-label="toggle value"
          onClick={() => dispatch(toggle())}
        >
          Toggle Theme
        </button>
        <span>{count}</span>
    </div>
  )
}
