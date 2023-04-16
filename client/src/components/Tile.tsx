import { useSnapshot } from "valtio"
import state from "../state"

const Tile = ({ type, id }: {type?: string, id: number }) => {
  const snap = useSnapshot(state)

  const checkForColour = () => {
    return snap.activePieceTiles.includes(id) && type !== 'preview' || snap.occupiedTiles.includes(id) && type !== 'preview'
  }
  return (
    <div className="w-8 h-8 tile" style={checkForColour() ? { backgroundColor: '#9394a5', border: '1px solid gray', borderBottom: 'none' } : {}}></div>
  )
}

export default Tile