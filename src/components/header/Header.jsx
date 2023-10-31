import styles from './Header.module.scss';

//Left Side
import { BurgerMenu } from './icons/BurgerMenu';
import { YoutubeLogo } from './icons/YoutubeLogo';

//Mid Side
import keyboard from './icons/KeyboardIcon.gif';
import { MagnifyingGlassIcon } from './icons/MagnifyingGlassIcon';
import { MicIcon } from './icons/MicIcon';

//Right Side
import { CreateIcon } from './icons/CreateIcon';
import { BellIcon } from './icons/BellIcon';
import ProfileImage from './icons/ProfileImage.jpg';


export function Header() {
    return (
        <header id={styles.header}>
            <nav>
                
                {/*Start / Left Side*/}
                <div className={styles.leftSide}>
                    <button className={styles.burgerMenu}>
                        <BurgerMenu />
                    </button>
                    <button className={styles.logo} title='
                    YouTube Home'>
                        <YoutubeLogo />
                    </button>
                    <span>GB</span>
                </div>

                {/*Center / Middle Side*/}
                <div className={styles.midSide}>
                    <form className={styles.input}>
                        <input type="search" placeholder='Search' />

                        {/*Keyboard Icon*/}
                        <span>
                            <img src={keyboard} alt='Clique para digitar' />
                        </span>

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
                    {/*Create Icon*/}
                    <button>
                        <CreateIcon />
                    </button>

                        {/*Bell Icon*/}
                    <button>
                        <BellIcon />
                    </button>

                        {/*Profile Image*/}
                    <button>
                        <img src={ProfileImage} alt='Profile' />
                    </button>
                </div>
            </nav>
        </header>
    )
}