import { proxy } from 'valtio'

interface stateInterface {
    rows: number;
    tilesPerRow: number;
    text: string;
    activePieceTiles: number[];
    gamePaused: boolean;
    occupiedTiles: number[];
    nextPieceTiles: number[];

}
const state: stateInterface = proxy({
    rows: 18,
    tilesPerRow: 10,
    text: 'Hello',
    activePieceTiles: [3, 4, 14, 15],
    gamePaused: false,
    occupiedTiles: [],
    nextPieceTiles: [3, 4, 14, 15],
});

export default state;
