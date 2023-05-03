import { useSnapshot } from "valtio"
import { state } from "../state"
import { GameBoard, GameInfo, CompactGameInfo } from "../components/"
import { useWindowSize } from "../hooks"

export const Game = () => {
  const snap = useSnapshot(state)

  const screenSize = useWindowSize()

  return (
    <main className={snap.darkMode ? "game-dark":"game"}>
      <div className="flex justify-center items-center rounded-xl flex-col max-h-screen sm:flex-row">
        {screenSize.width < 640 && <CompactGameInfo />}
        <GameBoard />
        {screenSize.width >= 640 && <GameInfo />}
      </div>
    </main>
  )
}
