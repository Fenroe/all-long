import rotateReverseL from "../rotateReverseL";
import { describe, expect, it } from 'vitest'

describe('happy path', () => {
    it('rotates from spawn to upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 25]
        const newCoordinates: number[] = [4, 14, 24, 5]
        expect(rotateReverseL(currentCoordinates, 'spawn')).toEqual(newCoordinates)
    })

    it('rotates from upright to reverse spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 5]
        const newCoordinates: number[] = [13, 14, 15, 3]
        expect(rotateReverseL(currentCoordinates, 'upright')).toEqual(newCoordinates)
    })

    it('rotates from reverse spawn to reverse upright', () => {
        const currentCoordinates: readonly number[] = [13, 14, 15, 3]
        const newCoordinates: number[] = [4, 14, 24, 23]
        expect(rotateReverseL(currentCoordinates, 'reverse spawn')).toEqual(newCoordinates)
    })

    it('rotates from reverse upright to spawn', () => {
        const currentCoordinates: readonly number[] = [4, 14, 24, 23]
        const newCoordinates: number[] = [13, 14, 15, 25]
        expect(rotateReverseL(currentCoordinates, 'reverse upright')).toEqual(newCoordinates)
    })
})
