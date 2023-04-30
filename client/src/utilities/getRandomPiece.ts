import { tetrominoData } from "../constants"

export const getRandomPiece = (reroll?:boolean) => {
    if (reroll) {
        const randomNumber = Math.floor(Math.random() * 7)
        return tetrominoData[randomNumber]
    } else {
        const randomNumber = Math.floor(Math.random() * 8)
        if (randomNumber === 7) {
            return false
        } else {
            return tetrominoData[randomNumber]
        }
    }
}

