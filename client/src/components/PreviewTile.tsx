import { useSnapshot } from "valtio"
import { state } from "../state"

export const PreviewTile = ({ id } : { id: number }) => {
    const snap = useSnapshot(state)

    const previewCheckForColour = () => {
        return snap.previewPieceTiles.includes(id)
    }
    return (
        <div className={snap.darkMode ? "gametile-dark" : "gametile"} style={ previewCheckForColour() ? { backgroundColor: '#9394a5', border: '1px solid gray', borderBottom: 'none' } : {}}></div>
    )
}
