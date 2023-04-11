import { proxy } from 'valtio'

interface stateInterface {
    rows: number;
    tilesPerRow: number;
    text: string;
    activePieceTiles: number[];
    gamePaused: boolean;
    occupiedTiles: number[];
    nextPieceTiles: number[];
    pieceOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright';
    pieceType: string;

}
const state: stateInterface = proxy({
    rows: 18,
    tilesPerRow: 10,
    text: 'Hello',
    activePieceTiles: [3, 4, 5, 13],
    gamePaused: true,
    occupiedTiles: [],
    nextPieceTiles: [14, 24, 13, 3],
    pieceOrientation: 'spawn',
    pieceType: 'L',
})

// [14, 15, 23, 24]
// [3, 13, 14, 24]

export default state;

/*
keep track of what piece orientation should be 
spawn
upright
reverse spawn
reverse upright

which pieces have all four, which have less?

4
L
reverse L
cross

2
long
zigzag
reverse zigzag

1
square
*/
