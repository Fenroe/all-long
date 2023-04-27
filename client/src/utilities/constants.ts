const defaultPiecePositions = {
    long: [3, 4, 5, 6],
    square: [3, 4, 13, 14],
    cross: [3, 4, 5, 14],
    L: [13, 14, 15, 5],
    reverseL: [3, 13, 14, 15],
    zig: [3, 4, 14, 15],
    reverseZig: [5, 4, 14, 13],
}

interface GamePiece {
    name: string;
    defaultPosition: number[];
    previewPosition: number[];
}

const pieces: Array<GamePiece> = [
    {
        name: 'cross',
        defaultPosition: [3, 4, 5, 14],
        previewPosition: [11, 12, 13, 22],
    },
    {
        name: 'L',
        defaultPosition: [3, 4, 5, 13],
        previewPosition: [11, 12, 13, 21],
    },
    {
        name: 'reverse L',
        defaultPosition: [3, 4, 5, 15],
        previewPosition: [11, 12, 13, 23],
    },
    {
        name: 'long',
        defaultPosition: [3, 4, 5, 6],
        previewPosition: [11, 12, 13, 14],
    },
    {
        name: 'zig',
        defaultPosition: [4, 5, 15, 16],
        previewPosition: [11, 12, 22, 23],
    },
    {
        name: 'reverse zig',
        defaultPosition: [6, 5, 15, 14],
        previewPosition: [13, 12, 22, 21],
    },
    {
        name: 'square',
        defaultPosition: [4, 5, 14, 15],
        previewPosition: [12, 13, 22, 23],
    },
]

const pieceOrientationArray: Array<'spawn' | 'upright' | 'reverse spawn' | 'reverse upright'> = ['spawn', 'upright', 'reverse spawn', 'reverse upright']


export {
    defaultPiecePositions,
    pieces,
    pieceOrientationArray
};

export type { GamePiece };
