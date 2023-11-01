import styles from './MainBody.module.scss';
import { VideoContent } from './VideoContent';

import RubyGrangerThumbnail from './images/thumbnails/Ruby Granger.webp';
import RubyGrangerAvatar from './images/channelAvatars/Ruby Granger.jpg';

import EllenAlaverdyanThumbnail from './images/thumbnails/Ellen Alaverdyan.webp';
import EllenAlaverdyanAvatar from './images/channelAvatars/Ellen Plays Bass.jpeg';

import SchoolOfRockThumbnail from './images/thumbnails/School of Rock.webp';
import SchoolOfRockAvatar from './images/channelAvatars/School of Rock.jpg';

import JeanRemillardThumbnail from './images/thumbnails/Jean Rémillard.webp';
import JeanRemillardAvatar from './images/channelAvatars/Jean Rémillard.jpg';

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
    },
    {
        thumbnailImg: EllenAlaverdyanThumbnail,
        videoDuration: '2:36',
        avatarIcon: EllenAlaverdyanAvatar,
        videoTitle: 'Ellen Alaverdyan (11yo) - Flying Thumb by Yousician',
        channelName: 'EllenPlaysBass',
        numberOfViews: '739K',
        timePosted: '4 months',
        verified: true
    },
    {
        thumbnailImg: SchoolOfRockThumbnail,
        videoDuration: '4:08',
        avatarIcon: SchoolOfRockAvatar,
        videoTitle: 'School of Rock students perform "Three Of A Perfect Pair" by King Crimson',
        channelName: 'School of Rock',
        numberOfViews: '60K',
        timePosted: '9 months'
    },
    {
        thumbnailImg: JeanRemillardThumbnail,
        videoDuration: '9:06',
        avatarIcon: JeanRemillardAvatar,
        videoTitle: 'Roger Waters - Amused to Death (cover)',
        channelName: 'Jean Rémillard',
        numberOfViews: '4.5M',
        timePosted: '3 years'
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