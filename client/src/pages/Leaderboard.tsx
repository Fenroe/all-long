import { useSnapshot } from 'valtio'
import state from '../state'
import { getLevel } from '../utilities'

const Leaderboard = () => {
    const snap = useSnapshot(state)

    return (
        <div>
            <div>{snap.score}</div>
            <div>{getLevel(snap.lines)}</div>
        </div>
        
    )
}

export default Leaderboard