import { useSnapshot } from 'valtio'
import state from '../state' 
import { getRandomPiece } from '../utilities'

const Home = () => {
  const snap = useSnapshot(state)

  const startGame = () => {
    state.score = 0
    state.lines = 0
    const startingPiece = getRandomPiece()
    state.activePieceTiles = startingPiece.defaultPosition
    state.pieceType = startingPiece.name
    const nextPiece = getRandomPiece()
    state.nextPieceTiles = nextPiece.defaultPosition
    state.nextPieceType = nextPiece.name
    state.previewPieceTiles = nextPiece.previewPosition
    state.intro = false
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center home">
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className="text-8xl uppercase mb-10">Blocks</h1>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2" onClick={() => state.showModal = true}>Controls</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2" onClick={startGame}>Play</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2">Scores</button>
        <button className="w-56 h-16 border-black border rounded-lg text-4xl uppercase mb-2">Dark Mode</button>
      </div>
    </main>
  )
}

export default Home