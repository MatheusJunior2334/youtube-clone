import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '../../../styles/TopOptions.module.scss';
import { AppContext } from '../../../contexts/AppContext';

import { ArrowIcon } from '../../../assets/icons/side-options/ArrowIcon';

const TopOptionsProps = ({ text }) => {
    return (
        <button className={styles.topOptionsButtons} title={text}>
            <p>{text}</p>  
        </button>
    )
}

export const TopOptions = () => {
    const { isBurgerMenuOpen } = useContext(AppContext);
    const topOptionsRef = useRef(null);
    const [hideBefore, setHideBefore] = useState(true);
    const [hideAfter, setHideAfter] = useState(false);

    const handleScroll = () => {
        if (topOptionsRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = topOptionsRef.current;
            setHideBefore(scrollLeft === 0);
            setHideAfter(scrollLeft + clientWidth >= scrollWidth - 1);
        }
    }

    const scrollLeft = () => {
        if (topOptionsRef.current) {
            topOptionsRef.current.scrollBy({ left: -100, behavior: 'smooth' });
        }
    }

    const scrollRight = () => {
        if (topOptionsRef.current) {
            topOptionsRef.current.scrollBy({ left: 100, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const topOptions = topOptionsRef.current;
        topOptions.addEventListener('scroll', handleScroll);

        // Execute once to set initial state
        handleScroll();

        return () => {
            topOptions.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (topOptionsRef.current) {
            const { scrollWidth, clientWidth } = topOptionsRef.current;
            setHideAfter(clientWidth >= scrollWidth)
        }
    } , [])

    const topOptionsButtons = [
        { text: 'All' },
        { text: 'Music' },
        { text: 'Gaming' },
        { text: 'Final Fantasy' },
        { text: 'The Legend of Zelda' },
        { text: 'Progressive Rock' },
        { text: 'Xenoblade Chronicles' },
        { text: 'Video game music' },
        { text: 'Japanese role-playing game' },
        { text: 'Billy Joel' },
        { text: 'Rock & Roll' },

        { text: 'Recently uploaded' },
        { text: 'Watched' },
        { text: 'New to you' }
    ]

    return(
        <div
            id={styles.topOptions}
            className={`
                ${isBurgerMenuOpen ? styles.menuOpen : ''}
                ${hideBefore ? styles.hideBefore: ''}
                ${hideAfter ? styles.hideAfter: ''}
            `}
            ref={topOptionsRef}
        >
            {!hideBefore && (
                <button
                    className={`${styles.scrollButton} ${styles.left}`}
                    onClick={scrollLeft}
                >
                    <ArrowIcon />
                </button>
            )}
            {topOptionsButtons.map((buttons, index) => (
                <TopOptionsProps
                    key={index}
                    {...buttons}
                />
            ))}
            {!hideAfter && (
                <button
                    className={`${styles.scrollButton} ${styles.right}`}
                    onClick={scrollRight}
                >
                    <ArrowIcon />
                </button>
            )}
        </div>
    )
}