import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserAction } from '../store/actions/user.actions'

function About() {

  const user = useSelector(state => state.user)
  let dispatch = useDispatch()

  return (<>
    <h1>About</h1>
    <p>Merhaba, ben {user.email}</p>
    <button onClick={() => dispatch(updateUserAction())} >Update</button>
  </>
  )
}

export default About