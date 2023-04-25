
import { Game, Home, Leaderboard } from './pages'
import { useSnapshot } from 'valtio'
import state from './state'
import Modal from './components/Modal'

function App() {
  const snap = useSnapshot(state)

  const gameInProgress = () => !snap.intro && !snap.outro

  return (
    <div className="App">
      <Modal />
      {snap.intro && <Home />}
      {gameInProgress() && <Game />}
      {snap.outro && <Leaderboard />}
    </div>
  )
}

export default App
