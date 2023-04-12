const defaultPiecePositions = {
    long: [3, 4, 5, 6],
    square: [3, 4, 13, 14],
    cross: [3, 4, 5, 14],
    L: [13, 14, 15, 5],
    reverseL: [3, 13, 14, 15],
    zig: [3, 4, 14, 15],
    reverseZig: [5, 4, 14, 13],
}

const pieces = [
    {
        name: 'cross',
        defaultPosition: [3, 4, 5, 14],
    },
    {
        name: 'L',
        defaultPosition: [3, 4, 5, 13],
    },
    {
        name: 'reverse L',
        defaultPosition: [3, 4, 5, 15],
    },
    {
        name: 'long',
        defaultPosition: [3, 4, 5, 6],
    },
    {
        name: 'zig',
        defaultPosition: [4, 5, 15, 16],
    },
    {
        name: 'reverse zig',
        defaultPosition: [6, 5, 15, 14],
    },
    {
        name: 'square',
        defaultPosition: [4, 5, 14, 15],
    },
]

const pieceOrientationArray: Array<'spawn' | 'upright' | 'reverse spawn' | 'reverse upright'> = ['spawn', 'upright', 'reverse spawn', 'reverse upright']


export {
    defaultPiecePositions,
    pieces,
    pieceOrientationArray,
}