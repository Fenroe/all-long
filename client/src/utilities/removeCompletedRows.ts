export const removeCompletedRows = (completedRows: number[], occupiedTiles: number[]) => {
    return occupiedTiles.filter((coordinate) => !completedRows.includes(coordinate))
}
