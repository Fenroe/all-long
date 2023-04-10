import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../state' 

const Home = () => {
  const snap = useSnapshot(state)

  return (
    <div>
      <button onClick={() => state.gamePaused = !snap.gamePaused}>{snap.gamePaused ? 'Play' : 'Pause' }</button>
    </div>
  )
}

export default Home