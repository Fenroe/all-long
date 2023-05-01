import { tilesPerPreviewRow } from "../constants"
import { getArrayFromNumber } from "../utilities"
import { PreviewTile } from "./PreviewTile"

export const PreviewRow = ({ rowId }: { rowId: number }) => {
    return (
        <div className="flex flex-row">
            {getArrayFromNumber(tilesPerPreviewRow).map((tile) =>
            <PreviewTile
            key={tile}
            id={+`${rowId}${tile}`}
            />)}
        </div>
    )
}
