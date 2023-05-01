import { useSnapshot } from "valtio"
import { state } from "../state"
import { closeModalWithListener } from "../utilities"
import { useOutsideClick } from "../hooks"

export const Controls = () => {
    const snap = useSnapshot(state)

    const modalRef = useOutsideClick(closeModalWithListener)
    
    return (
        <div ref={modalRef} className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            <h1 className="text-4xl text-center mt-6 font-bold">Controls</h1>
            <section className="flex w-full h-full items-center">
                <div className="controls-section items-end">
                    <span className="controls-key">Left Arrow</span>
                    <span className="controls-key">Right Arrow</span>
                    <span className="controls-key">Up Arrow</span>
                    <span className="controls-key">Down Arrow</span>
                    <span className="controls-key">Space Bar</span>
                    <span className="controls-key">Esc</span>
                </div>
                <div className="controls-section items-start">
                    <span className="controls-value">Move Left</span>
                    <span className="controls-value">Move Right</span>
                    <span className="controls-value">Rotate</span>
                    <span className="controls-value">Soft Drop</span>
                    <span className="controls-value">Hard Drop</span>
                    <span className="controls-value">Pause</span>
                </div>
            </section>
            <button className="modal-button" onClick={closeModalWithListener}>Close</button>
        </div>
    )
}