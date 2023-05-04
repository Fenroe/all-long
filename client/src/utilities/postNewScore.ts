import axios from "axios"

export const postNewScore = async (
    score:number,
    name:string,
    lines:number,
    level:number
    ) => {
        try {
            await axios.post(import.meta.env.VITE_POST_SCORE_URL, {
                name,
                score,
                lines,
                level,
            })
        } catch (err) {
            console.log(err)
        }
}