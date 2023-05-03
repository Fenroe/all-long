import { useSnapshot } from "valtio"
import { state } from "../state"

export const Tile = ({ type, id }: {type?: string, id: number }) => {
  const snap = useSnapshot(state)

  const checkForColour = () => {
    return snap.activePieceTiles.includes(id) && type !== 'preview' || snap.occupiedTiles.includes(id) && type !== 'preview'
  }
  
  return (
    <div className={snap.darkMode ? "gametile-dark" : "gametile"} style={checkForColour() ? { backgroundColor: '#9394a5', border: '1px solid gray', borderBottom: 'none' } : {}}></div>
  )
}
