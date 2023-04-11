import { useSnapshot } from 'valtio'
import state from '../state' 

const Home = () => {
  const snap = useSnapshot(state)

  const startGame = () => {
    state.intro = false
    state.score = 0
  }

  return (
    <main>
      <h1>Tetris</h1>
      <button onClick={startGame}>Start</button>
    </main>
  )
}

export default Home