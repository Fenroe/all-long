export const getLevel = (lines: number) => {
    const level = Math.ceil(lines / 10) 
    if (level < 1) return 1
    return level
}
