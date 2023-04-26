import { useSnapshot } from "valtio"
import state from "../state"

const PostGame = () => {
    const snap = useSnapshot(state)

    return (
        <div className="modal relative flex flex-col items-center justify-around" style={snap.showModal ? { visibility: 'visible', transform: 'translate(-50%, -50%)', opacity: '1' } : {}}>
            
        </div>
    )
}

export default PostGame