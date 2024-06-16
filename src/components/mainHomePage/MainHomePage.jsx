import React, { useContext } from 'react';
import styles from '../../styles/MainHomePage.module.scss';
import { SideOptions } from './sideOptions/SideOptions';
import { TopOptions } from './topOptions/TopOptions';
import { MainBody } from "./mainBody/MainBody";
import { AppContext } from '../../contexts/AppContext';
import useWindowSize from '../../hooks/useWindowSize';
import { SideOptionsSmall } from './sideOptions/SideOptionsSmall';
import { SideMenu } from './sideOptions/SideMenu';

export const MainHomePage = () => {
    const { isBurgerMenuOpen } = useContext(AppContext);
    const { width } = useWindowSize();

    const renderSideOptions = () => {
        if (!isBurgerMenuOpen) {
            return <SideOptions />
        } else {
            return <SideOptionsSmall />
        }
    }

    return (
        <main id={styles.mainContent}>
            <div className={styles.sideOptions}>
                {renderSideOptions()}
            </div>
            <div className={`${styles.innerMain} ${isBurgerMenuOpen ? styles.sideOptionsSmallOpen : ''}`}>
                <TopOptions />
                <MainBody />
            </div>
            {width <= 1312 && isBurgerMenuOpen && <SideMenu />}
        </main>
    )
}