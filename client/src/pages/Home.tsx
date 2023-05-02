import { useSnapshot } from 'valtio'
import { state } from '../state' 
import { openModalWithListener } from '../utilities'
import { modalContentsValues } from '../constants'

export const Home = () => {
  const snap = useSnapshot(state)

  const showControls = () => {
    if (snap.showModal) return
    state.modalContents = modalContentsValues.controls
    state.outro = false
    openModalWithListener()
  }

  const showScores = () => {
    if (snap.showModal) return
    state.pageContent = 'Scores'
  }

  const showPreGame = () => {
    if (snap.showModal) return
    state.modalContents = modalContentsValues.levelSelect
    state.outro = false
    openModalWithListener()
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center home">
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className="text-8xl uppercase mb-10">Blocks</h1>
        <button className="button" onClick={showPreGame}>Play</button>
        <button className="button" onClick={showControls}>Controls</button>
        <button className="button" onClick={showScores}>Scores</button>
        <button className="button">Dark Mode</button>
      </div>
    </main>
  )
}
