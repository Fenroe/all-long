import { useSnapshot } from "valtio"
import state from "../state"

const Tile = ({ id }: {id: number }) => {
  const snap = useSnapshot(state)

  const checkForColour = () => {
    return snap.activePieceTiles.includes(id) || snap.occupiedTiles.includes(id)
  }
  return (
    <div className="w-8 h-8 tile" style={checkForColour() ? { backgroundColor: '#9394a5', border: '1px solid gray', borderBottom: 'none' } : {}}></div>
  )
}

export default Tile