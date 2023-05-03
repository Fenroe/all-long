import { useEffect } from "react"
import { useSnapshot } from "valtio"
import { state } from "../state"
import { closeModalWithListener, startGame } from "../utilities"
import { useOutsideClick } from "../hooks"
import { useState } from "react"
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md"
import { maximumStartingLevel, minimumStartingLevel, pageContentsValues } from "../constants"

export const PauseMenu = () => {
    const [menuView, setMenuView] = useState('Menu')

    const [level, setLevel] = useState(0)

    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)

    const returnInputValue = () => {
        return `${level < 10 ? '0' : ''}${level}`
    }
    const increaseLevel = () => {
        if (level < maximumStartingLevel) setLevel(level + 1)
    }

    const decreaseLevel = () => {
        if (level > minimumStartingLevel) setLevel(level - 1)
    }

    const handleInputChange = (evt:any) => {
        if (isNaN(evt.target.value)) return
        const newValue = +evt.target.value
        if (newValue > maximumStartingLevel) {
            setLevel(maximumStartingLevel)
        } else if (newValue < minimumStartingLevel) {
            setLevel(minimumStartingLevel)
        } else {
            setLevel(newValue)
        }
    }
    
    const restartGame = () => {
        startGame(level)
        closeModalWithListener()
    }

    const exitGame = () => {
        state.pageContent = pageContentsValues.home
        closeModalWithListener()
    }

    useEffect(() => {
        if (snap.showModal) {
            setMenuView('Menu')
        }
    }, [snap.showModal])

    return (
        <div ref={modalRef} className={snap.darkMode ? "modal-container-dark" : "modal-container"} style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            {menuView === 'Menu' &&
            <div className="w-full h-full flex flex-col justify-evenly items-center">
                <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={closeModalWithListener}>Resume</button>
                <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={() => setMenuView('Restart')}>Restart</button>
                <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={() => setMenuView('Exit')}>Exit</button>
            </div>}
            {menuView === 'Restart' &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                <h2 className="text-3xl text-center">Restart the game?</h2>
                <div className="w-full flex flex-col gap-3">
                    <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={() => setMenuView('Level Select')}>Yes</button>
                    <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={() => setMenuView('Menu')}>No</button>
                </div>
            </div>}
            {menuView === 'Exit' &&
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
                <h2 className="text-3xl text-center">Exit the game?</h2>
                <div className="w-full flex flex-col gap-3">
                    <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={exitGame}>Yes</button>
                    <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={() => setMenuView('Menu')}>No</button>
                </div>
            </div>}
            {menuView === 'Level Select' &&
            <>
            <h2 className="text-3xl font-bold text-center">Choose your starting level</h2>
            <div className="flex justify-evenly items-center w-full">
                <button className="text-6xl disabled:text-gray-400" disabled={level === maximumStartingLevel}>
                    <MdOutlineArrowDropUp className="text-6xl" onClick={increaseLevel}/>
                </button>
                <input onChange={(evt) => handleInputChange(evt)}className="border text-center text-4xl w-24 aspect-square p-3 text-black"value={returnInputValue()}/>
                <button className="text-6xl disabled:text-gray-400" disabled={level === minimumStartingLevel}>
                    <MdOutlineArrowDropDown className="text-6xl" onClick={decreaseLevel}/>
                </button>
            </div>
            <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={restartGame}>Start</button>
            </>}
        </div>
    )
}
