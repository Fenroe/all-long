import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../state' 

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <div>{snap.text}</div>
  )
}

export default Home