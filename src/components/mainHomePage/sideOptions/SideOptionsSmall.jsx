import React from 'react';
import styles from '../../../styles/SideOptionsSmall.module.scss';

import { sideOptionsSmall } from '../../../data/sideOptionsContent';

const SideOptionsSmallButtonProps = ({ icon, text }) => {
    return (
        <button className={styles.buttonSmall}>
            {icon}
            <span>{text}</span>
        </button>
    )
}

export const SideOptionsSmall = () => {
    return (
        <nav id={styles.sideOptionsSmall}>
            {sideOptionsSmall.map((button, index) => (
                <SideOptionsSmallButtonProps
                    key={index}
                    {...button}
                />
            ))}
        </nav>
    )
}