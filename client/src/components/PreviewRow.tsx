import { getArrayFromNumber } from "../utilities"
import { PreviewTile } from "./PreviewTile"

export const PreviewRow = ({ rowId }: { rowId: number }) => {
    const numberOfTies = 6

    return (
        <div className="flex flex-row">
            {getArrayFromNumber(numberOfTies).map((tile) =>
            <PreviewTile
            key={tile}
            id={+`${rowId}${tile}`}
            />)}
        </div>
    )
}
