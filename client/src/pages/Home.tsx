import { useSnapshot } from 'valtio'
import state from '../state' 
import { openModalWithListener } from '../utilities'

const Home = () => {
  const snap = useSnapshot(state)

  const showControls = () => {
    state.modalContents = 'Controls'
    state.outro = false
    openModalWithListener()
  }

  const showScores = () => {
    state.modalContents = 'Scores'
    state.outro = false
    openModalWithListener()
  }

  const showPreGame = () => {
    state.modalContents = 'Pre Game'
    state.outro = false
    openModalWithListener()
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center home">
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className="text-8xl uppercase mb-10">Blocks</h1>
        <button className="button" onClick={showControls}>Controls</button>
        <button className="button" onClick={showPreGame}>Play</button>
        <button className="button" onClick={showScores}>Scores</button>
        <button className="button">Dark Mode</button>
      </div>
    </main>
  )
}

export default Home