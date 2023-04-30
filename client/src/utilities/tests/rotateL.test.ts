import { rotateL } from "../rotateL";
import { describe, it, expect } from 'vitest'

describe('happy path', () => {
    it('rotates from spawn to upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 23]
        const newCoordinates: number[] = [4, 14, 24, 3]
        expect(rotateL(currentCoordinates, 'spawn')).toEqual(newCoordinates)
    })

    it('rotates from upright to reverse spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 3]
        const newCoordinates: number[] = [13, 14, 15, 5]
        expect(rotateL(currentCoordinates, 'upright')).toEqual(newCoordinates)
    })

    it('rotates from reverse spawn to reverse upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 5]
        const newCoordinates: number[] = [4, 14, 24, 25]
        expect(rotateL(currentCoordinates, 'reverse spawn')).toEqual(newCoordinates)
    })

    it('rotates from reverse upright to spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 25]
        const newCoordinates: number[] = [13, 14, 15, 23]
        expect(rotateL(currentCoordinates, 'reverse upright')).toEqual(newCoordinates)
    })
})
