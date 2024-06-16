
import styles from '../../styles/VideoProps.module.scss';

import { MusicIconFilled } from '../../assets/icons/main-body/MusicIconFilled'
import { VerifiedIcon } from '../../assets/icons/main-body/VerifiedIcon';
import { ThreeDotsIcon } from '../../assets/icons/main-body/ThreeDotsIcon';

export const VideoContentProps = ({ 
    videoUrl, thumbnailImg, videoDuration, avatarIcon, channelName, videoTitle, numberOfViews, timePosted,
    music, verified
}) => {

    //Função para abrir o vídeo numa nova guia
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener, noreferrer')
    }

    return (
        <div id={styles.videoContent} onClick={() => openInNewTab(videoUrl)}>
            <div className={styles.thumbnail}>
                <img src={thumbnailImg} alt='video' />
                <span>
                    {videoDuration}
                </span>
            </div>

            <div className={styles.videoDetails}>
                <div className={styles.videoInfo}>
                    <img src={avatarIcon} alt={channelName} title={channelName} />
                    <div className={styles.innerInfo}>
                        <h3 title={videoTitle}>{videoTitle}</h3>
                        <div className={styles.channelName}>
                            <span title={channelName} data-content={channelName} >{channelName}</span>
                            
                            {/*Verified Icon*/}
                            { verified && 
                                <VerifiedIcon/>
                            }

                            {/*Music (Artist) Icon*/}
                            { music &&
                                <MusicIconFilled />
                            }

                        </div>
                        <div className={styles.postInfo}>
                            <span>{numberOfViews} views</span>
                            <span>•</span>
                            <span>{timePosted} ago</span>
                        </div>
                    </div>
                </div>
                <button className={styles.threeDots}>
                    <ThreeDotsIcon />
                </button>
            </div>
        </div>
    )
}