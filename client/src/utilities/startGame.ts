import state from "../state"
import { GamePiece } from "../types"
import getRandomPiece from "./getRandomPiece"

export const startGame = (level:number) => {
    state.occupiedTiles = []
    state.score = 0
    state.lines = 0
    state.level = level
    state.dropPoints = 0
    let startingPiece = getRandomPiece()
    if (startingPiece === false) startingPiece = getRandomPiece(true) as GamePiece
    state.activePieceTiles = startingPiece.defaultPosition
    state.pieceType = startingPiece.name
    let nextPiece = getRandomPiece()
    if (nextPiece === false) nextPiece = getRandomPiece(true) as GamePiece
    state.nextPieceTiles = nextPiece.defaultPosition
    state.nextPieceType = nextPiece.name
    state.previewPieceTiles = nextPiece.previewPosition
    state.gameId = Date.now()
    state.outro = false
    state.intro = false
  }
