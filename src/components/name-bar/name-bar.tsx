import React, {FC} from 'react';

import styles from './name-bar.module.scss';
import avatar from '../../img/avatar.png'
import {useDispatch, useSelector} from 'react-redux';
import {characterAction} from '../../store/character';

const NameBar: FC = () => {

    const {
        wrap,
        text,
        'name-input': nameInput,
        img,
    } = styles;

    const {name, lvl} = useSelector(( state: any )=> state.character);
    const dispatch = useDispatch();

    const handleChangeName = (e: any) => {
        dispatch(characterAction.setName(e.target.value))
    };

    return (
        <div className={wrap}>
            <div className={text}>
                <input className={nameInput} placeholder="Введите имя..." defaultValue={name} onBlur={handleChangeName}/>
                <div>LVL. {lvl}</div>
            </div>
            <div className={img}>
                <img src={avatar} alt="avatar"/>
            </div>
        </div>
    );
};

export default NameBar;