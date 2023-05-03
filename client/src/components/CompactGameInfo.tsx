import { useSnapshot } from "valtio"
import { state } from "../state"
import { modalContentsValues } from "../constants"
import { openModalWithListener } from "../utilities"

export const CompactGameInfo = () => {
    const snap = useSnapshot(state)

    const openPauseMenu = () => {
        state.gamePaused = true
        state.modalContents = modalContentsValues.pauseMenu
        openModalWithListener()
    }
    
    return (
        <div className={snap.darkMode ? "compactinfo-dark" : "compactinfo"}>
            <div className="flex-1 flex flex-col items-center">
                <span className="font-bold">Level</span>
                <span>{snap.level}</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <span className="font-bold">Score</span>
                <span>{snap.score}</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
                <span className="font-bold">Lines</span>
                <span>{snap.lines}</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center">
                <button className="rounded-lg p-1" onClick={openPauseMenu}>Pause</button>
            </div>
        </div>
    )
}