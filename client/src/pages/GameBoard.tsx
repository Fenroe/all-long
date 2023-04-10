import { useEffect } from 'react'
import { BoardRow } from '../components'
import { getArrayFromNumber, movePieceDown, movePieceLeft, movePieceRight } from '../utilities'
import { useSnapshot } from 'valtio'
import state from '../state'

// 10 wide x 18 tall
const GameBoard = () => {
    const snap = useSnapshot(state)

    const rows = 18

    useEffect(() => {
        document.addEventListener('keydown', (evt) => {
            if (evt.key === 'ArrowDown') {
                state.activePieceTiles = movePieceDown()
            }
            if (evt.key === 'ArrowLeft') {
                state.activePieceTiles = movePieceLeft()
            }
            if (evt.key === 'ArrowRight') {
                state.activePieceTiles = movePieceRight()
            }
        })

        const interval = setInterval(() => {
            state.activePieceTiles = movePieceDown()
        }, 1000)

        

        return () => {
            document.removeEventListener('keydown', (evt) => {
                if (evt.key === 'ArrowDown') {
                    state.activePieceTiles = movePieceDown()
                }
                if (evt.key === 'ArrowLeft') {
                    state.activePieceTiles = movePieceLeft()
                }
                if (evt.key === 'ArrowRight') {
                    state.activePieceTiles = movePieceRight()
                }
            })

            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {getArrayFromNumber(rows).map((row) =>
            <BoardRow
            key={row}
            rowId={row}
            />
            )}
        </div>
    )
}

export default GameBoard