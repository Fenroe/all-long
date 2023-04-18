import { useSnapshot } from "valtio"
import state from "../state"

const PreviewTile = ({ id } : { id: number }) => {
    const snap = useSnapshot(state)

    const previewCheckForColour = () => {
        return snap.previewPieceTiles.includes(id)
    }
    return (
        <div className="w-8 h-8 tile" style={ previewCheckForColour() ? { backgroundColor: '#9394a5', border: '1px solid gray', borderBottom: 'none' } : {}}></div>
    )
}

export default PreviewTile