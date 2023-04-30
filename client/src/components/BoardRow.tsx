import { Tile } from './Tile'
import { getArrayFromNumber } from '../utilities'
import { tilesPerGameboardRow } from '../constants'

export const BoardRow = ({ rowId }: {rowId: number }) => {
    return (
        <div className="flex flex-row">
            {getArrayFromNumber(tilesPerGameboardRow).map((tile) =>
            <Tile
            key={tile}
            id={+`${rowId}${tile}`}
            />)}
        </div>
    )
}
