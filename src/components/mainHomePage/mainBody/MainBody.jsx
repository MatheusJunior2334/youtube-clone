import styles from './MainBody.module.scss';
import { VideoContent } from './VideoContent';

import RubyGrangerThumbnail from './images/thumbnails/Ruby Granger.webp';
import RubyGrangerAvatar from './images/channelAvatars/Ruby Granger.jpg';

const videoContent = [
    {
        thumbnailImg: RubyGrangerThumbnail,
        videoDuration: '1:05:37',
        avatarIcon: RubyGrangerAvatar,
        videoTitle: 'Reviewing every book I read in 2021 (136 books)',
        channelName: 'Ruby Granger',
        numberOfViews: '179K',
        timePosted: '1 year',
        verified: true
    }
]

export const MainBody = () => {
    return (
        <section id={styles.mainBody}>
            {videoContent.map((video, index) => (
                <VideoContent
                    key={index}
                    {...video}
                />
            ))}
        </section>
    )
}