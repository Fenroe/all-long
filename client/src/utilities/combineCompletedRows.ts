export const combineCompletedRows = (completedRowsArray: number[][]) => {
    const finalArray: number[] = []
    completedRowsArray.forEach((array) => {
        for (let i = 0; i < array.length; i += 1) {
            finalArray.push(array[i])
        }
    })
    return finalArray
}
