import { proxy } from 'valtio'
import { GlobalState } from '../types';
import { defaultScore, modalContentsValues, pageContentsValues, tetrominoOrientation } from '../constants';

export const state: GlobalState = proxy({
    activePieceTiles: [3, 4, 5, 13],
    gamePaused: false,
    occupiedTiles: [],
    nextPieceTiles: [14, 24, 13, 3],
    pieceOrientation: tetrominoOrientation[0],
    pieceType: '',
    pageContent: pageContentsValues.default,
    intro: true,
    outro: false,
    score: defaultScore,
    nextPieceType: '',
    lines: 0,
    dropPoints: 0,
    showModal: false,
    previewPieceTiles: [],
    modalContents: modalContentsValues.default,
    localScores: [],
    gameId: 0,
    level: 0,
    gameFinished: false,
    darkMode: false,
})
