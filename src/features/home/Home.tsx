import { useState, useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import { motion } from 'motion/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import MovieIcon from '@mui/icons-material/Movie';
import PetsIcon from '@mui/icons-material/Pets';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ShieldIcon from '@mui/icons-material/Shield';
import Star from '@mui/icons-material/Star';

import { PageType, PAGES } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { StatCard, FadeIn, SlideIn, Stagger, ScaleIn, Bounce } from '../../shared/components';
import {
  HomeWrapper,
  HeroSection,
  HeroImage,
  HeroOverlay,
  HeroBlobs,
  HeroMainLayout,
  HeroLeftPanel,
  HeroNameBlock,
  HeroTitle,
  HeroSubtitle,
  HeroThirdLine,
  TaglineContainer,
  TaglineItem,
  TaglineIcon,
  TaglineBar,
  TaglineText,
  HeroCTAContainer,
  HeroCTAButton,
  HeroSecondaryButton,
  HeroRightPanel,
  HeroQuoteBox,
  HeroQuoteText,
  CarouselContainer,
  CarouselFade,
  CarouselStrip,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailTag,
  ThumbnailLabel,
  ThumbnailLabelText,
  StatsSection,
  StatsGrid,
  SocialSection,
  SocialHeader,
  SocialStats,
  StatBox,
  StatIcon,
  StatContent,
  StatValue,
  StatLabel,
  VideoGrid,
  VideoCard,
  VideoImage,
  VideoOverlay,
  VideoPlayButton,
  PlayIcon,
  VideoContent,
  VideoTag,
  VideoTitle,
  ViewAllButton,
  ActingTeaserSection,
  ActingTeaserContent,
  TeaserDescription,
  TeaserStatsGrid,
  TeaserStatBox,
  TeaserStatValue,
  TeaserStatLabel,
  TeaserCTAButton,
  WildlifeSection,
  WildlifeContent,
  WildlifeGradientBlob,
  WildlifeTextContent,
  WildlifeDescription,
  WildlifeButtonGroup,
  EmergencyButton,
  StoriesButton,
  WildlifeImageContainer,
  WildlifeImageBox,
  WildlifeImage,
  WildlifeImageOverlay,
  WildlifeStatBox,
  WildlifeStatValue,
  WildlifeStatLabel,
  MarqueeSection,
  MarqueeStrip,
  MarqueeItem,
  SectionHeadingContainer,
  SectionSubtitle,
  SectionTitle,
  JourneySection,
  JourneyBackground,
  JourneyContainer,
  TimelineWrapper,
  TimelineLine,
  TimelineItem,
  TimelineDot,
  TimelineContent,
  MilestoneCard,
  YearBadge,
  MilestoneTitle,
  MilestoneDescription,
  JourneyCTAButton,
} from './Home.style';

interface HomeProps {
  setPage?: (page: PageType) => void;
}

// ==================== YOUTUBE API CONFIGURATION ====================

const YOUTUBE_CONFIG = {
  ...GLOBAL_CONFIG.social.youtube,
  maxResults: 5,
};

interface ChannelStats {
  subscribers: string;
  totalViews: string;
  totalVideos: string;
}

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  tag: string;
}

// Format large numbers
const formatCount = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
};

