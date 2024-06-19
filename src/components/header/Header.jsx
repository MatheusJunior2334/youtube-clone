import React, { useContext, useState } from 'react';
import styles from '../../styles/Header.module.scss';

//Left Side
import { BurgerMenu } from '../../assets/icons/header/BurgerMenu';
import { YoutubeLogo } from '../../assets/icons/header/YoutubeLogo';

//Mid Side
import { MagnifyingGlassIcon } from '../../assets/icons/header/MagnifyingGlassIcon';
import { MicIcon } from '../../assets/icons/header/MicIcon';

//Right Side
import { CreateIcon } from '../../assets/icons/header/CreateIcon';
import { BellIcon } from '../../assets/icons/header/BellIcon';
import ProfileImage from '../../assets/images/header/ProfileImage.jpg';
import { AppContext } from '../../contexts/AppContext';

export default function Header() {
    const [showBlueSearch, setShowBlueSearch] = useState(false);
    const { toggleBurgerMenu } = useContext(AppContext);

    const handleFocus = () => {
        setShowBlueSearch(true);
    }

    const handleBlur = () => {
        setShowBlueSearch(false);
    }

    return (
        <header id={styles.header}>
            <nav>
                {/*Start / Left Side*/}
                <div className={styles.leftSide}>
                    <button className={styles.burgerMenu} onClick={toggleBurgerMenu}>
                        <BurgerMenu />
                    </button>
                    <button className={styles.logo} title='YouTube Home'>
                        <YoutubeLogo />
                    </button>
                    <span>GB</span>
                </div>

                {/*Center / Middle Side*/}
                <div className={`${styles.midSide} ${showBlueSearch ? styles.addBlueColor : ''}`}>
                    {showBlueSearch && <div className={styles.blueIcon}><MagnifyingGlassIcon /></div>}
                    <form className={styles.input}>
                        <input
                            type="search"
                            placeholder='Search'
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />

                        {/*Magnifying Glass Icon*/}
                        <button className={styles.searchBtn}>
                            <MagnifyingGlassIcon />
                        </button>
                    </form>

                    {/*Mic Icon*/}
                    <div className={styles.micIcon}>
                        <MicIcon />
                    </div>
                </div>

                {/*End / Right Side*/}
                <div className={styles.rightSide}>
                    <button>
                        <MagnifyingGlassIcon />
                    </button>

                    <button>
                        <MicIcon /> 
                    </button>

                    {/*Create Icon*/}
                    <button>
                        <CreateIcon />
                    </button>

                        {/*Bell Icon*/}
                    <button>
                        <BellIcon />
                    </button>

                        {/*Profile Image*/}
                    <button title='Access my GitHub profile'>
                        <a href="https://github.com/MatheusJunior2334" target='_blank' rel='noopener noreferrer'>
                            <img src={ProfileImage} alt='Profile' />
                        </a>
                    </button>
                </div>
            </nav>
        </header>
    )
}