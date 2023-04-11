import { useEffect } from 'react'
import BoardRow from './BoardRow'
import { getArrayFromNumber, rotateCross, rotateL, rotateReverseL, rotateLong, rotateZig, rotateReverseZig, pieceOrientationArray } from '../utilities'
import { useSnapshot } from 'valtio'
import state from '../state'

// 10 wide x 18 tall
const GameBoard = () => {
    const snap = useSnapshot(state)

    const rows = 18

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
            snap.activePieceTiles.forEach((coordinate) => {
                console.log(coordinate)
                state.occupiedTiles.push(coordinate)
            })
            const nextPieceTilesArray: number[] = []
            snap.nextPieceTiles.forEach((coordinate) => nextPieceTilesArray.push(coordinate))
            state.activePieceTiles = nextPieceTilesArray
        }
        const newArray: number[] = []
        state.activePieceTiles.forEach((coordinate) => {
            newArray.push(coordinate + 10)
        })
        return newArray
    }

    const movePieceLeft = () => {
        let isValidMove = true
        snap.activePieceTiles.forEach((coordinate) => {
            if (coordinate % 10 === 0) {
                isValidMove = false
            }
            if (snap.occupiedTiles.includes(coordinate)) {
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
            if (snap.occupiedTiles.includes(coordinate)) {
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
                state.activePieceTiles = movePieceDown()
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
        }

        // Don't pass handleKeyPress in an arrow function as it won't be logically equal to the function you try to remove later
        document.addEventListener('keydown', handleKeyPress)

        const interval = setInterval(() => {
            if (!snap.gamePaused) state.activePieceTiles = movePieceDown()
        }, 1000)

        

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