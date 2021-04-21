import React from 'react';
import styles from './skills.module.scss'
import Card from '../card/card';
import {ISkill, IMainParameter} from '../../interface/interface';
import {useSelector} from 'react-redux';
import {LEVELS} from '../../constants/constans';
import {getLevelName} from '../../helpers/helpers';

const Skills = () => {
    const {items, item, img, title, level, levels} = styles;
    const images = require('../../img');

    const {parameters} = useSelector((state: any) => state.mainParameters);


    return (
        <div>
            <Card>
                <ul className={items}>
                    {parameters.map((parameter: IMainParameter, idx: number) =>
                        <li className={item} key={idx}>
                            <img className={img} src={images[parameter.shortName].default} alt={parameter.name}/>
                            <ul className={levels}>
                                <div className={title}>{parameter.name}:</div>
                                {parameter.skills.map((skill: ISkill) =>
                                    <li className={level} key={skill.name}>
                                        <div>{skill.name}</div>
                                        <div>{getLevelName(LEVELS, skill.level)}</div>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </Card>
        </div>
    );
};

export default Skills;