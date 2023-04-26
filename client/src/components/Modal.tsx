import Controls from "./Controls"
import ReactDOM from "react-dom"
import { useSnapshot } from "valtio"
import state from "../state"
import FocusLock from 'react-focus-lock'
import Scores from "./Scores"


const Modal = () => {
    const snap = useSnapshot(state)

    const renderModalContents = () => {
        switch(snap.modalContents) {
            case 'Controls':
                return <Controls />
            case 'Scores':
                return <Scores />
            default:
                return <Controls />
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className="modal-background" style={snap.showModal ? { visibility: 'visible', opacity: '1' } : {}}/>
            <FocusLock>
                {renderModalContents()}
            </FocusLock>

        </>,
        document.getElementById('modal')!  
    )
}

export default Modal
