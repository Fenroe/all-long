import sortCoordinatesArray from "./sortCoordinatesArray"

const rotateReverseL = (currentPosition: readonly number[], currentOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright') => {
    const currentPositionCopy = sortCoordinatesArray(currentPosition)
    if (currentOrientation === 'spawn') {
        const secondCoordinate = currentPositionCopy[1]
        const firstCoordinate = secondCoordinate - 10
        const thirdCoordinate = secondCoordinate + 10
        const finalCoordinate = firstCoordinate + 1
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'upright') {
        const secondCoordinate = currentPositionCopy[2]
        const firstCoordinate = secondCoordinate - 1
        const thirdCoordinate = secondCoordinate + 1
        const finalCoordinate = firstCoordinate - 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'reverse spawn') {
        const secondCoordinate = currentPositionCopy[2]
        const firstCoordinate = secondCoordinate - 10
        const thirdCoordinate = secondCoordinate + 10
        const finalCoordinate = thirdCoordinate - 1
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'reverse upright') {
        const secondCoordinate = currentPositionCopy[1]
        const firstCoordinate = secondCoordinate - 1
        const thirdCoordinate = secondCoordinate + 1
        const finalCoordinate = thirdCoordinate + 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    return [1, 2, 3, 4]
}

export default rotateReverseL
