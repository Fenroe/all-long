import state from "../state"

const movePieceLeft = () => {
    let isValidMove = true
    state.activePieceTiles.forEach((coordinate) => {
        if (coordinate % 10 === 0) {
            isValidMove = false
        }
    })
    if (!isValidMove) {
        return state.activePieceTiles
    }
    const newArray: number[] = []
    state.activePieceTiles.forEach((coordinate) => {
        newArray.push(coordinate - 1)
    })
    return newArray
}

export default movePieceLeft
