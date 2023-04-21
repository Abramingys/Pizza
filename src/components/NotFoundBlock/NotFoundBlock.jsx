import React from 'react';

import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

    console.log(styles)
    return (
        <>
            <h1 className={styles.main}>
                <span>Hello</span>
                <br />
                Ни чего нет</h1>
        </>
    )
}


export default NotFoundBlock;
