import { useSnapshot } from "valtio"
import state from "../state"
import { useOutsideClick } from "../hooks"
import { closeModalWithListener, startGame } from "../utilities"
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { useState } from "react"

const PreGame = () => {
    const [level, setLevel] = useState(0)

    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)

    const returnInputValue = () => {
        return `${level < 10 ? '0' : ''}${level}`
    }
    const increaseLevel = () => {
        if (level < 19) setLevel(level + 1)
    }

    const decreaseLevel = () => {
        if (level > 0) setLevel(level - 1)
    }

    const handleInputChange = (evt:any) => {
        if (isNaN(evt.target.value)) return
        const newValue = +evt.target.value
        if (newValue > 19) {
            setLevel(19)
        } else if (newValue < 0) {
            setLevel(0)
        } else {
            setLevel(newValue)
        }
    }

    const handleStart = () => {
        startGame(level)
        closeModalWithListener()
    }

    return (
        <div ref={modalRef} className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h2 className="text-3xl font-bold text-center">Choose your starting level</h2>
            <div className="flex justify-evenly items-center w-full">
                <button className="text-6xl disabled:text-gray-400" disabled={level === 19}>
                    <MdOutlineArrowDropUp className="text-6xl" onClick={increaseLevel}/>
                </button>
                <input onChange={(evt) => handleInputChange(evt)}className="border text-center text-4xl w-24 aspect-square p-3"value={returnInputValue()}/>
                <button className="text-6xl disabled:text-gray-400" disabled={level === 0}>
                    <MdOutlineArrowDropDown className="text-6xl" onClick={decreaseLevel}/>
                </button>
            </div>
            <button className="modal-button" onClick={handleStart}>Start</button>
        </div>
    )
}

export default PreGame