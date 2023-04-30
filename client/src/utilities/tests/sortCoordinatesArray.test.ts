import { sortCoordinatesArray } from "../sortCoordinatesArray";
import { describe, expect, it } from 'vitest'

describe('happy path', () => {
    it('returns a mutable array of numbers', () => {
        const numberArray:readonly number[] = [1, 2, 3, 4]
        const expectedResult: number[] = [1, 2, 3, 4]
        expect(sortCoordinatesArray(numberArray)).toEqual(expectedResult)
    })

    it('handles 0 correctly', () => {
        const numberArray: readonly number[] = [0, 1, 2, 3]
        const expectedResult: number[] = [0, 1, 2, 3]
        expect(sortCoordinatesArray(numberArray)).toEqual(expectedResult)
    })

    it('sorts array properly #1', () => {
        const numberArray: readonly number[] = [6, 5, 4, 3]
        const expectedResult: number[] = [3, 4, 5, 6]
        expect(sortCoordinatesArray(numberArray)).toEqual(expectedResult)
    })

    it('sorts array properly #2', () => {
        const numberArray: readonly number[] = [55, 45, 35, 25]
        const expectedResult: number[] = [25, 35, 45, 55]
        expect(sortCoordinatesArray(numberArray)).toEqual(expectedResult)
    })
})
