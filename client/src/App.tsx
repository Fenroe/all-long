import { Game, Home, Leaderboard } from './pages'
import { useSnapshot } from 'valtio'
import state from './state'

function App() {
  const snap = useSnapshot(state)

  const gameInProgress = () => !snap.intro && !snap.outro

  return (
    <div className="App">
      {snap.intro && <Home />}
      {gameInProgress() && <Game />}
      {snap.outro && <Leaderboard />}
    </div>
  )
}

export default App