// Fetch YouTube Channel Statistics
const fetchYouTubeChannelStats = async (): Promise<ChannelStats | null> => {
  if (!YOUTUBE_CONFIG.apiKey) {
    console.warn('YouTube API key not configured');
    return null;
  }

  try {
    // Try with channel handle first
    let response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&forHandle=${YOUTUBE_CONFIG.channelHandle.replace('@', '')}&key=${YOUTUBE_CONFIG.apiKey}`
    );

    // Fallback to channel ID
    if (!response.ok) {
      response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
      );
    }

    if (!response.ok) throw new Error('Failed to fetch channel stats');

    const data = await response.json();
    const stats = data.items?.[0]?.statistics;

    if (!stats) throw new Error('No statistics found');

    return {
      subscribers: formatCount(parseInt(stats.subscriberCount || '0')),
      totalViews: formatCount(parseInt(stats.viewCount || '0')),
      totalVideos: stats.videoCount || '0',
    };
  } catch (error) {
    console.error('Error fetching YouTube stats:', error);
    return null;
  }
};

// Fetch Featured YouTube Videos (3 latest)
const fetchFeaturedYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  if (!YOUTUBE_CONFIG.apiKey) {
    console.warn('YouTube API key not configured. Using fallback videos.');
    return [
      {
        id: '1',
        title: 'How to build massive shoulders in 4 weeks',
        tag: 'Bodybuilding Tips',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-1/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'Snake Rescue Mission',
        tag: 'Wildlife Rescue',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-2/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '3',
        title: 'Action Sequence Training',
        tag: 'Behind The Scenes',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-3/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
    ];
  }

  try {
    // Fetch channel to get uploads playlist
    let channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${YOUTUBE_CONFIG.channelHandle.replace('@', '')}&key=${YOUTUBE_CONFIG.apiKey}`
    );

    if (!channelResponse.ok) {
      channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CONFIG.channelId}&key=${YOUTUBE_CONFIG.apiKey}`
      );
    }

    if (!channelResponse.ok) throw new Error('Failed to fetch channel data');

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) throw new Error('Uploads playlist not found');

    // Fetch latest 3 videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=3&key=${YOUTUBE_CONFIG.apiKey}`
    );

    if (!videosResponse.ok) throw new Error('Failed to fetch videos');
    const videosData = await videosResponse.json();

    const formattedVideos: YouTubeVideo[] = videosData.items.map((item: any, index: number) => {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title;
      
      // Determine tag based on title keywords
      let tag = 'YouTube Content';
      if (title.toLowerCase().includes('snake') || title.toLowerCase().includes('rescue')) {
        tag = 'Wildlife Rescue';
      } else if (title.toLowerCase().includes('gym') || title.toLowerCase().includes('workout') || title.toLowerCase().includes('fitness')) {
        tag = 'Fitness Training';
      } else if (title.toLowerCase().includes('action') || title.toLowerCase().includes('movie')) {
        tag = 'Behind The Scenes';
      }

      return {
        id: String(index + 1),
        title: title,
        tag: tag,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
        videoId: videoId,
      };
    });

    return formattedVideos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return [
      {
        id: '1',
        title: 'How to build massive shoulders in 4 weeks',
        tag: 'Bodybuilding Tips',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-1/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'Snake Rescue Mission',
        tag: 'Wildlife Rescue',
            thumbnail: 'https://picsum.photos/seed/vikram-yt-2/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '3',
        title: 'Action Sequence Training',
        tag: 'Behind The Scenes',
        thumbnail: 'https://picsum.photos/seed/vikram-yt-3/800/450',
        videoId: 'dQw4w9WgXcQ',
      },
    ];
  }
};

// ==================== HOME CONTENT ====================

