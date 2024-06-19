import React, { useContext, useState } from 'react';
import styles from '../../../styles/SideMenu.module.scss';

import { BurgerMenu } from '../../../assets/icons/header/BurgerMenu';
import { YoutubeLogo } from '../../../assets/icons/header/YoutubeLogo';
import { SideOptions } from './SideOptions';

import { AppContext } from '../../../contexts/AppContext';

//Component props

//Main code
export const SideMenu = () => {
    const [addClass, setAddClass] = useState(false);
    const { isBurgerMenuOpen, toggleBurgerMenu } = useContext(AppContext);

    const handleCloseSideMenu = () => {
        if (isBurgerMenuOpen) {
            setAddClass(true);
            setTimeout(() => {
                toggleBurgerMenu()
                setAddClass(false);
            }, 300)
        }
    }

    return (
        <div id={styles.sideMenu} className={addClass ? styles.closeTransition : styles.openTransition}>
            <div className={styles.sideMenuBackdrop} onClick={handleCloseSideMenu} />

            <div className={styles.sideMenuContent}>
                <div className={styles.sideMenuTop}>
                    <button className={styles.burgerMenu} onClick={handleCloseSideMenu}>
                        <BurgerMenu />
                    </button>
                    <button className={styles.logo} title='YouTube Home'>
                        <YoutubeLogo />
                    </button>
                    <span>GB</span>
                </div>
                <SideOptions />
            </div>
        </div>
    )
}