import { useSnapshot } from "valtio"
import { state } from "../state"
import { useOutsideClick } from "../hooks"
import { closeModalWithListener, startGame } from "../utilities"
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { useState } from "react"
import { maximumStartingLevel, minimumStartingLevel } from "../constants"

export const PreGame = () => {
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

    const handleStart = () => {
        startGame(level)
        closeModalWithListener()
    }

    return (
        <div ref={modalRef} className={snap.darkMode ? "levelselect-dark" : "levelselect"} style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h2 className="text-3xl font-bold text-center">Choose your starting level</h2>
            <div className="flex justify-evenly items-center w-full">
                <button className="text-6xl disabled:text-gray-400" disabled={level === maximumStartingLevel}>
                    <MdOutlineArrowDropUp className="text-6xl" onClick={increaseLevel}/>
                </button>
                <input onChange={(evt) => handleInputChange(evt)}className={snap.darkMode ? "levelselectinput-dark":"levelselectinput"} value={returnInputValue()}/>
                <button className="text-6xl disabled:text-gray-400" disabled={level === minimumStartingLevel}>
                    <MdOutlineArrowDropDown className="text-6xl" onClick={decreaseLevel}/>
                </button>
            </div>
            <button className={snap.darkMode ? "modal-button-dark" : "modal-button"} onClick={handleStart}>Start</button>
        </div>
    )
}
