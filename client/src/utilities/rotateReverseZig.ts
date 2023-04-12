import sortCoordinatesArray from "./sortCoordinatesArray"

const rotateReverseZig = (currentPosition: readonly number[], currentOrientation: 'spawn' | 'upright' | 'reverse spawn' | 'reverse upright') => {
    const currentPositionCopy = sortCoordinatesArray(currentPosition)
    if (currentOrientation === 'spawn' || currentOrientation === 'reverse spawn') {
        const firstCoordinate = currentPositionCopy[0]
        const secondCoordinate = currentPositionCopy[1]
        const thirdCoordinate = firstCoordinate - 10
        const finalCoordinate = secondCoordinate + 10
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    if (currentOrientation === 'upright' || currentOrientation === 'reverse upright') {
        const firstCoordinate = currentPositionCopy[0] + 12
        const secondCoordinate = currentPositionCopy[1] + 10
        const thirdCoordinate = currentPositionCopy[2]
        const finalCoordinate = currentPositionCopy[3]
        console.log(firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate)
        return [firstCoordinate, secondCoordinate, thirdCoordinate, finalCoordinate]
    }
    return [1, 2, 3, 4]
}

export default rotateReverseZig