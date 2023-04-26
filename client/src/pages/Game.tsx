import { useSnapshot } from "valtio"
import GameBoard from "../components/GameBoard"
import GameInfo from "../components/GameInfo"
import state from "../state"
import PauseMenu from "../components/PauseMenu"

const Game = () => {
  const snap = useSnapshot(state)

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center items-center rounded-xl flex-col max-h-screen sm:flex-row">
        <GameBoard />
        <GameInfo />
      </div>
    </main>
  )
}

export default Game