import { sortCoordinatesArray } from "./sortCoordinatesArray"

export const rotateLong = (currentPosition: readonly number[], currentOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright') => {
    const currentPositionCopy = sortCoordinatesArray(currentPosition)
    if (currentOrientation === 'spawn' || currentOrientation === 'reverse spawn') {
        const secondCoordinate = currentPositionCopy[1]
        const firstCoordinate = secondCoordinate - 10
        const thirdCoordinate = secondCoordinate + 10
        const finalCoordinate = thirdCoordinate + 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'upright' || currentOrientation === 'reverse upright') {
        const secondCoordinate = currentPositionCopy[1]
        const firstCoordinate = secondCoordinate - 1
        const thirdCoordinate = secondCoordinate + 1
        const finalCoordinate = thirdCoordinate + 1
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    return [1, 2, 3, 4]
}

