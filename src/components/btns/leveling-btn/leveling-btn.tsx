import React from 'react';

import {getRandomIndexElements} from '../../../helpers/helpers';
import {mainParametersAction} from '../../../store/main-parameters';
import {useDispatch, useSelector} from 'react-redux';
import style from '../btn.module.scss'

const LevelingBtn = () => {
    const {item} = style;

    const {parameters} = useSelector((state: any) => state.mainParameters);

    const dispatch = useDispatch();

    const handleClick = () => {
        const id = getRandomIndexElements(parameters);
        const skill = parameters[id.mainIdx].skills[id.idx];
        dispatch(mainParametersAction.setSkillLevel({id, value: skill.level + 1}));
    }

    return (
        <button onClick={() => handleClick()} className={`btn btn-primary ${item}`}>
            <span>Прокачка</span>
        </button>
    )
};

export default LevelingBtn;
