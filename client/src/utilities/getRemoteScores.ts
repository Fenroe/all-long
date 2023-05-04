import axios from "axios"

export const getRemoteScores = async () => {
    try {
        const remoteScores = await axios.get(import.meta.env.VITE_GET_SCORES_URL)
        return remoteScores.data
    } catch (err) {
        return []
    }

}