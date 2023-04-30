import { useSnapshot } from "valtio"
import { state } from "../state"
import { useState, useEffect, useRef } from "react"
import { UserScore } from "../types"
import { localStorageKeys } from "../constants"

export const PostGame = () => {
    const snap = useSnapshot(state)

    const [newHighScore, setNewHighScore] = useState(false)

    const [scoreSaved, setScoreSaved] = useState(false)

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
        localStorage.setItem(localStorageKeys.localScores, JSON.stringify(newLocalScores))
    }

    const handleSaveScore = () => {
        setScoreSaved(true)
    }

    const handleClose = () => {
        updateName()
        state.showModal = false
        state.intro = true
    }

    useEffect(() => {
        setNewHighScore(snap.localScores[0].id === snap.gameId)
    }, [])

    return (
        <div className="modal relative flex flex-col items-center justify-center gap-6" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            {!scoreSaved &&
            <>
                <h2 className="text-3xl text-center font-bold">You scored a total of {snap.score} points</h2>
                {newHighScore && <h2 className="text-3xl text-center font-bold">This is your new high score!</h2>}
                <form onSubmit={(evt) => evt.preventDefault()}className="w-full flex flex-col justify-center items-center gap-3">
                    <label htmlFor="name" className="text-2xl font-bold text-center w-full">Enter your name</label>
                    <input ref={nameRef} defaultValue="Tett" type="text" id="name" className="border rounded-full text-2xl text-center bg-white p-2"/>
                    <button className="modal-button" onClick={handleSaveScore}>Save Score</button>
                </form>
            </>}
            {scoreSaved &&
            <>
                <h2 className="text-3xl text-center font-bold">Your score has been saved{newHighScore ? ' and submitted to the leaderboard.' : '.'}</h2>
                <button className="text-3xl w-full h-14 rounded-md border-2 border-black primary-button" onClick={handleClose}>Close</button>
            </>}
        </div>
    )
}
