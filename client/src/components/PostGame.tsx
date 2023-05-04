import { useSnapshot } from "valtio"
import { state } from "../state"
import { useState, useEffect } from "react"
import { UserScore } from "../types"
import { defaultUserName, localStorageKeys, maximumNameLength, minimumNameLength, pageContentsValues } from "../constants"
import { postNewScore } from "../utilities"
import { ClipLoader } from "react-spinners"

export const PostGame = () => {
    const snap = useSnapshot(state)

    const [newHighScore, setNewHighScore] = useState(false)

    const [scoreSaved, setScoreSaved] = useState(false)

    const [username, setUsername] = useState(defaultUserName)

    const [loading, setLoading] = useState(false)

    const updateUsername = (evt:any) => {
        const newName:string = evt.target.value
        if (newName.length > maximumNameLength || newName.length < minimumNameLength) return
        setUsername(newName)
    }

    const checkForInvalidUsername = () => {
        return username === ''
    }

    const saveScore = () => {
        if (checkForInvalidUsername()) return
        const newScore:UserScore = {
            id: snap.gameId,
            name: username,
            score: snap.score
        }
        const localScores = [...snap.localScores, newScore].sort((a, b) => b.score - a.score)
        state.localScores = localScores
        localStorage.setItem(localStorageKeys.localScores, JSON.stringify(localScores))
    }

    const handleSaveScore = async () => {
        if (loading) return
        setLoading(true)
        saveScore()
        if (newHighScore) {
            await postNewScore(snap.score, username, snap.lines, snap.level)
        }
        setScoreSaved(true)
        setLoading(false)
    }

    const handleClose = () => {
        state.showModal = false
        state.pageContent = pageContentsValues.home
    }

    useEffect(() => {
        setNewHighScore(snap.localScores.length === 0 || snap.localScores[0].score < snap.score)
    }, [])

    return (
        <div className={snap.darkMode ? "scoresubmission-dark" : "scoresubmission"} style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            {!scoreSaved &&
            <>
                <h2 className="text-3xl text-center font-bold">You scored a total of {snap.score} points</h2>
                {newHighScore && <h2 className="text-3xl text-center font-bold">This is your new high score!</h2>}
                <form onSubmit={(evt) => evt.preventDefault()}className="w-full flex flex-col justify-center items-center gap-3">
                    <label htmlFor="name" className="text-2xl font-bold text-center w-full">Enter your name</label>
                    <input value={username} type="text" id="name" onChange={updateUsername} className={snap.darkMode ? "scoresubmissioninput-dark":"scoresubmissioninput"}/>
                    <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={handleSaveScore} disabled={checkForInvalidUsername()}>{loading ? <ClipLoader color={snap.darkMode ? "#fafafa" : "ffffff"} /> : "Save Score"}</button>
                </form>
            </>}
            {scoreSaved &&
            <>
                <h2 className="text-3xl text-center font-bold">Your score has been saved{newHighScore ? ' and submitted to the leaderboard.' : '.'}</h2>
                <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={handleClose}>Close</button>
            </>}
        </div>
    )
}
