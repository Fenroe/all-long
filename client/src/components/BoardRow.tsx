import React from 'react'
import Tile from './Tile'
import { useSnapshot } from 'valtio'
import state from '../state'
import { getArrayFromNumber } from '../utilities'

const BoardRow = () => {
    const snap = useSnapshot(state)

    return (
        <div>
            {getArrayFromNumber(snap.tilesPerRow).map((tile) =>
            <Tile key={tile}/>)}
        </div>
    )
}

export default BoardRow