
import { Game, Home, Leaderboard } from './pages'
import { useEffect } from 'react'
import { useSnapshot } from 'valtio'
import { state } from './state'
import { Modal } from './components/Modal'
import { localStorageKeys, pageContentsValues } from './constants'

function App() {
  const snap = useSnapshot(state)

  const renderPageContents = () => {
    switch(snap.pageContent) {
      case pageContentsValues.home:
        return <Home />
      case pageContentsValues.game:
        return <Game />
      case pageContentsValues.leaderboard:
        return <Leaderboard />
      default:
        return <Home />
    }
  }
  useEffect(() => {
    const locallyStoredScores = localStorage.getItem(localStorageKeys.localScores)
    state.localScores = locallyStoredScores ? JSON.parse(locallyStoredScores) : []
    const locallySavedDarkMode = localStorage.getItem('theme')
    if (locallySavedDarkMode) {
      state.darkMode = JSON.parse(locallySavedDarkMode)
    } else {
      state.darkMode = window.matchMedia('prefers-color-scheme: dark').matches
    }
  }, [])
  return (
    <div className="container">
      <Modal />
      {renderPageContents()}
    </div>
  )
}

export default App
