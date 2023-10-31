import { useState } from 'react';
import styles from './SideOptions.module.scss';

import { ArrowIcon } from './icons/ArrowIcon';
import { HistoryIcon } from './icons/HistoryIcon';
import { HomeIcon } from './icons/HomeIcon';
// import { LibraryIcon } from './icons/LibraryIcon';
import { LikedVideosIcon } from './icons/LikedVideosIcon';
import { PlaylistIcon } from './icons/PlaylistIcon';
import { ProfileIcon } from './icons/ProfileIcon';
import { ShortsIcon } from './icons/ShortsIcon';
import { SubscriptionsIcon } from './icons/SubscriptionsIcon';
import { WatchLaterIcon } from './icons/WatchLaterIcon';
import { YourVideosIcon } from './icons/YourVideosIcon';


//Component props
const SideOptionsProps = ({ icon, text, toggleExpansion}) => {
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
        <button className={styles.sideOptionsButton}
            title={text}
            onClick={rotateIcon}
        >
            <div className={styles.icon} style={{ transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                {icon}
            </div>
            <p>{displayText}</p>
        </button>
    )
}

//Side Options Button - Part 1
const SideOptionsButton1 = [
    { icon: <HomeIcon />, text: 'Home' },
    { icon: <ShortsIcon />, text: 'Shorts' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions' }
];

//Side Options Button - Part 2 - Before and After ShowMoreButtons
const SideOptionsButton2Before = [
    { icon: <ProfileIcon />, text: 'Your channel' },
    { icon: <HistoryIcon />, text: 'History' },
    { icon: <YourVideosIcon />, text: 'Your videos' },
    { icon: <WatchLaterIcon />, text: 'Watch Later' }
]

const SideOptionsButton2After = [
    { icon: <ArrowIcon />, text: 'Show more' }
]

//Buttons renderized after clicking on <ArrowIcon />
const ShowMoreButtons = [
    { icon: <LikedVideosIcon/>, text: 'Liked videos' },
    { icon: <PlaylistIcon />, text: 'Specials' },
    { icon: <PlaylistIcon />, text: 'Concerts' },
    { icon: <PlaylistIcon />, text: 'German tips' },
    { icon: <PlaylistIcon />, text: 'English tips' },
]


//Main code
export const SideOptions = () => {
    const [expandedOptions, setExpandedOptions] = useState(false);

    const toggleExpansion = () => {
        setExpandedOptions(!expandedOptions);
    }

    return (
        <div id={styles.sideOptions}>
            <div className={styles.optionsPart1}>
                {SideOptionsButton1.map((icons, index) => (
                    <SideOptionsProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <div className={styles.optionsPart2}>

                <button className={styles.sideOptionsButton}>
                    <p className={styles.youButton}>You</p>
                    <div className={`${styles.icon} ${styles.youButtonIcon}`}>
                        <ArrowIcon />
                    </div>
                </button>

                {/*Side Options Button - Part 2 - Before Show more*/}
                {SideOptionsButton2Before.map((icons, index) => (
                    <SideOptionsProps
                        key={index}
                        {...icons}
                        toggleExpansion={toggleExpansion}
                    />
                ))}

                {/*Buttons renderized after clicking on <ArrowIcon />*/}
                {expandedOptions && (
                    <div>
                        {ShowMoreButtons.map((option, index) => (
                            <SideOptionsProps
                                key={index}
                                {...option}
                            />
                        ))}
                    </div>
                )} 

                {/*Side Options Button - Part 2 - After Show more*/}
                {SideOptionsButton2After.map((icons, index) => (
                    <SideOptionsProps
                        key={index}
                        {...icons}
                        toggleExpansion={toggleExpansion}
                    />
                ))}
            </div>
        </div>
    )
}