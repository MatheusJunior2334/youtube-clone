import { FashionAndBeautyIcon } from '../assets/icons/side-options/FashionAndBeautyIcon';
import { FilmsIcon } from '../assets/icons/side-options/FilmsIcon';
import { GamingIcon } from '../assets/icons/side-options/GamingIcon';
import { HistoryIcon } from '../assets/icons/side-options/HistoryIcon';
import { HomeIcon } from '../assets/icons/side-options/HomeIcon';
import { LearningIcon } from '../assets/icons/side-options/LearningIcon';
// import { LibraryIcon } from './icons/LibraryIcon';
import { LikedVideosIcon } from '../assets/icons/side-options/LikedVideosIcon';
import { LiveIcon } from '../assets/icons/side-options/LiveIcon';
import { MusicIcon } from '../assets/icons/side-options/MusicIcon';
import { NewsIcon } from '../assets/icons/side-options/NewsIcon';
import { PlaylistIcon } from '../assets/icons/side-options/PlaylistIcon';
import { PodcastsIcon } from '../assets/icons/side-options/PodcastsIcon';
import { ProfileIcon } from '../assets/icons/side-options/ProfileIcon';
import { ShortsIcon } from '../assets/icons/side-options/ShortsIcon';
import { SportIcon } from '../assets/icons/side-options/SportIcon';
import { SubscriptionsIcon } from '../assets/icons/side-options/SubscriptionsIcon';
import { TrendingIcon } from '../assets/icons/side-options/TrendingIcon';
import { WatchLaterIcon } from '../assets/icons/side-options/WatchLaterIcon';
import { YourVideosIcon } from '../assets/icons/side-options/YourVideosIcon';

import { YoutubeDefaultIcon } from '../assets/icons/side-options/YoutubeDefaultIcon';
import { YoutubeStudioIcon } from '../assets/icons/side-options/YoutubeStudioIcon';
import { YoutubeMusicIcon } from '../assets/icons/side-options/YoutubeMusicIcon';
import { YoutubeKidsIcon } from '../assets/icons/side-options/YoutubeKidsIcon';

import BruceSpringsteen from '../assets/images/channel-avatars/Bruce Springsteen.jpg';
import EasyLanguages from '../assets/images/channel-avatars/Easy Languages.jpg';
import EllenAlaverdyan from '../assets/images/channel-avatars/Ellen Plays Bass.jpeg';
import JeanRemillard from '../assets/images/channel-avatars/Jean Rémillard.jpg';
import RubyGranger from '../assets/images/channel-avatars/Ruby Granger.jpg';
import SchoolOfRock from '../assets/images/channel-avatars/School of Rock.jpg';
import StevieWonder from '../assets/images/channel-avatars/Stevie Wonder.jpg';
import UnJadedJade from '../assets/images/channel-avatars/Unjaded Jade.jpg';
import ZeldaUniverse from '../assets/images/channel-avatars/Zelda.jpg';

import { SettingsIcon } from '../assets/icons/side-options/SettingsIcon';
import { ReportIcon } from '../assets/icons/side-options/ReportIcon';
import { HelpIcon } from '../assets/icons/side-options/HelpIcon';
import { FeedbackIcon } from '../assets/icons/side-options/FeedbackIcon';

import { YouIcon } from '../assets/icons/side-options/YouIcon';

//Side Options Button - Part 1
export const homeButtons= [
    { icon: <HomeIcon />, text: 'Home' },
    { icon: <ShortsIcon />, text: 'Shorts' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions' }
];

//Side Options Button - Part 2
export const youButtons = [
    { icon: <ProfileIcon />, text: 'Your channel' },
    { icon: <HistoryIcon />, text: 'History' },
    { icon: <PlaylistIcon />, text: 'Playlists' },
    { icon: <YourVideosIcon />, text: 'Your videos' },
    { icon: <WatchLaterIcon />, text: 'Watch Later' },
    { icon: <LikedVideosIcon/>, text: 'Liked videos' },
]

//Side Options Button - Part 3 - Subscriptions
export const subscriptionsButtons = [
    { image: EasyLanguages, text: 'Easy Languages' },
    { image: EllenAlaverdyan, text: 'EllenPlaysBass' },
    { image: JeanRemillard, text: 'Jean Rémillard' },
    { image: RubyGranger, text: 'Ruby Granger' },
    { image: SchoolOfRock, text: 'School Of Rock' },
    { image: ZeldaUniverse, text: 'Zelda Universe' },
    { image: BruceSpringsteen, text: 'Bruce Springsteen' },
    { image: UnJadedJade, text: 'UnJaded Jade' },
    { image: StevieWonder, text: 'Stevie Wonder' }
]

export const exploreButtons = [
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

export const moreYoutubeButtons = [
    { icon: <YoutubeDefaultIcon />, text: 'Youtube Premium' },
    { icon: <YoutubeStudioIcon />, text: 'Youtube Studio' },
    { icon: <YoutubeMusicIcon />, text: 'Youtube Music' },
    { icon: <YoutubeKidsIcon />, text: 'Youtube Kids' }
]

export const lastOptions = [
    { icon: <SettingsIcon />, text: 'Settings' },
    { icon: <ReportIcon />, text: 'Report history' },
    { icon: <HelpIcon />, text: 'Help' },
    { icon: <FeedbackIcon />, text: 'Send feedback' }
]


// Side Options Small
export const sideOptionsSmall = [
    { icon: <HomeIcon />, text: 'Home' },
    { icon: <ShortsIcon />, text: 'Shorts' },
    { icon: <SubscriptionsIcon />, text: 'Subscriptions' },
    { icon: <YouIcon />, text: 'You' }
]