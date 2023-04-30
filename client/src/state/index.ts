import { proxy } from 'valtio'
import { GlobalState } from '../types';

export const state: GlobalState = proxy({
    activePieceTiles: [3, 4, 5, 13],
    gamePaused: false,
    occupiedTiles: [],
    nextPieceTiles: [14, 24, 13, 3],
    pieceOrientation: 'spawn',
    pieceType: '',
    intro: true,
    outro: false,
    score: 0,
    nextPieceType: '',
    lines: 0,
    dropPoints: 0,
    showModal: false,
    previewPieceTiles: [],
    modalContents: 'Controls',
    localScores: [],
    gameId: 0,
    level: 0,
})
