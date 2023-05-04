import { useSnapshot } from 'valtio'
import { state } from '../state'
import { useState } from 'react'
import { pageContentsValues } from '../constants'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getRemoteScores } from '../utilities'

const pageViewValues = {
    localScores: 'My Scores',
    leaderboard: 'Leaderboard',
}

const sortingMethodValues = {
    highestFirst: 'High Scores',
    recentFirst: 'Most Recent'
}

export const Leaderboard = () => {
    const snap = useSnapshot(state)

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ['leaderboard'],
        queryFn: getRemoteScores,
    })

    const [pageView, setPageView] = useState(pageViewValues.localScores)

    const [sortingMethod, setSortingMethod] = useState(sortingMethodValues.highestFirst)

    const sortScores = () => {
        const scores = pageView === pageViewValues.localScores ? snap.localScores.filter((score) => score.id || !score.id) : query.data as Array<any>
        if (pageView === pageViewValues.localScores && sortingMethod === sortingMethodValues.recentFirst) {
            scores.sort((a, b) => b.id - a.id)
        } else {
            scores.sort((a, b) => b.score - a.score)
        }
        return scores
    }

    return (
        <div className={snap.darkMode ? "leaderboard-dark": "leaderboard"}>
            <div className="container max-w-[900px]">
                <div className="text-2xl w-full h-12 flex justify-evenly">
                    <button className={pageView === pageViewValues.localScores ? 'font-bold': ''}onClick={() => setPageView(pageViewValues.localScores)}>{pageViewValues.localScores}</button>
                    <button className={pageView === pageViewValues.leaderboard ? 'font-bold': ''}onClick={() => setPageView(pageViewValues.leaderboard)}>{pageViewValues.leaderboard}</button>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-3xl font-bold pt-6">{pageView}</h1>
                    {pageView === pageViewValues.localScores &&
                        <div className="text-xl py-3 mb-3 px-6 flex border w-full">
                            <button className={sortingMethod === sortingMethodValues.recentFirst ? 'font-bold flex-1' : 'flex-1'} onClick={() => setSortingMethod(sortingMethodValues.recentFirst)}>{sortingMethodValues.recentFirst}</button>
                            <button className={sortingMethod === sortingMethodValues.highestFirst ? 'font-bold flex-1' : 'flex-1'} onClick={() => setSortingMethod(sortingMethodValues.highestFirst)}>{sortingMethodValues.highestFirst}</button>
                        </div>
                    }

                    <section className={snap.darkMode ? "scores-container-dark": "scores-container"}>
                        {sortScores().length < 1 &&
                        <h2 className="text-xl">You haven't submitted a score yet.</h2>}
                        {sortScores().map((score) =>
                        <div className="flex justify-between w-full text-xl bg-inherit" key={score.id}>
                            <span className="font-bold bg-inherit flex-1">{sortScores().indexOf(score)+1}</span>
                            <span className="font-bold bg-inherit flex-1">{score.name}</span>
                            <span className="bg-inherit flex-[6] text-right">{score.score}</span>
                        </div>)}
                    </section>
                    <button className={snap.darkMode ? "button-dark":"button"} onClick={() => state.pageContent = pageContentsValues.home}>Home</button>
                </div>
            </div>
        </div>
        
    )
}
