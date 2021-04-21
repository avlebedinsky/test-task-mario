export const statsActionTypes = {
    SET_ALL_STATS: 'STATS.SET_ALL_STATS',
    SET_STAT: 'STATS.SET_STAT',
    SET_HIT: 'STATS.SET_HIT'
}

export const statsAction = {
    setAllStat: (payload: any) => ({type: statsActionTypes.SET_ALL_STATS, payload}),
    setStat: (payload: any) => ({type: statsActionTypes.SET_STAT, payload}),
    setHit: (payload: any) => ({type: statsActionTypes.SET_HIT, payload})
}