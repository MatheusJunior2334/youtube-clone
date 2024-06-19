import React, { useContext, useEffect, useState } from 'react';

import styles from '../../../styles/MainBody.module.scss';
import { ShortsColourIcon } from '../../../assets/icons/main-body/ShortsColourIcon';
import { CloseIcon } from '../../../assets/icons/main-body/CloseIcon';
import { ArrowIcon } from '../../../assets/icons/side-options/ArrowIcon';

import { videoInfo } from '../../../data/videoContent';
import { shortsInfo } from '../../../data/shortsContent';
import { VideoContentProps } from '../../common/VideoProps';
import { ShortsContentProps } from '../../common/ShortsProps';

import useWindowSize from '../../../hooks/useWindowSize';
import { AppContext } from '../../../contexts/AppContext';

export const MainBody = () => {
    const { width } = useWindowSize();
    const { isBurgerMenuOpen } = useContext(AppContext);
    const [closeShorts, setCloseShorts] = useState(false);
    const [closeShorts2, setCloseShorts2] = useState(false);

    const [displayText, setDisplayText] = useState('Show more');
    const [displayText2, setDisplayText2] = useState('Show more');
    const [showMore, setShowMore] = useState(false);
    const [showMore2, setShowMore2] = useState(false);

    const [videosPart1, setVideosPart1] = useState([]);
    const [videosPart2, setVideosPart2] = useState([]);
    const [shortsPart1, setShortsPart1] = useState([]);
    const [shortsPart2, setShortsPart2] = useState([]);

    const toggleCloseShorts = () => {
        setCloseShorts(!closeShorts);
    }

    const toggleCloseShorts2 = () => {
        setCloseShorts2(!closeShorts2);
    }

    const showMoreOrFewer = () => {
        setShowMore(!showMore);
        setDisplayText(showMore ? 'Show more' : 'Show fewer')
    };

    const showMoreOrFewer2 = () => {
        setShowMore2(!showMore2);
        setDisplayText2(showMore2 ? 'Show more' : 'Show fewer')
    };

    useEffect(() => {
        const shuffledVideos = [...videoInfo].sort(() => Math.random() - 0.5);
        setVideosPart1(shuffledVideos.slice(0, 6));
        setVideosPart2(shuffledVideos.slice(6, 9));

        const shuffledShorts = [...shortsInfo].sort(() => Math.random() - 0.5);
        setShortsPart1(shuffledShorts.slice(0, 10));
        setShortsPart2(shuffledShorts.slice(10))
    }, []);

    const getDisplayedShorts = () => {
        if (width > 1170) {
            return showMore ? shortsPart1 : shortsPart1.slice(0, 5);
        } else if(width > 1097) {
            return showMore ? shortsPart1 : shortsPart1.slice(0, 4)
        } else if (width > 700) {
            return showMore ? shortsPart1 : shortsPart1.slice(0, 3)
        } else if (width > 420) {
            return showMore ? shortsPart1 : shortsPart1.slice(0, 2)
        } else {
            return showMore ? shortsPart1 : shortsPart1.slice(0, 1)
        }
    }

    const displayedShorts = getDisplayedShorts();

    const getDisplayedShorts2 = () => {
        if (width > 1170) {
            return showMore2 ? shortsPart2 : shortsPart2.slice(0, 5);
        } else if(width > 1097) {
            return showMore2 ? shortsPart2 : shortsPart2.slice(0, 4)
        } else if (width > 700) {
            return showMore2 ? shortsPart2 : shortsPart2.slice(0, 3)
        } else if (width > 420) {
            return showMore2 ? shortsPart2 : shortsPart2.slice(0, 2)
        } else {
            return showMore2 ? shortsPart2 : shortsPart2.slice(0, 1)
        }
    }

    const displayedShorts2 = getDisplayedShorts2();

    return (
        <section id={styles.mainBody} className={isBurgerMenuOpen ? styles.menuOpen : ''}>
            <div className={styles.videosContainer}>
                {videosPart1.map((video, index) => (
                    <VideoContentProps
                        key={index}
                        {...video}
                    />
                ))}
            </div>

            <div className={styles.shortsContainer} style={{ display: closeShorts ? 'none' : 'block' }}>
                <div className={styles.shortsHeader}>
                    <div className={styles.shortsIcon}>
                        <ShortsColourIcon />
                        <h2>Shorts</h2>
                    </div>

                    <div className={styles.closeIcon} onClick={toggleCloseShorts}>
                        <CloseIcon />
                    </div>
                </div>

                <div className={styles.shortsBody}>
                    {displayedShorts.map((shorts, index) => (
                        <ShortsContentProps
                            key={index}
                            {...shorts}
                        />
                    ))}
                </div>

                <div className={styles.shortsFooter}>
                    <button onClick={showMoreOrFewer}>
                        <p>{displayText}</p>
                        <div className={styles.icon} style={{ transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            <ArrowIcon />
                        </div>
                    </button>
                </div>
            </div>

            {closeShorts && (
                <div className={styles.undoDiv}>
                    <p>Shelf will be hidden for 30 days</p>
                    <button onClick={toggleCloseShorts}>Undo</button>
                </div>
            )}

            <div className={styles.videosContainer}>
                {videosPart2.map((video, index) => (
                    <VideoContentProps
                        key={index}
                        {...video}
                    />
                ))}
            </div>

            <div className={styles.shortsContainer} style={{ display: closeShorts2 ? 'none' : 'block' }}>
                <div className={styles.shortsHeader}>
                    <div className={styles.shortsIcon}>
                        <ShortsColourIcon />
                        <h2>Shorts</h2>
                    </div>

                    <div className={styles.closeIcon} onClick={toggleCloseShorts2}>
                        <CloseIcon />
                    </div>
                </div>

                <div className={styles.shortsBody}>
                    {displayedShorts2.map((shorts, index) => (
                        <ShortsContentProps
                            key={index}
                            {...shorts}
                        />
                    ))}
                </div>

                <div className={styles.shortsFooter}>
                    <button onClick={showMoreOrFewer2}>
                        <p>{displayText2}</p>
                        <div className={styles.icon} style={{ transform: showMore2 ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                            <ArrowIcon />
                        </div>
                    </button>
                </div>
            </div>

            {closeShorts2 && (
                <div className={styles.undoDiv}>
                    <p>Shelf will be hidden for 30 days</p>
                    <button onClick={toggleCloseShorts2}>Undo</button>
                </div>
            )}

        </section>
    )
}