import Tile from './Tile'
import { getArrayFromNumber } from '../utilities'

const BoardRow = ({ rowId }: {rowId: number }) => {
    const tilesPerRow = 10

    return (
        <div className="flex flex-row">
            {getArrayFromNumber(tilesPerRow).map((tile) =>
            <Tile
            key={tile}
            id={+`${rowId}${tile}`}
            />)}
        </div>
    )
}

export default BoardRow