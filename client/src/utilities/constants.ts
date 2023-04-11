const defaultPiecePositions = {
    long: [3, 4, 5, 6],
    square: [3, 4, 13, 14],
    cross: [3, 4, 5, 14],
    lShape: [13, 14, 15, 5],
    reverseLShape: [3, 13, 14, 15],
    zigZag: [3, 4, 14, 15],
    reverseZigZag: [5, 4, 14, 13],
}

const pieceOrientationArray: Array<'spawn' | 'upright' | 'reverse spawn' | 'reverse upright'> = ['spawn', 'upright', 'reverse spawn', 'reverse upright']

export {
    defaultPiecePositions,
    pieceOrientationArray,
}