const HOME_CONTENT = {
  hero: {
    name: {
      first: GLOBAL_CONFIG.personal.firstName,
      middle: GLOBAL_CONFIG.personal.middleName,
      last: GLOBAL_CONFIG.personal.lastName,
    },
    quote: {
      line1: "Strength doesn't live in your",
      line1Fade: 'muscles',
      line2: 'It lives in your',
      line2Highlight: 'will',
    },
    buttons: {
      primary: 'Explore Journey',
      secondary: 'Book a Session',
    },
  },
  
  taglines: [
    { text: 'National Level Bodybuilder', icon: <EmojiEventsIcon />, color: '#D4AF37' },
    { text: 'Professional Actor', icon: <MovieIcon />, color: '#059669' },
    { text: 'Elite Gym Trainer', icon: <GroupsIcon />, color: '#ef4444' },
    { text: 'Wildlife Rescuer', icon: <PetsIcon />, color: '#f59e0b' },
  ],
  
  thumbnails: [
    {
      id: PAGES.FITNESS,
      label: 'Fitness',
      tag: 'Training',
      image: `${import.meta.env.BASE_URL}assets/Acting/Tiger_prabrakar.jpg`,
    },
    {
      id: PAGES.ACTING,
      label: 'Acting',
      tag: 'Cinema',
      image: `${import.meta.env.BASE_URL}assets/Acting/Prabas.jpg`,
    },
    {
      id: PAGES.WILDLIFE,
      label: 'Wildlife',
      tag: 'Rescue',
      image: 'https://images.unsplash.com/photo-1531386151447-fd76ad50012f?w=480&q=70',
    },
    {
      id: PAGES.JOURNEY,
      label: 'Journey',
      tag: 'Path',
      image: 'https://picsum.photos/seed/karthik-gallery/480/300',
    },
  ],
  
  marquee: [
    'National Bodybuilder',
    'Action Actor',
    'Elite Trainer',
    'Wildlife Rescuer',
    'National Champion',
  ],
  
  stats: {
    subtitle: 'Achievements & Impact',
    title: 'Success',
    titleHighlight: 'By Numbers',
    items: [
      { label: 'Clients Transformed', value: '1,200+', icon: <GroupsIcon /> },
      { label: 'Movies & Projects', value: '12+', icon: <MovieIcon /> },
      { label: 'YouTube Views', value: '491.3K', icon: <YouTubeIcon /> },
      { label: 'Snakes Rescued', value: '850+', icon: <PetsIcon /> },
      { label: 'Years Experience', value: '10+', icon: <AccessTimeIcon /> },
    ],
  },
  
  journey: {
    subtitle: 'One Year At A Glance',
    title: 'My',
    titleHighlight: 'Journey',
    button: 'Explore Full Journey',
    milestones: [
      {
        year: '2014',
        title: 'Fitness Journey Begins',
        description: 'Started bodybuilding and personal training, transforming lives through fitness',
        icon: <EmojiEventsIcon />,
        color: '#ef4444',
      },
      {
        year: '2016',
        title: 'National Bodybuilding Champion',
        description: 'Won first national championship, establishing presence in competitive bodybuilding',
        icon: <EmojiEventsIcon />,
        color: '#D4AF37',
      },
      {
        year: '2018',
        title: 'Acting Debut',
        description: 'Entered the film industry with breakthrough performance in action cinema',
        icon: <MovieIcon />,
        color: '#059669',
      },
      {
        year: '2020',
        title: 'Wildlife Conservation',
        description: 'Began snake rescue operations, saving over 850+ lives while protecting wildlife',
        icon: <PetsIcon />,
        color: '#f59e0b',
      },
      {
        year: '2022',
        title: 'Elite Training Academy',
        description: 'Established premium fitness training center, mentoring 1000+ clients',
        icon: <GroupsIcon />,
        color: '#3b82f6',
      },
      {
        year: '2024',
        title: 'Multi-Domain Excellence',
        description: 'Recognized as a versatile professional excelling in fitness, acting, and conservation',
        icon: <Star />,
        color: '#D4AF37',
      },
    ],
  },
  social: {
    subtitle: 'Social Presence',
    title: 'Real-Time Impact',
    stats: {
      youtube: {
        label: 'YouTube Subscribers',
        fallback: '250K+',
        loading: 'Loading...',
        viewsLabel: 'total views',
      },
      instagram: {
        label: 'Instagram Followers',
        value: '89K+',
        subtitle: 'Daily fitness content',
      },
      videos: {
        label: 'Total Videos',
        subtitle: 'Educational content',
      },
    },
    loading: 'Loading featured videos...',
    viewAllButton: 'View All Content on YouTube',
  },
};

// Legacy exports for backward compatibility
const TAGLINES = HOME_CONTENT.taglines;
const THUMBNAILS = HOME_CONTENT.thumbnails;
const MARQUEE_ITEMS = HOME_CONTENT.marquee;

