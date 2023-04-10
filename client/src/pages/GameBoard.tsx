import React from 'react'
import { BoardRow } from '../components'
import { useSnapshot } from 'valtio'
import state from '../state'
import { getArrayFromNumber } from '../utilities'

// 10 wide x 18 tall
const GameBoard = () => {
    const snap = useSnapshot(state)

    return (
        <div>
            {getArrayFromNumber(snap.rows).map((row) =>
            <BoardRow key={row} />
            )}
        </div>
    )
}

export default GameBoard