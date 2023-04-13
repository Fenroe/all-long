export const getLineScore = (numberOfRows: number, level: number) => {
    switch (numberOfRows) {
        case 1:
            return 100 * level
        case 2:
            return 300 * level
        case 3:
            return 500 * level
        default:
            return 800 * level
    }
}
