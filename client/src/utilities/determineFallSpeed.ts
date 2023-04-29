export const determineFallSpeed = (level:number) => {
    if (level === 0) {
        return 800
    } else if (level < 9) {
        return 800 - 85*level
    } else if (level < 10) {
        return 90
    } else if (level < 13) {
        return 75
    } else if (level < 16) {
        return 60
    } else if (level < 19) {
        return 45
    } else if (level < 29) {
        return 30
    } else {
        return 15
    }
}