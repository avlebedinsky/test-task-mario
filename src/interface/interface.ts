export interface ICharacter {
    name: string,
    lvl: number,
}

export interface IStat {
    name: string,
    shortName: string,
    value: number,
    type: string,
}

export interface ISkill {
    name: string,
    level: number,
}

export interface IMainParameter {
    name: string,
    shortName: string,
    value: number,
    type: string,
    icon: string,
    skills: Array<ISkill>

}

export interface IStatInform {
    key: string
    stat: string,
    value: number,
    valueOf?: any,
}

