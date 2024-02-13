import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementAction, incrementAction } from '../store/actions/counter.actions'

function Dashboard() {

  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (<>
    <h1>Dashboard</h1>
    <hr />
    <h2>Counter: {counter}</h2>
    <button onClick={() => dispatch(incrementAction())}>+</button>
    <button onClick={() => dispatch(decrementAction())}>-</button>
  </>
  )
}

export default Dashboard

//useselect hook ile global state i alıyoruz.


