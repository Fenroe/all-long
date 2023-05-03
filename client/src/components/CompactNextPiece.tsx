import { numberOfPreviewRows } from "../constants"
import { getArrayFromNumber } from "../utilities"
import { PreviewRow } from "./PreviewRow"

export const CompactNextPiece = () => {
    return (
        <div className="flex bg-[#d2d3db] text-xl font-mono">
            <h2 className="text-center text-3xl font-bold mb-2 bg-inherit">Next</h2>
            {getArrayFromNumber(numberOfPreviewRows).map((row) =>
            <PreviewRow 
            key={row}
            rowId={row}
            />)}
        </div>
    )
}