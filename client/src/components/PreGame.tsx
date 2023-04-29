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

    const increaseLevel = () => setLevel(level + 1)

    const decreaseLevel = () => setLevel(level - 1)

    return (
        <div ref={modalRef} className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h2 className="text-3xl font-bold text-center">Choose your starting level</h2>
            <div className="flex justify-evenly items-center w-full">
            <MdOutlineArrowDropUp className="text-4xl" onClick={increaseLevel}/>
            <input className="border text-center text-4xl w-12"value={level}/>
            <MdOutlineArrowDropDown className="text-4xl" onClick={decreaseLevel}/>
            </div>
            <button onClick={startGame}>Start</button>
        </div>
    )
}

export default PreGame