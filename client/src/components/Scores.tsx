import { useState } from "react"
import { useSnapshot } from "valtio"
import state from "../state"
import { closeModalWithListener } from "../utilities"
import { useOutsideClick } from "../hooks"


const Scores = () => {
    const [scoresMode, setScoresMode] = useState('Local')

    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)

    const setButtonClass = (relatedMode: string) => {
        if (scoresMode === relatedMode) {
            return "w-full h-9.5 p-2 cursor-default absolute text-4xl text-center font-bold left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform"
        } else {
            return "w-full h-9.5 p-2 border border-black absolute text-4xl text-center font-bold left-1/2 top-1/2 -translate-x-1/2 translate-y-6 scale-50 rounded-full transition-transform bg-[#fafafa] brightness-100 hover:brightness-95"
        }
    }

    return (
        <div ref={modalRef} className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <div className="relative mb-3 w-full h-20">
                <button className={setButtonClass('Local')} onClick={() => setScoresMode('Local')}>Local Scores</button>
                <button className={setButtonClass('Leaderboard')} onClick={() => setScoresMode('Leaderboard')}>Leaderboard</button>  
            </div>
            {scoresMode === 'Local' &&
                <section className="flex flex-col w-full h-full items-center gap-3 py-10 px-5">
                    {snap.localScores.length < 1 &&
                    <h2>You haven't submitted a score yet.</h2>}
                    {snap.localScores.map((score) =>
                    <div className="flex justify-between w-full text-xl" key={score.id}>
                        <span>{score.name}</span>
                        <span>{score.score}</span>
                    </div>)}
                </section>
            }
            {scoresMode === 'Leaderboard' &&
                <section className="flex flex-col w-full h-full items-center gap-3 py-10 px-5">
                    {snap.localScores.length < 1 &&
                    <h2>You haven't submitted a score yet.</h2>}
                    {snap.localScores.map((score) =>
                    <div className="flex justify-between w-full text-xl" key={score.id}>
                        <span>{score.name}</span>
                        <span>{score.score}</span>
                    </div>)}
                </section>
            }
            <button className="modal-button" onClick={closeModalWithListener}>Close</button>
        </div>
    )
}

export default Scores