
import { Game, Home } from './pages'
import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import state from './state'
import Modal from './components/Modal'

function App() {
  const snap = useSnapshot(state)

  useEffect(() => {
    const locallyStoredScores = localStorage.getItem('localScores')
    if (locallyStoredScores) {
      state.localScores = JSON.parse(locallyStoredScores)
    } else {
      state.localScores = []
    }
    
  }, [])
  return (
    <div className="App">
      <Modal />
      {snap.intro && <Home />}
      {!snap.intro && <Game />}
    </div>
  )
}

export default App