export const Home = ({ setPage }: HomeProps) => {
  const theme = useTheme();
  // State for tagline cycling
  const [taglineIndex, setTaglineIndex] = useState(0);
  
  // State for YouTube stats
  const [youtubeStats, setYoutubeStats] = useState<ChannelStats | null>(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  
  // State for featured videos
  const [featuredVideos, setFeaturedVideos] = useState<YouTubeVideo[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

  // Fetch YouTube stats on mount
  useEffect(() => {
    const loadStats = async () => {
      setIsLoadingStats(true);
      const stats = await fetchYouTubeChannelStats();
      setYoutubeStats(stats);
      setIsLoadingStats(false);
    };
    loadStats();
  }, []);
  
  // Fetch featured videos on mount
  useEffect(() => {
    const loadVideos = async () => {
      setIsLoadingVideos(true);
      const videos = await fetchFeaturedYouTubeVideos();
      setFeaturedVideos(videos);
      setIsLoadingVideos(false);
    };
    loadVideos();
  }, []);

  // Auto-cycle taglines every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (page: PageType) => {
    if (setPage) {
      setPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <HomeWrapper>
        {/* ================================================================= */}
        {/* HERO SECTION - 100svh Fullscreen */}
        {/* ================================================================= */}
        <HeroSection>
        <HeroImage
            as={motion.img}
            src={`${import.meta.env.BASE_URL}assets/Gym/heroImage2.png`}
            alt="Karthik Shekar Acharya"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
        />
        <HeroOverlay />

        {/* Ambient Blobs */}
        <HeroBlobs>
            <div />
            <div />
            <div />
        </HeroBlobs>

        <HeroMainLayout>
            {/* Left Panel - Text */}
            <HeroLeftPanel>
            <HeroNameBlock>
                <HeroTitle>{HOME_CONTENT.hero.name.first}</HeroTitle>
                <HeroSubtitle>{HOME_CONTENT.hero.name.middle}</HeroSubtitle>
                <HeroThirdLine>{HOME_CONTENT.hero.name.last}</HeroThirdLine>

                {/* Cycling Taglines */}
                <TaglineContainer
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                key={taglineIndex}
                >
                <TaglineItem>
                    <TaglineIcon
                    sx={{ color: TAGLINES[taglineIndex].color }}
                    >
                    {TAGLINES[taglineIndex].icon}
                    </TaglineIcon>
                    <TaglineBar
                    style={{
                        backgroundColor: TAGLINES[taglineIndex].color,
                    }}
                    />
                    <TaglineText>{TAGLINES[taglineIndex].text}</TaglineText>
                </TaglineItem>
                </TaglineContainer>
            </HeroNameBlock>

            {/* CTA Buttons */}
            <HeroCTAContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <HeroCTAButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(PAGES.FITNESS)}
                >
                {HOME_CONTENT.hero.buttons.primary}
                </HeroCTAButton>
                <HeroSecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(PAGES.CONTACT)}
                >
                {HOME_CONTENT.hero.buttons.secondary}
                </HeroSecondaryButton>
            </HeroCTAContainer>
            </HeroLeftPanel>

            {/* Right Panel - Quote (Desktop Only) */}
            <HeroRightPanel>
            <HeroQuoteBox
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <HeroQuoteText>
                {HOME_CONTENT.hero.quote.line1}{' '}
                <span style={{ color: 'rgba(150, 150, 150, 0.6)' }}>{HOME_CONTENT.hero.quote.line1Fade}</span>
                </HeroQuoteText>
                <HeroQuoteText style={{ marginTop: '0.25rem' }}>
                {HOME_CONTENT.hero.quote.line2}{' '}
                <span style={{ color: '#D4AF37' }}>{HOME_CONTENT.hero.quote.line2Highlight}</span>
                </HeroQuoteText>
            </HeroQuoteBox>
            </HeroRightPanel>
        </HeroMainLayout>
        </HeroSection>
            {/* ================================================================= */}
      {/* THUMBNAIL CAROUSEL SECTION */}
      {/* ================================================================= */}
      <SlideIn direction="up" delay={0.2}>
        <CarouselContainer>
          <CarouselFade className="left" />
          <CarouselFade className="right" />

          <CarouselStrip>
            {/* First set */}
            {THUMBNAILS.map((item, index) => (
              <ThumbnailCard
                key={index}
                onClick={() => handlePageChange(item.id)}
                whileHover={{ scale: 1.02 }}
              >
                <ThumbnailImage src={item.image} alt={item.label} />
                <ThumbnailOverlay />
                <ThumbnailTag>{item.tag}</ThumbnailTag>
                <ThumbnailLabel>
                  <ThumbnailLabelText>{item.label}</ThumbnailLabelText>
                  <ChevronRightIcon
                    sx={{
                      fontSize: '0.75rem',
                      color: '#D4AF37',
                      flexShrink: 0,
                    }}
                  />
                </ThumbnailLabel>
              </ThumbnailCard>
            ))}
            {/* Duplicate for continuous scroll */}
            {THUMBNAILS.map((item, index) => (
              <ThumbnailCard key={`dup-${index}`} disabled>
                <ThumbnailImage src={item.image} alt={item.label} />
                <ThumbnailOverlay />
                <ThumbnailTag>{item.tag}</ThumbnailTag>
                <ThumbnailLabel>
                  <ThumbnailLabelText>{item.label}</ThumbnailLabelText>
                  <ChevronRightIcon
                    sx={{
                      fontSize: '0.75rem',
                      color: '#D4AF37',
                      flexShrink: 0,
                    }}
                  />
                </ThumbnailLabel>
              </ThumbnailCard>
            ))}
          </CarouselStrip>
        </CarouselContainer>
      </SlideIn>
         {/* ================================================================= */}
      {/* MARQUEE SECTION */}
      {/* ================================================================= */}
      <FadeIn delay={0.3}>
        <MarqueeSection>
          <MarqueeStrip>
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeItem key={index}>
                <span style={{ position: 'relative' }}>{item}</span>
              </MarqueeItem>
            ))}
            {/* Duplicate for seamless loop */}
            {MARQUEE_ITEMS.map((item, index) => (
              <MarqueeItem key={`dup-${index}`}>
                <span style={{ position: 'relative' }}>{item}</span>
              </MarqueeItem>
            ))}
          </MarqueeStrip>
        </MarqueeSection>
      </FadeIn>
       {/* ================================================================= */}
      {/* STATS SECTION */}
      {/* ================================================================= */}
      <StatsSection>
        <FadeIn>
          <SectionHeadingContainer>
            <SectionSubtitle>{HOME_CONTENT.stats.subtitle}</SectionSubtitle>
            <SectionTitle>
              {HOME_CONTENT.stats.title} <span className="highlight" style={{ color: '#D4AF37' }}>{HOME_CONTENT.stats.titleHighlight}</span>
            </SectionTitle>
          </SectionHeadingContainer>
        </FadeIn>
        
        <Stagger staggerDelay={0.1} direction="up">
          <StatsGrid>
            {HOME_CONTENT.stats.items.map((stat, index) => (
              <StatCard 
                key={index}
                label={stat.label} 
                value={stat.value} 
                icon={stat.icon} 
              />
            ))}
          </StatsGrid>
        </Stagger>
      </StatsSection>
        {/* ================================================================= */}
      {/* STATS SECTION */}
      {/* ================================================================= */}
      <StatsSection>
        <FadeIn>
          <SectionHeadingContainer>
            <SectionSubtitle>{HOME_CONTENT.stats.subtitle}</SectionSubtitle>
            <SectionTitle>
              {HOME_CONTENT.stats.title} <span className="highlight" style={{ color: '#D4AF37' }}>{HOME_CONTENT.stats.titleHighlight}</span>
            </SectionTitle>
          </SectionHeadingContainer>
        </FadeIn>
        
        <Stagger staggerDelay={0.1} direction="up">
          <StatsGrid>
            {HOME_CONTENT.stats.items.map((stat, index) => (
              <StatCard 
                key={index}
                label={stat.label} 
                value={stat.value} 
                icon={stat.icon} 
              />
            ))}
          </StatsGrid>
        </Stagger>
      </StatsSection>
      {/* ================================================================= */}
      {/* JOURNEY MAP SECTION */}
      {/* ================================================================= */}
      <JourneySection>
        <JourneyBackground />
        
        <JourneyContainer>
          {/* Section Header */}
          <FadeIn>
            <SectionHeadingContainer>
              <SectionSubtitle>{HOME_CONTENT.journey.subtitle}</SectionSubtitle>
              <SectionTitle>
                {HOME_CONTENT.journey.title} <span className="highlight">{HOME_CONTENT.journey.titleHighlight}</span>
              </SectionTitle>
            </SectionHeadingContainer>
          </FadeIn>

          {/* Grid Timeline Cards */}
          <Stagger staggerDelay={0.08}>
            <TimelineWrapper>
              {HOME_CONTENT.journey.milestones.map((milestone, index) => (
                <TimelineItem key={index}>
                  <TimelineContent>
                    <MilestoneCard whileHover={{ scale: 1.03, y: -8 }}>
                      <Box>
                        <YearBadge
                          sx={{
                            background: `linear-gradient(135deg, ${milestone.color}, ${milestone.color}dd)`,
                            boxShadow: `0 4px 15px ${milestone.color}40`
                          }}
                        >
                          {milestone.year}
                        </YearBadge>
                        <MilestoneTitle>{milestone.title}</MilestoneTitle>
                      </Box>
                      <MilestoneDescription>{milestone.description}</MilestoneDescription>
                    </MilestoneCard>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </TimelineWrapper>
          </Stagger>

          {/* CTA Button */}
          <Box sx={{ textAlign: 'center', marginTop: { xs: theme.spacing(4), md: theme.spacing(5) } }}>
            <JourneyCTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(PAGES.JOURNEY)}
            >
              {HOME_CONTENT.journey.button}
              <ChevronRightIcon />
            </JourneyCTAButton>
          </Box>
        </JourneyContainer>
      </JourneySection>
      
      {/* ================================================================= */}
      {/* ENHANCED SOCIAL DASHBOARD SECTION */}
      {/* ================================================================= */}
      <SocialSection>
        <SocialHeader>
          <FadeIn>
            <Box>
              <SectionHeadingContainer className="align-left" sx={{ marginBottom: 0 }}>
                <SectionSubtitle>{HOME_CONTENT.social.subtitle}</SectionSubtitle>
                <SectionTitle>{HOME_CONTENT.social.title}</SectionTitle>
              </SectionHeadingContainer>
            </Box>
          </FadeIn>

          <Stagger staggerDelay={0.1}>
            <SocialStats>
              {/* YouTube Stats - Live Data */}
              <StatBox 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(255, 0, 0, 0.1) 0%, rgba(139, 0, 0, 0.05) 100%)',
                  borderLeft: '3px solid #FF0000'
                }}
              >
                <StatIcon>
                  <YouTubeIcon sx={{ fontSize: '2rem', color: '#FF0000' }} />
                </StatIcon>
                <StatContent>
                  {isLoadingStats ? (
                    <StatValue style={{ fontSize: '1.5rem', opacity: 0.5 }}>
                      {HOME_CONTENT.social.stats.youtube.loading}
                    </StatValue>
                  ) : (
                    <>
                      <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                        {youtubeStats?.subscribers || HOME_CONTENT.social.stats.youtube.fallback}
                      </StatValue>
                      <StatLabel>{HOME_CONTENT.social.stats.youtube.label}</StatLabel>
                      {youtubeStats?.totalViews && (
                        <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                          {youtubeStats.totalViews} {HOME_CONTENT.social.stats.youtube.viewsLabel}
                        </Box>
                      )}
                    </>
                  )}
                </StatContent>
              </StatBox>

              {/* Instagram Stats */}
              <StatBox 
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{ 
                  background: 'linear-gradient(135deg, rgba(225, 48, 108, 0.1) 0%, rgba(193, 53, 132, 0.05) 100%)',
                  borderLeft: '3px solid #E1306C'
                }}
              >
                <StatIcon>
                  <InstagramIcon sx={{ fontSize: '2rem', color: '#E1306C' }} />
                </StatIcon>
                <StatContent>
                  <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                    {HOME_CONTENT.social.stats.instagram.value}
                  </StatValue>
                  <StatLabel>{HOME_CONTENT.social.stats.instagram.label}</StatLabel>
                  <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                    {HOME_CONTENT.social.stats.instagram.subtitle}
                  </Box>
                </StatContent>
              </StatBox>

              {/* Total Videos */}
              {youtubeStats?.totalVideos && (
                <StatBox 
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                    borderLeft: '3px solid #D4AF37'
                  }}
                >
                  <StatIcon>
                    <MovieIcon sx={{ fontSize: '2rem', color: '#D4AF37' }} />
                  </StatIcon>
                  <StatContent>
                    <StatValue style={{ fontSize: '2rem', fontWeight: 700 }}>
                      {youtubeStats.totalVideos}
                    </StatValue>
                    <StatLabel>{HOME_CONTENT.social.stats.videos.label}</StatLabel>
                    <Box sx={{ mt: 0.5, fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>
                      {HOME_CONTENT.social.stats.videos.subtitle}
                    </Box>
                  </StatContent>
                </StatBox>
            )}
          </SocialStats>
          </Stagger>
        </SocialHeader>

        {/* Featured Videos Grid */}
        {isLoadingVideos ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            minHeight: '300px',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1rem'
          }}>
            {HOME_CONTENT.social.loading}
          </Box>
        ) : (
          <Stagger staggerDelay={0.1}>
            <VideoGrid>
              {featuredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <VideoImage 
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`} 
                    alt={video.title} 
                  />
                  <VideoOverlay />

                  <VideoPlayButton
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    <PlayIcon>
                      <PlayArrowIcon sx={{ fontSize: '1.5rem' }} />
                    </PlayIcon>
                  </VideoPlayButton>

                  <VideoContent>
                    <VideoTag>{video.tag}</VideoTag>
                    <VideoTitle>{video.title}</VideoTitle>
                  </VideoContent>
                </VideoCard>
              ))}
            </VideoGrid>
          </Stagger>
        )}

        <ViewAllButton 
          whileHover={{ scale: 1.05, x: 5 }} 
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(YOUTUBE_CONFIG.channelUrl, '_blank')}
        >
          {HOME_CONTENT.social.viewAllButton}
          <ChevronRightIcon sx={{ fontSize: '1rem' }} />
        </ViewAllButton>
      </SocialSection>

 
    </HomeWrapper>
  );
};