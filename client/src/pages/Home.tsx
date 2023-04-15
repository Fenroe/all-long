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
    state.intro = false
  }

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center home">
      <div className="w-full flex flex-col justify-center items-center home-play-container">
        <h1 className="text-8xl uppercase">Blocks</h1>
        <button className="w-56 h-20 border-black border rounded-lg text-4xl uppercase" onClick={startGame}>Play</button>
      </div>
    </main>
  )
}

export default Home