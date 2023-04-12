import GameBoard from "../components/GameBoard"
import { useSnapshot } from "valtio"
import state from "../state"

const Game = () => {
  const snap = useSnapshot(state)

  return (
    !snap.intro &&
    <GameBoard />
  )
}

export default Game