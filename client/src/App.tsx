
import { Game, Home } from './pages'
import { useSnapshot } from 'valtio'
import state from './state'
import Modal from './components/Modal'

function App() {
  const snap = useSnapshot(state)

  return (
    <div className="App">
      <Modal />
      {snap.intro && <Home />}
      {!snap.intro && <Game />}
    </div>
  )
}

export default App
