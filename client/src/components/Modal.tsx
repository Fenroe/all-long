import ReactDOM from "react-dom"
import { useSnapshot } from "valtio"
import state from "../state"

const Modal = () => {
    const snap = useSnapshot(state)

    if (!snap.showModal) return null
    
    return ReactDOM.createPortal(
        <>
            <div className="modal-background"/>
            <div className="modal relative flex flex-col items-center justify-around">
                <h1 className="text-4xl text-center mt-6">Controls</h1>
                <section className="flex w-full h-full items-center">
                    <div className="flex flex-col items-end w-1/2 p-3 gap-6">
                        <span className="text-xl">Left Arrow</span>
                        <span className="text-xl">Right Arrow</span>
                        <span className="text-xl">Up Arrow</span>
                        <span className="text-xl">Down Arrow</span>
                        <span className="text-xl">Space Bar</span>
                        <span className="text-xl">Esc</span>
                    </div>
                    <div className="flex flex-col items-start w-1/2 p-3 gap-6">
                        <span className="text-xl">Move Left</span>
                        <span className="text-xl">Move Right</span>
                        <span className="text-xl">Rotate</span>
                        <span className="text-xl">Soft Drop</span>
                        <span className="text-xl">Hard Drop</span>
                        <span className="text-xl">Pause</span>
                    </div>
                </section>
                <button className="text-2xl w-24 h-12 rounded-md border-2 border-black" onClick={() => state.showModal = false}>Close</button>
            </div>
        </>,
        document.getElementById('modal')!  
    )
}

export default Modal
