export const getMutableArray = (readonlyArray: readonly number[]) => {
    return readonlyArray.filter((number) => number || !number)
}
