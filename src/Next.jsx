import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { increment ,decrement } from './actions/index'
function Next() {
  const myData=useSelector((state)=>state.handleCounter)
  const dispatch = useDispatch()
  return (
  <>
  <h1>your value is {myData}</h1>
  <button onClick={() => dispatch(increment())}>inc</button>
  <button onClick={() => dispatch(decrement())}>dec</button>
  </>
  )
}

export default Next