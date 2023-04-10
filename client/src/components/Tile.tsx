import { useSnapshot } from "valtio"
import state from "../state"

const Tile = ({ id }: {id: number }) => {
  const snap = useSnapshot(state)

  return (
    <div className="w-8 h-8 bg-blue-100" style={snap.activePieceTiles.includes(id) ? { backgroundColor: '#fff' } : {}}></div>
  )
}

export default Tile