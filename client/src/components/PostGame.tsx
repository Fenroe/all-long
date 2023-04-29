import { useSnapshot } from "valtio"
import state from "../state"
import { useState, useEffect, useRef } from "react"
import { UserScore } from "../types"

const PostGame = () => {
    const snap = useSnapshot(state)

    const [newHighScore, setNewHighScore] = useState(false)

    const nameRef = useRef<HTMLInputElement>(null)

    const updateName = () => {
        if (!nameRef.current || nameRef.current.value === '') return
        const newName = nameRef.current.value
        const remainingScores = snap.localScores.filter((score) => score.id !== snap.gameId)
        const updatedScore:UserScore = {
            id: snap.gameId,
            name: newName,
            score: snap.score,
        }
        const newLocalScores = [...remainingScores, updatedScore].sort((a, b) => b.score - a.score)
        state.localScores = newLocalScores
        localStorage.setItem('localScores', JSON.stringify(newLocalScores))
    }

    const handleSubmiit = () => {
        updateName()
        state.showModal = false
        state.intro = true
    }

    useEffect(() => {
        setNewHighScore(snap.localScores[0].id === snap.gameId)
    }, [])

    return (
        <div className="modal relative flex flex-col items-center justify-center gap-6" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h2 className="text-3xl text-center font-bold">You scored a total of {snap.score} points</h2>
            {newHighScore && <h2 className="text-3xl text-center font-bold">This is your new high score!</h2>}
            <form onSubmit={(evt) => evt.preventDefault()}className="w-full flex flex-col justify-center items-center gap-3">
            <label htmlFor="name" className="text-2xl font-bold text-center w-full">Enter your name</label>
            <input ref={nameRef} defaultValue="Tett" type="text" id="name" className="border rounded-full text-2xl text-center bg-white p-2"/>
            <button className="primary-button w-full border border-black rounded-full p-2 text-2xl font-bold" onClick={handleSubmiit}>Submit</button>
            </form>
        </div>
    )
}

export default PostGame