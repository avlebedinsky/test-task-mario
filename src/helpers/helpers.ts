import {IMainParameter, ISkill, IStatInform} from '../interface/interface';

export const getRandomIndexElements = (arr: Array<IMainParameter>) => {
    const mainIdx = Math.floor(Math.random() * arr.length)
    const idx = Math.floor(Math.random() * arr[mainIdx].skills.length)
    return {mainIdx, idx}
};

export const getStatValue = (stats: Array<IStatInform>, key: string) => {
    const stat = stats.find((s) => s.key === key)
    return stat ?? {value: 0}
};

export const getMainParameterValue = (mainParameter: Array<IMainParameter>, shortName: string) => {
    const parameter = mainParameter.find((p) => p.shortName === shortName)
    return parameter ? parameter.value : {value: 0}
};

export const getLevelName = (levels: Array<ISkill>, level: number) => {
    const l = levels.find(l => l.level === level)
    return l ? l.name : ''
}
