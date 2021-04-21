import React, {FC, useRef} from 'react';
import style from '../btn.module.scss';
import {useDispatch} from 'react-redux';
import {mainParametersAction} from '../../../store/main-parameters';
import {characterAction} from '../../../store/character';
import {statsAction} from '../../../store/stats';

const FileLoader: FC = () => {
    const {item, hidden} = style;
    const inputRef = useRef(null);
    const dispatch = useDispatch();

    const handleUpload = (e: any) => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], 'UTF-8');
        fileReader.onload = e => {
            // @ts-ignore
            const settings = JSON.parse(e.target.result)

            if (settings.mainParameters) {
                dispatch(mainParametersAction.setMainParameters(settings.mainParameters))
            }

            if (settings.character) {
                dispatch(characterAction.setName(settings.character.name))
            }

            if (settings.stats) {
                dispatch(statsAction.setAllStat(settings.stats))
            }
        };
    }

    const handleClick = () => {
        // @ts-ignore
        inputRef.current.click()
    };

    return (
        <>
            <input className={hidden} ref={inputRef} type="file" name="file" onChange={(e) => handleUpload(e)}/>
            <button onClick={() => handleClick()} className={`btn btn-primary ${item}`}>
                <span>Загрузить</span>
            </button>
        </>
    );
};

export default FileLoader;