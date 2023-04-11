import sortCoordinatesArray from "./sortCoordinatesArray"

const rotateZig = (currentPosition: readonly number[], currentOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright') => {
    const currentPositionCopy = sortCoordinatesArray(currentPosition)
    if (currentOrientation === 'spawn' || currentOrientation === 'reverse spawn') {
        const firstCoordinate = currentPositionCopy[1]
        const secondCoordinate = currentPositionCopy[2]
        const thirdCoordinate = firstCoordinate + 1
        const finalCoordinate = thirdCoordinate - 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'upright' || currentOrientation === 'reverse upright') {
        const firstCoordinate = currentPositionCopy[0] - 8
        const secondCoordinate = currentPositionCopy[1]
        const thirdCoordinate = currentPositionCopy[3]
        const finalCoordinate = currentPositionCopy[2] + 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    return [0, 1, 2, 3]
}

export default rotateZig
