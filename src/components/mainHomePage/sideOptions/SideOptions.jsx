import { useState } from 'react';
import styles from './SideOptions.module.scss';

import { ArrowIcon } from './icons/ArrowIcon';
import { FashionAndBeautyIcon } from './icons/FashionAndBeautyIcon';
import { FilmsIcon } from './icons/FilmsIcon';
import { GamingIcon } from './icons/GamingIcon';
import { HistoryIcon } from './icons/HistoryIcon';
import { HomeIcon } from './icons/HomeIcon';
import { LearningIcon } from './icons/LearningIcon';
// import { LibraryIcon } from './icons/LibraryIcon';
import { LikedVideosIcon } from './icons/LikedVideosIcon';
import { LiveIcon } from './icons/LiveIcon';
import { MusicIcon } from './icons/MusicIcon';
import { NewsIcon } from './icons/NewsIcon';
import { PlaylistIcon } from './icons/PlaylistIcon';
import { PodcastsIcon } from './icons/PodcastsIcon';
import { ProfileIcon } from './icons/ProfileIcon';
import { ShortsIcon } from './icons/ShortsIcon';
import { SportIcon } from './icons/SportIcon';
import { SubscriptionsIcon } from './icons/SubscriptionsIcon';
import { TrendingIcon } from './icons/TrendingIcon';
import { WatchLaterIcon } from './icons/WatchLaterIcon';
import { YourVideosIcon } from './icons/YourVideosIcon';

import EllenAlaverdyan from '../mainBody/images/channelAvatars/Ellen Plays Bass.jpeg';
import JeanRemillard from '../mainBody/images/channelAvatars/Jean Rémillard.jpg';
import RubyGranger from '../mainBody/images/channelAvatars/Ruby Granger.jpg';
import SchoolOfRock from '../mainBody/images/channelAvatars/School of Rock.jpg';

//Component props
const SideOptionsProps = ({ icon, image, text, toggleExpansion}) => {
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
            title={displayText}
            onClick={rotateIcon}
        >
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

//Side Options Button - Part 3 - Subscriptions
const SideOptionsButton3 = [
    { image: EllenAlaverdyan, text: 'EllenPlaysBass' },
    { image: JeanRemillard, text: 'Jean Rémillard' },
    { image: RubyGranger, text: 'Ruby Granger' },
    { image: SchoolOfRock, text: 'School Of Rock' }
]

const SideOptionsButton4 = [
    { icon: <TrendingIcon />, text: 'Trending' },
    { icon: <MusicIcon />, text: 'Music' },
    { icon: <FilmsIcon />, text: 'Films' },
    { icon: <LiveIcon />, text: 'Live' },
    { icon: <GamingIcon />, text: 'Gaming' },
    { icon: <NewsIcon />, text: 'News' },
    { icon: <SportIcon />, text: 'Sport' },
    { icon: <LearningIcon />, text: 'Learning' },
    { icon: <FashionAndBeautyIcon />, text: 'Fashion & beauty' },
    { icon: <PodcastsIcon />, text: 'Podcasts' }
]


//Main code
export const SideOptions = () => {
    const [expandedOptions, setExpandedOptions] = useState(false);

    const toggleExpansion = () => {
        setExpandedOptions(!expandedOptions);
    }

    return (
        <div id={styles.sideOptions}>
            <div>
                {SideOptionsButton1.map((icons, index) => (
                    <SideOptionsProps
                        key={index}
                        {...icons}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder}></hr>

            <div>

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

            <hr className={styles.lineBorder}></hr>

            <div>
                <p className={styles.sideCaption}>Subscriptions</p>

                {SideOptionsButton3.map((channels, index) => (
                    <SideOptionsProps
                        key={index}
                        {...channels}
                    />
                ))}
            </div>

            <hr className={styles.lineBorder}></hr>

            <div>
                <p className={styles.sideCaption}>Explore</p>

                {SideOptionsButton4.map((icon, index) => (
                    <SideOptionsProps
                        key={index}
                        {...icon}
                    />
                ))}
            </div>
        </div>
    )
}