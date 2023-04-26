import { useSnapshot } from 'valtio'
import { getArrayFromNumber, getLevel } from '../utilities'
import PreviewRow from './PreviewRow'
import state from '../state'
import { openModalWithListener } from '../utilities'

const GameInfo = () => {
    const snap = useSnapshot(state)

    const rows = 4

    const openPauseMenu = () => {
        state.gamePaused = true
        state.modalContents = 'Pause'
        openModalWithListener()
    }

    return (
        <div className="h-[576px] flex justify-between items-center bg-[#d2d3db] px-9 py-6 flex-col">
            <div className="bg-inherit flex sm:flex-col">
                <div className="bg-inherit">
                    <h2 className="text-center text-3xl font-bold mb-2 bg-inherit">Next</h2>
                    {getArrayFromNumber(rows).map((row) =>
                    <PreviewRow 
                    key={row}
                    rowId={row}
                    />)}
                </div>
                <div className="w-48 flex flex-col gap-3 text-2xl p-6 rounded-xl bg-[#e4e5f1]">
                    <div className="flex justify-between w-full bg-inherit">
                        <span className="font-bold bg-inherit">Level</span>
                        <span className="bg-inherit">{getLevel(snap.lines)}</span>
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
            <button className="text-2xl w-full h-12 rounded-lg border font-bold bg-[#e4e5f1]" onClick={openPauseMenu}>Pause</button>
        </div>
    )
}

export default GameInfo