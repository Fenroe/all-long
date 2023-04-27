import Controls from "./Controls"
import ReactDOM from "react-dom"
import { useSnapshot } from "valtio"
import state from "../state"
import FocusLock from 'react-focus-lock'
import Scores from "./Scores"
import PauseMenu from "./PauseMenu"
import PostGame from "./PostGame"


const Modal = () => {
    const snap = useSnapshot(state)

    const renderModalContents = () => {
        if (snap.outro) {
            return <PostGame />
        }
        switch(snap.modalContents) {
            case 'Controls':
                return <Controls />
            case 'Scores':
                return <Scores />
            case 'Pause':
                return <PauseMenu />
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
