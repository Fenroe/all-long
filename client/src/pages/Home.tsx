import { useSnapshot } from 'valtio'
import state from '../state' 
import { openModalWithListener, startGame } from '../utilities'

const Home = () => {
  const snap = useSnapshot(state)

  const showControls = () => {
    state.modalContents = 'Controls'
    openModalWithListener()
  }

  const showScores = () => {
    state.modalContents = 'Scores'
    openModalWithListener()
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center home">
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className="text-8xl uppercase mb-10">Blocks</h1>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2 primary-button" onClick={showControls}>Controls</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2 primary-button" onClick={startGame}>Play</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2 primary-button" onClick={showScores}>Scores</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2 primary-button">Dark Mode</button>
      </div>
    </main>
  )
}

export default Home