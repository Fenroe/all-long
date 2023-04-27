import { useSnapshot } from "valtio"
import state from "../state"

const PostGame = () => {
    const snap = useSnapshot(state)

    const checkForHighScore = () => true
    return (
        <div className="modal relative flex flex-col items-center justify-center gap-6" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
              <h2 className="text-3xl text-center font-bold">You scored a total of {snap.score} points</h2>
              {checkForHighScore() && <h2 className="text-3xl text-center font-bold">This is your new high score!</h2>}
              {checkForHighScore() &&
              <form className="w-full flex flex-col justify-center items-center gap-3">
                <label htmlFor="name" className="text-2xl font-bold text-center w-full">Enter your name</label>
                <input type="text" id="name" className="border rounded-full text-2xl text-center bg-white p-2"/>
                <button className="primary-button w-full border border-black rounded-full p-2 text-2xl font-bold">Submit</button>
              </form>
              }
        </div>
    )
}

export default PostGame