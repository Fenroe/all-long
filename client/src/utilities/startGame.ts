import state from "../state"
import getRandomPiece from "./getRandomPiece"

export const startGame = () => {
    state.occupiedTiles = []
    state.score = 0
    state.lines = 0
    state.dropPoints = 0
    const startingPiece = getRandomPiece()
    state.activePieceTiles = startingPiece.defaultPosition
    state.pieceType = startingPiece.name
    const nextPiece = getRandomPiece()
    state.nextPieceTiles = nextPiece.defaultPosition
    state.nextPieceType = nextPiece.name
    state.previewPieceTiles = nextPiece.previewPosition
    state.intro = false
  }
