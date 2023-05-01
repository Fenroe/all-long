import { useEffect } from "react"
import { useSnapshot } from "valtio"
import { state } from "../state"
import { closeModalWithListener, startGame } from "../utilities"
import { useOutsideClick } from "../hooks"
import { useState } from "react"

export const PauseMenu = () => {
    const [menuView, setMenuView] = useState('Menu')

    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)

    const restartGame = () => {
        startGame(0)
        closeModalWithListener()
    }

    const exitGame = () => {
        state.intro = true
        closeModalWithListener()
    }

    useEffect(() => {
        if (snap.showModal) {
            setMenuView('Menu')
        }
    }, [snap.showModal])

    return (
        <div ref={modalRef} className="modal relative text-3xl font-bold" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            {menuView === 'Menu' &&
            <div className="w-full h-full flex flex-col justify-evenly items-center">
                <button className="modal-button"onClick={closeModalWithListener}>Resume</button>
                <button className="modal-button"onClick={() => setMenuView('Restart')}>Restart</button>
                <button className="modal-button"onClick={() => setMenuView('Exit')}>Exit</button>
            </div>}
            {menuView === 'Restart' &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                <h2 className="text-3xl text-center">Restart the game?</h2>
                <div className="w-full flex flex-col gap-3">
                    <button className="modal-button"onClick={restartGame}>Yes</button>
                    <button className="modal-button"onClick={() => setMenuView('Menu')}>No</button>
                </div>
            </div>}
            {menuView === 'Exit' &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                <h2 className="text-3xl text-center">Exit the game?</h2>
                <div className="w-full flex flex-col gap-3">
                    <button className="modal-button"onClick={exitGame}>Yes</button>
                    <button className="modal-button"onClick={() => setMenuView('Menu')}>No</button>
                </div>
            </div>}
        </div>
    )
}
