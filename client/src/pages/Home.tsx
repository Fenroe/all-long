import { useSnapshot } from 'valtio'
import { state } from '../state' 
import { openModalWithListener } from '../utilities'
import { modalContentsValues, pageContentsValues } from '../constants'
import { clearFocus } from '../utilities/clearFocus'

export const Home = () => {
  const snap = useSnapshot(state)

  const showControls = () => {
    state.modalContents = modalContentsValues.controls
    state.outro = false
    openModalWithListener()
  }

  const showScores = () => {
    state.pageContent = pageContentsValues.leaderboard
  }

  const showPreGame = () => {
    state.modalContents = modalContentsValues.levelSelect
    state.outro = false
    openModalWithListener()
  }

  const changeTheme = () => {
    state.darkMode = !snap.darkMode
    localStorage.setItem('theme', JSON.stringify(!snap.darkMode))
    clearFocus()
  }

  return (
    <main className={snap.darkMode ? "page-dark" : "page"}>
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className={snap.darkMode ? "app-title-dark" : "app-title"}>Blocks</h1>
        <button className={snap.darkMode ? "button-dark" : "button"} onClick={showPreGame}>Play</button>
        <button className={snap.darkMode ? "button-dark" : "button"} onClick={showControls}>Controls</button>
        <button className={snap.darkMode ? "button-dark" : "button"} onClick={showScores}>Scores</button>
        <button className={snap.darkMode ? "button-dark" : "button"} onClick={changeTheme}>{snap.darkMode ? "Light Mode" : "Dark Mode"}</button>
      </div>
    </main>
  )
}
