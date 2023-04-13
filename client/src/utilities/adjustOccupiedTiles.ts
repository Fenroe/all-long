export const adjustOccupiedTiles = (completedRows: number[][], occupiedTiles: number[]) => {
    const sortedCompletedRows = completedRows
    sortedCompletedRows.sort((a, b) => b[0] - a[0])
    let finalArray: number[] = occupiedTiles
    let offset = 0
    completedRows.forEach((row) => {
        const base = row[0] + offset
        finalArray = finalArray.map((coordinate) => {
            if (coordinate < base) {
                return coordinate + 10
            } else {
                return coordinate
            }
        })
        offset += 10
    })
    return finalArray
}
