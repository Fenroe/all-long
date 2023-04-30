import { useSnapshot } from "valtio"
import { state } from "../state"
import { GameBoard, GameInfo } from "../components/"

export const Game = () => {
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
