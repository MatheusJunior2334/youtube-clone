import styles from './VideoContent.module.scss';
import { VerifiedIcon } from './images/icons/VerifiedIcon';
import { ThreeDotsIcon } from './images/icons/ThreeDotsIcon';

export const VideoContent = ({ 
    thumbnailImg, videoDuration, avatarIcon, channelName, videoTitle, numberOfViews, timePosted,
    music, verified
}) => {

    return (
        <div id={styles.videoContent}>
            <div className={styles.thumbnail}>
                <img src={thumbnailImg} alt='video' />
                <span>
                    {videoDuration}
                </span>
            </div>

            <div className={styles.videoDetails}>
                <img src={avatarIcon} alt={channelName} title={channelName} />
                <div className={styles.videoInfo}>
                    <p>{videoTitle}</p>
                    <div className={styles.channelName}>
                        <span>{channelName}</span>

                        {/*Verified Icon*/}
                        { verified && 
                            <VerifiedIcon/>
                        }

                        {/*Music (Artist) Icon*/}
                    </div>
                    <div className={styles.postInfo}>
                        <span>{numberOfViews} views</span>
                        <span>•</span>
                        <span>{timePosted} ago</span>
                    </div>
                </div>
                <button className={styles.threeDots}>
                    <ThreeDotsIcon />
                </button>
            </div>
        </div>
    )
}