import state from "../state"

const movePieceDown = () => {
    let isValidMove = true
    state.activePieceTiles.forEach((coordinate) => {
        if (coordinate + 10 >= 180) {
            isValidMove = false
        }
        if (state.occupiedTiles.includes(coordinate + 10)) {
            isValidMove = false
        }
    })
    if (!isValidMove) {
        state.activePieceTiles.forEach((coordinate) => {
            console.log(coordinate)
            state.occupiedTiles.push(coordinate)
        })
        state.activePieceTiles = state.nextPieceTiles
    }
    const newArray: number[] = []
    state.activePieceTiles.forEach((coordinate) => {
        newArray.push(coordinate + 10)
    })
    return newArray
}

export default movePieceDown
