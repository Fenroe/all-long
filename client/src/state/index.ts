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

}
const state: stateInterface = proxy({
    activePieceTiles: [3, 4, 5, 13],
    gamePaused: false,
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
})

export default state;
