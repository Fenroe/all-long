import { proxy } from 'valtio'

interface stateInterface {
    activePieceTiles: number[];
    gamePaused: boolean;
    occupiedTiles: number[];
    nextPieceTiles: number[];
    pieceOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright';
    pieceType: string;
    intro: boolean;
    outro: boolean;
    score: number;
    nextPieceType: string;
    lines: number;
    dropPoints: number;
    showModal: boolean;
    previewPieceTiles: number[];
    modalContents: string;

}
const state: stateInterface = proxy({
    activePieceTiles: [3, 4, 5, 13],
    gamePaused: true,
    occupiedTiles: [],
    nextPieceTiles: [14, 24, 13, 3],
    pieceOrientation: 'spawn',
    pieceType: 'L',
    intro: true,
    outro: false,
    score: 0,
    nextPieceType: '',
    lines: 0,
    dropPoints: 0,
    showModal: false,
    previewPieceTiles: [],
    modalContents: 'Controls',
})

export default state;
