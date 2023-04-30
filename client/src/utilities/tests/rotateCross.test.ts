import { rotateCross } from "../rotateCross";
import { describe, expect, it } from 'vitest'

describe('happy path', () => {
    it('rotates from spawn to upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 24]
        const newCoordinates: number[] = [4, 14, 24, 13]
        expect(rotateCross(currentCoordinates, 'spawn')).toEqual(newCoordinates)
    })

    it('rotates from upright to reverse spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 13]
        const newCoordinates: number[] = [13, 14, 15, 4]
        expect(rotateCross(currentCoordinates, 'upright')).toEqual(newCoordinates)
    })

    it('rotates from reverse spawn to reverse upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 4]
        const newCoordinates: number[] = [4, 14, 24, 15]
        expect(rotateCross(currentCoordinates, 'reverse spawn')).toEqual(newCoordinates)
    })

    it('rotates from reverse upright to spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 15]
        const newCoordinates: number[] = [13, 14, 15, 24]
        expect(rotateCross(currentCoordinates, 'reverse upright')).toEqual(newCoordinates)
    })
})
