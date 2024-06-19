import React, { useContext, useEffect } from 'react';
import styles from '../../styles/MainHomePage.module.scss';
import { SideOptions } from './sideOptions/SideOptions';
import { TopOptions } from './topOptions/TopOptions';
import { MainBody } from "./mainBody/MainBody";
import { AppContext } from '../../contexts/AppContext';
import useWindowSize from '../../hooks/useWindowSize';
import { SideOptionsSmall } from './sideOptions/SideOptionsSmall';
import { SideMenu } from './sideOptions/SideMenu';

export default function MainHomePage() {
    const { isBurgerMenuOpen } = useContext(AppContext);
    const { width } = useWindowSize();

    const renderSideOptions = () => {
        if (!isBurgerMenuOpen) {
            return <SideOptions />
        }
        return <SideOptionsSmall />
    }

    useEffect(() => {
        const body = document.body;

        if (isBurgerMenuOpen && width <= 1312) {
            const scrollPosition = document.documentElement.scrollTop;

            body.style.top = `-${scrollPosition}px`;
            body.classList.add(styles.noscroll);
        } else {
            const scrollPosition = -parseInt(body.style.top);
            body.style.top = '';
            body.classList.remove(styles.noscroll);
            window.scrollTo(0, scrollPosition);
        }
    }, [isBurgerMenuOpen, width])

    return (
        <main id={styles.mainContent}>
            <div className={styles.sideOptions}>
                {width > 1312 ? (
                    renderSideOptions()
                ) : (
                    <SideOptionsSmall />
                )}
            </div>
            <div className={`${styles.innerMain} ${isBurgerMenuOpen ? styles.sideOptionsSmallOpen : ''}`}>
                <TopOptions />
                <MainBody />
            </div>
            {width <= 1312 && isBurgerMenuOpen && <SideMenu />}
        </main>
    )
}