import { GamePiece } from "../types";
import { tetrominoNames } from "./tetrominoNames";

export const tetrominoData: Array<GamePiece> = [
    {
        name: tetrominoNames.cross,
        defaultPosition: [3, 4, 5, 14],
        previewPosition: [11, 12, 13, 22],
    },
    {
        name: tetrominoNames.lShape,
        defaultPosition: [3, 4, 5, 13],
        previewPosition: [11, 12, 13, 21],
    },
    {
        name: tetrominoNames.reverseLShape,
        defaultPosition: [3, 4, 5, 15],
        previewPosition: [11, 12, 13, 23],
    },
    {
        name: tetrominoNames.long,
        defaultPosition: [3, 4, 5, 6],
        previewPosition: [11, 12, 13, 14],
    },
    {
        name: tetrominoNames.zigZag,
        defaultPosition: [4, 5, 15, 16],
        previewPosition: [11, 12, 22, 23],
    },
    {
        name: tetrominoNames.reverseZigZag,
        defaultPosition: [6, 5, 15, 14],
        previewPosition: [13, 12, 22, 21],
    },
    {
        name: tetrominoNames.square,
        defaultPosition: [4, 5, 14, 15],
        previewPosition: [12, 13, 22, 23],
    },
]