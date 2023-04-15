import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../state'
import Tile from './Tile'

const GameInfo = () => {
    const snap = useSnapshot(state)

    return (
        <div>
            <h2>Next</h2>
            <div></div>
        </div>
    )
}

export default GameInfo