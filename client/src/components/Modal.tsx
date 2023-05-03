import { Controls } from "./Controls"
import ReactDOM from "react-dom"
import { useSnapshot } from "valtio"
import { state } from "../state"
import FocusLock from 'react-focus-lock'
import { Scores } from "./Scores"
import { PauseMenu } from "./PauseMenu"
import { PreGame } from "./PreGame"
import { PostGame } from "./PostGame"
import { modalContentsValues } from "../constants"


export const Modal = () => {
    const snap = useSnapshot(state)

    const renderModalContents = () => {
        switch(snap.modalContents) {
            case modalContentsValues.controls:
                return <Controls />
            case modalContentsValues.scores:
                return <Scores />
            case modalContentsValues.pauseMenu:
                return <PauseMenu />
            case modalContentsValues.levelSelect:
                return <PreGame />
            case modalContentsValues.scoreSubmission:
                return <PostGame />
            default:
                return <Controls />
        }
    }

    return ReactDOM.createPortal(
        <>
            <div className={snap.darkMode ? "modal-background-dark":"modal-background"} style={snap.showModal ? { visibility: 'visible', opacity: '1' } : {}}/>
            <FocusLock>
                {renderModalContents()}
            </FocusLock>

        </>,
        document.getElementById('modal') as HTMLElement
    )
}
