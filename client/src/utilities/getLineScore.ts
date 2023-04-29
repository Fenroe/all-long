export const getLineScore = (numberOfRows: number, level: number) => {
    const modifier = level + 1
    switch (numberOfRows) {
        case 1:
            return 40 * modifier
        case 2:
            return 100 * modifier
        case 3:
            return 300 * modifier
        default:
            return 1200 * modifier
    }
}
