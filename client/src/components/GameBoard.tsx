import { useEffect, useRef } from 'react'
import { BoardRow } from './BoardRow'
import {
    getArrayFromNumber, rotateCross, rotateL, rotateReverseL,
    rotateLong, rotateZig, rotateReverseZig,
    getRandomPiece, adjustOccupiedTiles, checkForCompletedRows,
    combineCompletedRows, removeCompletedRows, getMutableArray, getLineScore,
    openModalWithListener, determineFallSpeed,
} from '../utilities'
import { useSnapshot } from 'valtio'
import { state } from '../state'
import { GamePiece, UserScore } from '../types'
import { defaultUserName, keyboardButtonCodes, localStorageKeys, modalContentsValues, numberOfGameboardRows, tetrominoNames, tetrominoOrientation } from '../constants'

export const GameBoard = () => {
    const requestRef = useRef(0)

    const lastUpdateTimeRef = useRef(0)

    const progressTimeRef = useRef(0)

    const snap = useSnapshot(state)

    const openPauseMenu = () => {
        state.gamePaused = true
        state.modalContents = modalContentsValues.pauseMenu
        openModalWithListener()
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
    
    const update = (time: number) => {
        if (snap.outro) return
        requestRef.current = requestAnimationFrame(update)
        if (snap.gamePaused) {
            return
        }
        if (!lastUpdateTimeRef.current) {
            lastUpdateTimeRef.current = time
        }
        const deltaTime = time - lastUpdateTimeRef.current
        progressTimeRef.current += deltaTime
        if (progressTimeRef.current > determineFallSpeed(snap.level)) {
            movePieceDown()
            progressTimeRef.current = 0
        } 
        lastUpdateTimeRef.current = time
    } 

    const spawnNewPiece = (occupiedTiles?: number[]) => {
        const occupiedTileReference = occupiedTiles ? occupiedTiles : getMutableArray(snap.occupiedTiles)
        const completedRows = checkForCompletedRows((occupiedTileReference))
        if (completedRows.length > 0) {
            let newOccupiedTiles = removeCompletedRows(combineCompletedRows(completedRows), getMutableArray(occupiedTileReference))
            newOccupiedTiles = adjustOccupiedTiles(completedRows, newOccupiedTiles)
            state.occupiedTiles = newOccupiedTiles
            const newLines = snap.lines + completedRows.length
            state.lines = newLines
            state.score += getLineScore(completedRows.length, snap.level)
            const newLevel = Math.floor(newLines / 10)
            if (snap.level < newLevel) state.level = newLevel
        }
        const nextPieceTilesArray: number[] = []
        snap.nextPieceTiles.forEach((coordinate) => nextPieceTilesArray.push(coordinate))
        state.activePieceTiles = nextPieceTilesArray
        state.pieceType = snap.nextPieceType
        let newPiece = getRandomPiece()
        if (newPiece === false || newPiece.name === state.nextPieceType) {
            newPiece = getRandomPiece(true) as GamePiece
        }
        state.nextPieceTiles = newPiece.defaultPosition
        state.nextPieceType = newPiece.name
        state.previewPieceTiles = newPiece.previewPosition
        state.pieceOrientation = tetrominoOrientation[0]
        const gameOverCheck = nextPieceTilesArray.filter((coordinate) => occupiedTileReference.includes(coordinate))
        if (gameOverCheck.length > 0) {
            state.gamePaused = true
            state.modalContents = modalContentsValues.scoreSubmission
            state.showModal = true
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
            piecePosition.forEach((coordinate) => {
                if (snap.occupiedTiles.includes(coordinate + 10) || coordinate >= 170) {
                    isValidMove = false
                }
            })
            if (isValidMove) {
                piecePosition = piecePosition.map((coordinate) => coordinate + 10)
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
            case tetrominoNames.cross:
                newCoordinates = rotateCross(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case tetrominoNames.lShape:
                newCoordinates = rotateL(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case tetrominoNames.reverseLShape:
                newCoordinates = rotateReverseL(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case tetrominoNames.long:
                newCoordinates = rotateLong(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case tetrominoNames.zigZag:
                newCoordinates = rotateZig(snap.activePieceTiles, snap.pieceOrientation)
                break;
            case tetrominoNames.reverseZigZag:
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
            const indexOfOrientation = tetrominoOrientation.indexOf(snap.pieceOrientation)
            state.pieceOrientation =
            indexOfOrientation === tetrominoOrientation.length - 1
            ? 
            tetrominoOrientation[0]
            :
            tetrominoOrientation[indexOfOrientation + 1]
        }
    }

    useEffect(() => {
        const handleKeyPress = (evt: KeyboardEvent) => {
            if (snap.outro || snap.gamePaused) return
            if (evt.key === keyboardButtonCodes.down) {
                userMovePieceDown()
            }
            if (evt.key === keyboardButtonCodes.left) {
                state.activePieceTiles = movePieceLeft()
            }
            if (evt.key === keyboardButtonCodes.right) {
                state.activePieceTiles = movePieceRight()
            }
            if (evt.key === keyboardButtonCodes.up) {
                rotatePiece()
            }
            if (evt.code === keyboardButtonCodes.spacebar) {
                hardDrop()
            }
            if (evt.code === keyboardButtonCodes.escape) {
                if (!state.gamePaused && !state.showModal) {
                    openPauseMenu()
                }
            }
        }

        // Don't pass handleKeyPress in an arrow function as it won't be logically equal to the function you try to remove later
        document.addEventListener('keydown', handleKeyPress)

        return () => {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, [snap])

    useEffect(() => {
        requestRef.current = requestAnimationFrame(update)
        return () => cancelAnimationFrame(requestRef.current)
    }, [snap])

    return (
        <div className="gameboard">
            {getArrayFromNumber(numberOfGameboardRows).map((row) =>
            <BoardRow
            key={row}
            rowId={row}
            />
            )}
        </div>
    )
}