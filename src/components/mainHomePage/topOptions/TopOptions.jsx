import { useContext } from 'react';
import styles from '../../../styles/TopOptions.module.scss';
import { AppContext } from '../../../contexts/AppContext';

const TopOptionsProps = ({ text }) => {
    return (
        <button className={styles.topOptionsButtons}>
            <p>{text}</p>  
        </button>
    )
}

export const TopOptions = () => {
    const { isBurgerMenuOpen } = useContext(AppContext);

    const topOptionsButtons = [
        { text: 'All' },
        { text: 'Music' },
        { text: 'Gaming' },
        { text: 'The Legend of Zelda' },
        { text: 'Progressive Rock' },
        { text: 'Xenoblade Chronicles' },
        { text: 'Video game music' }
    ]

    return(
        <div id={styles.topOptions} className={isBurgerMenuOpen ? styles.menuOpen : ''}>
            {topOptionsButtons.map((buttons, index) => (
                <TopOptionsProps
                    key={index}
                    {...buttons}
                />
            ))}
        </div>
    )
}