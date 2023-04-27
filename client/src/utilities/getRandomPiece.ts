import { pieces } from "./constants"

const getRandomPiece = (reroll?:boolean) => {
    if (reroll) {
        const randomNumber = Math.floor(Math.random() * 7)
        return pieces[randomNumber]
    } else {
        const randomNumber = Math.floor(Math.random() * 8)
        if (randomNumber === 7) {
            return false
        } else {
            return pieces[randomNumber]
        }
    }
}

export default getRandomPiece
