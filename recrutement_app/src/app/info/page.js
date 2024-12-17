'use client'

import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../lib/slices/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.data)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Count: {count[0].cvFile.name}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}
