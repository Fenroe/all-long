import GameBoard from "../components/GameBoard"
import GameInfo from "../components/GameInfo"

const Game = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex justify-center p-6 rounded-xl">
        <GameBoard />
        <GameInfo />
      </div>
    </main>
  )
}

export default Game