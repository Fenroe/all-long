export const sortCoordinatesArray = (currentPosition: readonly number[]) => {
        // test this
        const currentPositionCopy = currentPosition.filter((coordinate) => coordinate || !coordinate)
        // if currentPosition was [3, 4, 5, 14] then expected output is also [3, 4, 5, 14]
        currentPositionCopy.sort((a, b) => a - b)
        return currentPositionCopy
}

