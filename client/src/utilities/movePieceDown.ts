import state from "../state"

const movePieceDown = () => {
    let isValidMove = true
    state.activePieceTiles.forEach((coordinate) => {
        if (coordinate + 10 >= 180) {
            isValidMove = false
        }
    })
    if (!isValidMove) {
        return state.activePieceTiles
    }
    const newArray: number[] = []
    state.activePieceTiles.forEach((coordinate) => {
        newArray.push(coordinate + 10)
    })
    return newArray
}

export default movePieceDown
