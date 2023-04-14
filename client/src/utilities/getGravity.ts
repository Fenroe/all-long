import { getLevel } from "./getLevel"

export const getGravity = (lines: number) => {
    const level = getLevel(lines)
    if (level > 10) return 10
    return level
}
