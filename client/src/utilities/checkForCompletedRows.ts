export const checkForCompletedRows = (occupiedTilesArray: number[]) => {
    const onlyMultiplesOfTen = occupiedTilesArray.filter((coordinate) => coordinate % 10 === 0)
    const arrayOfFilledLines: Array<number[]> = []
    onlyMultiplesOfTen.forEach((coordinate) => {
        const array = []
        for (let i = 0; i < 10; i += 1) {
            if (occupiedTilesArray.includes(coordinate + i)) {
                array.push(coordinate + i)
            }
        }
        if (array.length === 10) {
            arrayOfFilledLines.push(array)
        }
    })
    return arrayOfFilledLines
}
