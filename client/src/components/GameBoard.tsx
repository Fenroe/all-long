import { useEffect } from 'react'
import BoardRow from './BoardRow'
import {
    getArrayFromNumber, rotateCross, rotateL, rotateReverseL,
    rotateLong, rotateZig, rotateReverseZig, pieceOrientationArray,
    getRandomPiece, adjustOccupiedTiles, checkForCompletedRows,
    combineCompletedRows, removeCompletedRows, getMutableArray, getLineScore
} from '../utilities'
import { useSnapshot } from 'valtio'
import state from '../state'

// 10 wide x 18 tall
const GameBoard = () => {
    const snap = useSnapshot(state)

    const rows: number = 18

    const spawnNewPiece = (occupiedTiles?: number[]) => {
        const occupiedTileReference = occupiedTiles ? occupiedTiles : getMutableArray(snap.occupiedTiles)
        const completedRows = checkForCompletedRows((occupiedTileReference))
        if (completedRows.length > 0) {
            let newOccupiedTiles = removeCompletedRows(combineCompletedRows(completedRows), getMutableArray(occupiedTileReference))
            newOccupiedTiles = adjustOccupiedTiles(completedRows, newOccupiedTiles)
            state.occupiedTiles = newOccupiedTiles
            state.lines += completedRows.length
            state.score += getLineScore(completedRows.length, Math.ceil(snap.lines / 10) || 1)
        }
        const nextPieceTilesArray: number[] = []
        snap.nextPieceTiles.forEach((coordinate) => nextPieceTilesArray.push(coordinate))
        state.activePieceTiles = nextPieceTilesArray
        state.pieceType = snap.nextPieceType
        const newPiece = getRandomPiece()
        state.nextPieceTiles = newPiece.defaultPosition
        state.nextPieceType = newPiece.name
        state.pieceOrientation = 'spawn'
        const gameOverCheck = nextPieceTilesArray.filter((coordinate) => occupiedTileReference.includes(coordinate))
        if (gameOverCheck.length > 0) state.outro = true
    }

    const movePieceDown = () => {
        let isValidMove = true
        snap.activePieceTiles.forEach((coordinate) => {
            if (coordinate + 10 >= 180) {
                isValidMove = false
            }
            if (snap.occupiedTiles.includes(coordinate + 10)) {
                isValidMove = false
            }
        })
        if (!isValidMove) {
            const mutableOccupiedTiles = getMutableArray(snap.occupiedTiles)
            snap.activePieceTiles.forEach((coordinate) => {
                mutableOccupiedTiles.push(coordinate)
            })
            state.score += snap.dropPoints
            state.dropPoints = 0
            state.occupiedTiles = mutableOccupiedTiles
            spawnNewPiece(mutableOccupiedTiles)
        } else {
            const newArray: number[] = []
            snap.activePieceTiles.forEach((coordinate) => {
                newArray.push(coordinate + 10)
            })
            state.activePieceTiles = newArray
        }
    }

    const userMovePieceDown = () => {
        movePieceDown()
        state.dropPoints += 1
    }

    const hardDrop = () => {
        let piecePosition: number[] = getMutableArray(snap.activePieceTiles)
        let hardDropPoints = 0
        let isValidMove = true
        while (isValidMove) {
            piecePosition = piecePosition.map((coordinate) => coordinate + 10)
            piecePosition.forEach((coordinate) => {
                if (snap.occupiedTiles.includes(coordinate + 10) || coordinate >= 170) {
                    isValidMove = false
                }
            })
            if (isValidMove) {
                hardDropPoints += 2
            }
        }
        const mutableOccupiedTiles = getMutableArray(snap.occupiedTiles)
        piecePosition.forEach((coordinate) => {
            mutableOccupiedTiles.push(coordinate)
        })
        state.occupiedTiles = mutableOccupiedTiles
        state.score += hardDropPoints
        spawnNewPiece(mutableOccupiedTiles)
    }

    const movePieceLeft = () => {
        let isValidMove = true
        snap.activePieceTiles.forEach((coordinate) => {
            if (coordinate % 10 === 0) {
                isValidMove = false
            }
            if (snap.occupiedTiles.includes(coordinate - 1)) {
                isValidMove = false
            }
        })
        if (!isValidMove) {
            const newArray: number[] = []
            snap.activePieceTiles.forEach((coordinate) => newArray.push(coordinate))
            return newArray
        }
        const newArray: number[] = []
        snap.activePieceTiles.forEach((coordinate) => {
            newArray.push(coordinate - 1)
        })
        return newArray
    }

    const movePieceRight = () => {
        let isValidMove = true
        snap.activePieceTiles.forEach((coordinate) => {
            if (coordinate % 10 === 9) {
                isValidMove = false
            }
            if (snap.occupiedTiles.includes(coordinate + 1)) {
                isValidMove = false
            }
        })
        if (!isValidMove) {
            const newArray: number[] = []
            snap.activePieceTiles.forEach((coordinate) => newArray.push(coordinate))
            return newArray
        }
        const newArray: number[] = []
        state.activePieceTiles.forEach((coordinate) => {
            newArray.push(coordinate + 1)
        })
        return newArray
    }

    const rotatePiece = () => {
        let newCoordinates: number[] = []
        switch(snap.pieceType) {
            case 'cross':
                newCoordinates = rotateCross(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case 'L':
                newCoordinates = rotateL(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case 'reverse L':
                newCoordinates = rotateReverseL(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case 'long':
                newCoordinates = rotateLong(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case 'zig':
                newCoordinates = rotateZig(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case 'reverse zig':
                newCoordinates = rotateReverseZig(snap.activePieceTiles, snap.pieceOrientation)
            default:
                break;
        }
        if (newCoordinates.length < 1) return
        let isValidMove = true
        newCoordinates.forEach((coordinate) => {
            if (coordinate > 180) isValidMove = false
            if (snap.occupiedTiles.includes(coordinate)) isValidMove = false
            if (coordinate % 10 === 9 && newCoordinates.filter((number) => number === coordinate + 1).length > 0) isValidMove = false
            if (coordinate % 10 === 0 && newCoordinates.filter((number) => number === coordinate - 1).length > 0) isValidMove = false
        })
        if (isValidMove) {
            state.activePieceTiles = newCoordinates
            const indexOfOrientation = pieceOrientationArray.indexOf(snap.pieceOrientation)
            state.pieceOrientation = indexOfOrientation === pieceOrientationArray.length - 1 ? pieceOrientationArray[0] : pieceOrientationArray[indexOfOrientation + 1]
        }
    }

    useEffect(() => {
        const handleKeyPress = (evt: KeyboardEvent) => {
            if (evt.key === 'ArrowDown') {
                userMovePieceDown()
            }
            if (evt.key === 'ArrowLeft') {
                state.activePieceTiles = movePieceLeft()
            }
            if (evt.key === 'ArrowRight') {
                state.activePieceTiles = movePieceRight()
            }
            if (evt.key === 'ArrowUp') {
                rotatePiece()
            }
            if (evt.code === 'Space') {
                hardDrop()
            }
        }

        // Don't pass handleKeyPress in an arrow function as it won't be logically equal to the function you try to remove later
        document.addEventListener('keydown', handleKeyPress)

        const interval = setInterval(() => {
            movePieceDown()
        }, 500)

        

        return () => {
            document.removeEventListener('keydown', handleKeyPress)

            clearInterval(interval)  
        }
    }, [snap])

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