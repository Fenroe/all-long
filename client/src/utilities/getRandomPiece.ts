import { pieces } from "./constants"

const getRandomPiece = () => {
    const randomNumber = Math.floor(Math.random() * pieces.length)
    return pieces[randomNumber]
}

export default getRandomPiece
