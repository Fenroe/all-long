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
    snap.intro &&
    <main>
      <h1>Tetris</h1>
      <button onClick={startGame}>Start</button>
    </main>
  )
}

export default Home