import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from './themesSlice'

export function ThemeToggle() {
	const theme = useSelector((state) => state.theme.value)
	const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => dispatch(toggle())}>
          Theme Toggle
		</button>
    </div>
  )
}
