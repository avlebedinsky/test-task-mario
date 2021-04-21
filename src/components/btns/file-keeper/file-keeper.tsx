import React, {FC, useRef} from 'react';
import {useSelector} from 'react-redux';
import style from '../btn.module.scss';

const FileKeeper: FC = () => {
    const link = useRef(null);
    const state = useSelector(state => state);
    let text = JSON.stringify(state);
    let file = new Blob([text], {type: 'application/json'});
    const url = URL.createObjectURL(file);

    const handleClick = () => {
        // @ts-ignore
        link.current.click();
    }

    const {item, hidden} = style;
    return (
        <>
            <button onClick={() => handleClick()} className={`btn btn-primary ${item}`}>
                <span>Сохранить</span>
            </button>
            <a className={hidden} ref={link} href={url} download="test.json">link</a>
        </>
    );
};

export default FileKeeper;