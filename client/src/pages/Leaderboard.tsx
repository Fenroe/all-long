import { useSnapshot } from 'valtio'
import { state } from '../state'

export const Leaderboard = () => {
    const snap = useSnapshot(state)

    return (
        <div className="flex flex-col items-center w-screen h-screen">
            <div className="container max-w-[900px]">
                <div className="text-2xl w-full h-12 flex justify-evenly">
                    <button>My Scores</button>
                    <button>Leaderboard</button>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold pt-6">My Scores</h1>
                    <div className="text-xl py-3 mb-3 px-6 flex border w-full">
                        <button className="flex-1">Most Recent</button>
                        <button className="flex-1">Highest to Lowest</button>
                    </div>
                    <section className="flex flex-col w-full items-center gap-3 px-5">
                        {snap.localScores.length < 1 &&
                        <h2>You haven't submitted a score yet.</h2>}
                        {snap.localScores.map((score) =>
                        <div className="flex justify-between w-full text-xl bg-inherit" key={score.id}>
                            <span className="font-bold bg-inherit">{score.name}</span>
                            <span className="bg-inherit">{score.score}</span>
                        </div>)}
                    </section>
                </div>
            </div>
        </div>
        
    )
}
