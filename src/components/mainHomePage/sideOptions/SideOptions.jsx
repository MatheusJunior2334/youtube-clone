import React, { useState } from 'react';
import styles from '../../../styles/SideOptions.module.scss';

import { ArrowIcon } from '../../../assets/icons/side-options/ArrowIcon';

import {
    homeButtons,
    youButtons,
    subscriptionsButtons,
    exploreButtons,
    moreYoutubeButtons,
    lastOptions
} from '../../../data/sideOptionsContent';

const SideMenuProps = ({ icon, image, text, toggleExpansion }) => {
    const [isRotated, setIsRotated] = useState(false);
    const [displayText, setDisplayText] = useState(text);

    const rotateIcon = () => {
        if (text === 'Show more') {
            setIsRotated(!isRotated);
            toggleExpansion();
            setDisplayText(isRotated ? 'Show more' : 'Show fewer')
        }
    };

    return (
        <button className={styles.sideMenuButton} title={text} onClick={rotateIcon}>
            <div className={styles.icon} style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                {icon}
                {image && (
                    <img src={image} alt={displayText} />
                )}
            </div>
            <p>{displayText}</p>
        </button>
    )
}

subscriptionsButtons.sort((a, b) => a.text.localeCompare(b.text));

export const SideOptions = () => {
    const [subscriptions, setSubscriptions] = useState(false);

    const toggleExpansionSubscriptions = () => {
        setSubscriptions(!subscriptions)
    }

    const displayedSubscriptions = subscriptions ? subscriptionsButtons : subscriptionsButtons.slice(0, 7);

    return (
        <nav id={styles.sideOptions}>
            <div>
                {homeButtons.map((icons, index) => (
                    <SideMenuProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder} />

            <div>
                <button className={styles.sideMenuButton}>
                    <p className={styles.youButton}>You</p>
                    <div className={`${styles.icon} ${styles.youButtonIcon}`}>
                        <ArrowIcon />
                    </div>
                </button>

                {/*Side Options Button - Part 2 - Before Show more*/}
                {youButtons.map((icons, index) => (
                    <SideMenuProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder} />

            <div>
                <p className={styles.sideCaption}>Subscriptions</p>

                {displayedSubscriptions.map((channels, index) => (
                    <SideMenuProps
                        key={index}
                        {...channels}
                    />
                ))}

                {displayedSubscriptions && (
                    <SideMenuProps icon={<ArrowIcon />} text={'Show more'} toggleExpansion={toggleExpansionSubscriptions} />
                )}
            </div>

            <hr className={styles.lineBorder} />

            <div>
                <p className={styles.sideCaption}>Explore</p>

                {exploreButtons.map((icon, index) => (
                    <SideMenuProps
                        key={index}
                        {...icon}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder} />

            <div>
                <p className={styles.sideCaption}>More from YouTube</p>

                {moreYoutubeButtons.map((icons, index) => (
                    <SideMenuProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder} />

            <div>
                {lastOptions.map((icons, index) => (
                    <SideMenuProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder} />

            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <span>About</span>
                    <span>Press</span>
                    <span>Copyright</span>

                    <br />
                
                    <span>Contact us</span>
                    <span>Creator</span>
                    <span>Advertise</span>

                    <br />
                
                    <span>Developers</span>
                </div>
                <div className={styles.footerMid}>
                    <span>Terms</span>
                    <span>Privacy</span>
                    <span>Policy & Safety</span>

                    <br />
                
                    <span>How YouTube works</span>

                    <br />
                
                    <span>Test new features</span>
                </div>
                <div className={styles.footerBottom}>
                    <h6>© 2024 Google LLC</h6>
                    <h6>
                        Clone made by <a href="https://github.com/MatheusJunior2334" target='_blank' rel='noopener noreferrer' title='Access my GitHub profile'>Matheus Júnior</a>
                    </h6>
                </div>
            </footer>
        </nav>
    )
}