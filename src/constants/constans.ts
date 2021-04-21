import {ICharacter, IMainParameter, ISkill, IStatInform} from '../interface/interface';

export const LIFE = 'life'
export const EVASION = 'evasion'
export const VITALITY = 'vitality'

 export const CHARACTER: ICharacter = {
    name: '',
    lvl: 1

};

export const STATS: Array<IStatInform> =
    [
        {
            key: LIFE,
            stat: 'Жизненная сила:',
            value: 3,
            valueOf: 3,
        },
        {
            key: EVASION,
            stat: 'Уклонение:',
            value: 10,
        },
        {
            key: VITALITY,
            stat: 'Энергичность:',
            value: 0,
        },
    ];

export const MAIN_PARAMETERS: Array<IMainParameter> = [
    {
        name: 'Ловкость',
        shortName: 'AG',
        value: 0,
        type: 'agility',
        icon: '../../img/AG.png',
        skills: [
            {
                name: 'Стелс',
                level: 0

            },
            {
                name: 'Стрельба из лука',
                level: 0

            }
        ]
    },

    {
        name: 'Сила',
        shortName: 'ST',
        value: 0,
        type: 'strength',
        icon: '../../img/ST.png',
        skills: [
            {
                name: 'Атака',
                level: 0,
            }
        ]
    },

    {
        name: 'Интелект',
        shortName: 'IN',
        value: 0,
        type: 'intelligence',
        icon: '../../img/IN.png',
        skills: [
            {
                name: 'Обучаемость',
                level: 0

            },
            {
                name: 'Выживание',
                level: 0

            },
            {
                name: 'Медицина',
                level: 0

            },
        ]
    },
    {
        name: 'Харизма',
        shortName: 'CH',
        value: 0,
        type: 'charisma',
        icon: '../../img/CH.png',
        skills: [
            {
                name: 'Запугивание',
                level: 0

            },
            {
                name: 'Проницательность',
                level: 0

            },
            {
                name: 'Внешний вид',
                level: 0

            },
            {
                name: 'Манипулирование',
                level: 0
            }
        ]
    },
]

export const LEVELS: Array<ISkill> = [
    {
        name: 'Нетренированный',
        level: 0
    },
    {
        name: 'Новичок',
        level: 1
    },
    {
        name: 'Ученик',
        level: 2
    },
    {
        name: 'Адепт',
        level: 3
    },
    {
        name: 'Эксперт',
        level: 4
    },
    {
        name: 'Мастер',
        level: 5
    },
]