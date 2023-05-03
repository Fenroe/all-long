import { useSnapshot } from 'valtio'
import { getArrayFromNumber } from '../utilities'
import { PreviewRow } from './PreviewRow'
import { state } from '../state'
import { openModalWithListener } from '../utilities'
import { modalContentsValues, numberOfPreviewRows } from '../constants'

export const GameInfo = () => {
    const snap = useSnapshot(state)

    const openPauseMenu = () => {
        state.gamePaused = true
        state.modalContents = modalContentsValues.pauseMenu
        openModalWithListener()
    }

    return (
        <div className={snap.darkMode ? 'gameinfo-dark' : 'gameinfo'}>
            <div className="bg-inherit flex sm:flex-col">
                <div className="bg-inherit">
                    <h2 className="text-center text-3xl font-bold mb-2 bg-inherit">Next</h2>
                    {getArrayFromNumber(numberOfPreviewRows).map((row) =>
                    <PreviewRow 
                    key={row}
                    rowId={row}
                    />)}
                </div>
                <div className={snap.darkMode ? 'gamestats-dark' : 'gamestats'}>
                    <div className="flex justify-between w-full bg-inherit">
                        <span className="font-bold bg-inherit">Level</span>
                        <span className="bg-inherit">{snap.level}</span>
                    </div>
                    <div className="flex justify-between w-full bg-inherit">
                        <span className="font-bold bg-inherit">Score</span>
                        <span className="bg-inherit">{snap.score}</span>
                    </div>
                    <div className="flex justify-between w-full bg-inherit">
                        <span className="font-bold bg-inherit">Lines</span>
                        <span className="bg-inherit">{snap.lines}</span>
                    </div>
                </div>
            </div>
            <button className={snap.darkMode ? "gamepause-dark" : "gamepause"} onClick={openPauseMenu}>Pause</button>
        </div>
    )
}
