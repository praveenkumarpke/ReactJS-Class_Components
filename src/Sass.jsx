import React from 'react';
import styles from './scss/one/One.module.css';
import style from './scss/two/Two.module.css';
const Sass = () => {
    return (
        <>
            <div className={styles.sameStyle}>
                <b>Fruits</b>
                <ol>
                    <li>bananas </li>
                    <li>apples </li>
                    <li>strawberries </li>
                    <li>grapes </li>
                </ol>
            </div>

            <div className={style.sameStyle}>
                <b> Vegetables</b>
                <ul>
                    <li>Green peas</li>
                    <li>Garlic</li>
                    <li>Broccoli</li>
                    <li>Swiss chard</li>
                </ul>
            </div>
        </>
    );
}

export default Sass