import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import {
  Shield,
  PlayArrow,
  Phone,
  Warning,
  EmojiEvents,
  People,
  LocationOn,
  YouTube,
  OpenInNew,
  Public,
  Bolt,
  TrendingUp,
  Favorite,
  AccessTime,
  CheckCircle,
  KeyboardArrowDown,
  Star,
  ChatBubble,
  Share,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';
import { PageType } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, Bounce } from '../../shared/components';
import {
  WildlifeWrapper,
  HeroSection,
  HeroBackground,
  HeroBackgroundImage,
  HeroBackgroundOverlay,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  HeroButtonGroup,
  EmergencyButton,
  SecondaryButton,
  StatsGrid,
  StatCard,
  StatIconWrapper,
  StatLabel,
  StatValue,
  ScrollIndicator,
  Section,
  SectionBackground,
  SectionContainer,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  VideoPlayerContainer,
  LoadingState,
  Spinner,
  VideoFrame,
  VideoStats,
  VideoStatBadge,
  VideoGrid,
  VideoThumbnail,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailStats,
  ThumbnailTitle,
  VideoMetadataCard,
  VideoMetadataHeader,
  VideoMetadataTitle,
  VideoMetadataLocation,
  VideoMetadataActions,
  ShareButton,
  NavigationButton,
  ChannelButton,
  SubscribeContainer,
  YouTubeSubscribeButton,
  SubscribeButtonGroup,
  SubscribeBenefits,
  BenefitsGrid,
  BenefitCard,
  SpeciesGrid,
  SpeciesCard,
  DangerBar,
  SpeciesImage,
  SpeciesImageOverlay,
  SpeciesContent,
  SpeciesHeader,
  SpeciesInfo,
  SpeciesName,
  SpeciesScientific,
  DangerIcon,
  SpeciesFooter,
  CategoryBadge,
  RiskLabel,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialRating,
  TestimonialQuote,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo,
  AuthorName,
  AuthorLocation,
  TestimonialRescueBadge,
  StepsGrid,
  StepCard,
  StepCardInner,
  StepIconWrapper,
  StepNumber,
  StepTitle,
  StepDescription,
  StepConnector,
  CTAContainer,
  CTAContent,
  CTAButton,
  SafetyNotice,
  SafetyHeader,
  SafetyText,
  StickyEmergencyButton,
} from './Wildlife.style';

// ==================== TYPES & INTERFACES ====================

interface Video {
  title: string;
  location: string;
  views: string;
  likes: string;
  videoId: string;
  badge: string | null;
  thumbnail: string;
  publishedAt: string;
}

interface Species {
  name: string;
  scientific: string;
  category: 'Venomous' | 'Non-Venomous';
  danger: 'High' | 'Low';
  color: 'red' | 'green';
  image: string;
}

interface Testimonial {
  name: string;
  initial: string;
  location: string;
  rating: number;
  text: string;
  rescue: string;
  avatar?: string;
}

interface Stat {
  value: number | string;
  suffix?: string;
  label: string;
  icon: typeof EmojiEvents;
  color?: string;
}

interface WildlifeProps {
  setPage?: (page: PageType) => void;
}

// ==================== CONFIGURATION ====================

const CONFIG = {
  youtube: {
    ...GLOBAL_CONFIG.social.youtube,
    maxResults: 5,
  },
  contact: GLOBAL_CONFIG.contact,
  hero: {
    name: GLOBAL_CONFIG.personal.firstName,
    surname: `${GLOBAL_CONFIG.personal.middleName} ${GLOBAL_CONFIG.personal.lastName}`,
    tagline: GLOBAL_CONFIG.titles.wildlife,
    description: '500+ Lives Saved | 10+ Years Experience | 24/7 Emergency Response',
    badge: 'Certified Wildlife Rescuer',
  },
};

// ==================== WILDLIFE CONTENT ====================

const WILDLIFE_CONTENT = {
  hero: {
    scrollText: 'Scroll to explore',
  },
  
  featuredRescues: {
    title: 'Watch',
    titleHighlight: 'Rescue Operations',
    description: 'Live snake rescue operations from the field',
    loading: 'Loading rescue videos...',
  },
  
  expertise: {
    title: 'Species',
    titleHighlight: 'Expertise',
    description: 'Expert handling of venomous and non-venomous species',
    badges: {
          venomous: '🐍 Venomous',
      safe: '✓ Safe',
    },
    riskLabel: 'Risk',
  },
  
  testimonials: {
    title: 'Client',
    titleHighlight: 'Reviews',
    description: 'Trusted by families and organizations across India',
  },
  
  howItWorks: {
    title: 'How It',
    titleHighlight: 'Works',
    description: 'Simple 4-step process for safe rescue',
    steps: [
      {
        number: '01',
        title: 'Emergency Call',
        description: 'Reach out 24/7 with location and snake details for immediate assistance',
        icon: Phone,
        gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      },
      {
        number: '02',
        title: 'Risk Assessment',
        description: 'Expert evaluation of species and safety protocols setup',
        icon: Shield,
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
      },
      {
        number: '03',
        title: 'Safe Rescue',
        description: 'Professional extraction ensuring zero harm to humans and wildlife',
        icon: Favorite,
        gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      },
      {
        number: '04',
        title: 'Relocation',
        description: 'Safe release to appropriate natural wildlife habitat',
        icon: Public,
        gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      },
    ],
  },
  
  cta: {
    title: {
      line1: 'Emergency?',
      line2: "We're Here 24/7",
    },
    description: "Don't panic. Professional rescue is just a call away. Rapid response, safe outcome.",
    button: 'Call',
    safetyNotice: {
      title: 'Safety Notice',
      text: 'Professional training required. Content for educational purposes only. For emergencies, contact',
    },
  },
};

// ==================== ENHANCED STATS DATA ====================

const IMPACT_STATS: Stat[] = [
  { value: 500, suffix: '+', label: 'Successful Rescues', icon: Favorite, color: 'from-red-500 to-pink-500' },
  { value: 100, suffix: '%', label: 'Safe Release Rate', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: TrendingUp, color: 'from-primary to-cyan-500' },
  { value: 24, suffix: '/7', label: 'Emergency Response', icon: AccessTime, color: 'from-orange-500 to-red-500' },
];

const FALLBACK_VIDEOS: Video[] = [
  { title: 'Live Cobra Rescue from Residential Area', location: 'Bangalore', views: '1.2M', likes: '45K', videoId: 'Thy0fpXXlSU', badge: 'Featured', thumbnail: '', publishedAt: '' },
  { title: "Russell's Viper Rescue", location: 'Mysuru', views: '850K', likes: '32K', videoId: 'oKSWfiVqqXM', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Python Relocation Operation', location: 'Bangalore', views: '1.1M', likes: '38K', videoId: '51sY3B8Rbnc', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Rat Snake from Warehouse', location: 'Goa', views: '620K', likes: '28K', videoId: 'TRSBYX3Xtso', badge: null, thumbnail: '', publishedAt: '' },
  { title: 'Snake Relocation - Safe & Secure', location: 'Bangalore', views: '750K', likes: '35K', videoId: 'bnpPF_H70SM', badge: null, thumbnail: '', publishedAt: '' },
];

const SPECIES_DATA: Species[] = [
  {
    name: 'Spectacled Cobra',
    scientific: 'Naja naja',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-1.jpg`
  },
  {
    name: "Russell's Viper",
    scientific: 'Daboia russelii',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-2.jpg`
  },
  {
    name: 'Indian Rock Python',
    scientific: 'Python molurus',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-4.jpg`
  },
  {
    name: 'Common Krait',
    scientific: 'Bungarus caeruleus',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-4.jpg`
  },
  {
    name: 'Rat Snake',
    scientific: 'Ptyas mucosa',
    category: 'Non-Venomous',
    danger: 'Low',
    color: 'green',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-2.jpg`
  },
  {
    name: 'Saw-scaled Viper',
    scientific: 'Echis carinatus',
    category: 'Venomous',
    danger: 'High',
    color: 'red',
    image: `${import.meta.env.BASE_URL}assets/wildlife/rescue-1.jpg`
  },
];

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Priya Malhotra',
    initial: 'PM',
    location: 'Bangalore',
    rating: 5,
    text: 'Arrived within 12 minutes and handled the situation with complete professionalism. He saved the snake and kept our family safe.',
    rescue: 'Spectacled Cobra',
  },
  {
    name: 'Rajesh Agarwal',
    initial: 'RA',
    location: 'Mysuru',
    rating: 5,
    text: 'Outstanding expertise and dedication to wildlife conservation. He educated us on coexistence while safely relocating the python.',
    rescue: 'Indian Rock Python',
  },
  {
    name: 'Sneha Kumar',
    initial: 'SK',
    location: 'Bangalore',
    rating: 5,
    text: 'Called at 2 AM with a viper in our bedroom. His rapid response and calm demeanor prevented a potential tragedy.',
    rescue: "Russell's Viper",
  },
  {
    name: 'Vikram Singh',
    initial: 'VS',
    location: 'Pune',
    rating: 5,
    text: 'Best decision to call for professional help. He handled a highly dangerous krait with precision and zero risk to anyone.',
    rescue: 'Common Krait',
  },
  {
    name: 'Anjali Sharma',
    initial: 'AS',
    location: 'Bangalore',
    rating: 5,
    text: 'Not only rescued the snake from our warehouse but also gave valuable tips to prevent future encounters. Truly professional!',
    rescue: 'Rat Snake',
  },
  {
    name: 'Rohan Patel',
    initial: 'RP',
    location: 'Goa',
    rating: 5,
    text: 'Exceptional service with deep knowledge of snake behavior. He turned a scary situation into an educational experience for my kids.',
    rescue: "Saw-scaled Viper",
  },
];

// ==================== API SERVICES ====================

const fetchYouTubeVideos = async (): Promise<Video[]> => {
  if (!CONFIG.youtube.apiKey) {
    console.warn('YouTube API key not configured. Using fallback videos.');
    return FALLBACK_VIDEOS;
  }

  try {
    // Try fetching with channel handle first
    let channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=${CONFIG.youtube.channelHandle.replace('@', '')}&key=${CONFIG.youtube.apiKey}`
    );

    // If handle fails, try with channel ID
    if (!channelResponse.ok) {
      channelResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CONFIG.youtube.channelId}&key=${CONFIG.youtube.apiKey}`
      );
       }

    if (!channelResponse.ok) throw new Error('Failed to fetch channel data');

    const channelData = await channelResponse.json();
    const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

    if (!uploadsPlaylistId) throw new Error('Uploads playlist not found');

    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${CONFIG.youtube.maxResults}&key=${CONFIG.youtube.apiKey}`
    );

    if (!videosResponse.ok) throw new Error('Failed to fetch videos');
    const videosData = await videosResponse.json();

    const videoIds = videosData.items.map((item: any) => item.snippet.resourceId.videoId).join(',');
    const statsResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoIds}&key=${CONFIG.youtube.apiKey}`
    );

    if (!statsResponse.ok) throw new Error('Failed to fetch video statistics');
    const statsData = await statsResponse.json();

    const formattedVideos: Video[] = videosData.items.map((item: any, index: number) => {
      const videoId = item.snippet.resourceId.videoId;
      const stats = statsData.items.find((stat: any) => stat.id === videoId);
      const viewCount = parseInt(stats?.statistics?.viewCount || '0');
      const likeCount = parseInt(stats?.statistics?.likeCount || '0');

      return {
        title: item.snippet.title,
        location: item.snippet.channelTitle,
        views: formatViews(viewCount),
        likes: formatViews(likeCount),
        videoId: videoId,
        badge: index === 0 ? 'Featured' : null,
        thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || '',
        publishedAt: item.snippet.publishedAt,
      };
    });

    return formattedVideos;
  } catch (error) {
    console.error('Error fetching YouTube videos:', error);
    return FALLBACK_VIDEOS;
  }
};

// ==================== UTILITY FUNCTIONS ====================

const formatViews = (count: number): string => {
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(0)}K`;
  return count.toString();
};

// ==================== ANIMATED COUNTER ====================

const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

// ==================== HERO SECTION ====================

const HeroSectionComponent = () => (
  <HeroSection>
    <HeroBackground>
      <HeroBackgroundImage
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}assets/wildlife/rescue-1.jpg)` }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut" }}
      />
      <HeroBackgroundOverlay />
    </HeroBackground>

    <HeroContent>
      <HeroBadge
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Shield fontSize="small" />
        <span>{CONFIG.hero.badge}</span>
      </HeroBadge>

      <HeroTitle
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h1>
          <span className="name">{CONFIG.hero.name}</span>
          <span className="surname">{CONFIG.hero.surname}</span>
        </h1>
        <p className="tagline">{CONFIG.hero.tagline}</p>
      </HeroTitle>

      <HeroDescription
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {CONFIG.hero.description}
      </HeroDescription>

      <HeroButtonGroup
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <EmergencyButton href={`tel:${CONFIG.contact.phone}`}>
          <div className="shine" />
          <Phone />
          <span>Emergency Hotline</span>
          <Bolt fontSize="small" />
        </EmergencyButton>

        <SecondaryButton href={CONFIG.youtube.channelUrl} target="_blank" rel="noopener noreferrer">
          <YouTube />
          <span>Watch Rescues</span>
        </SecondaryButton>
      </HeroButtonGroup>

      <StatsGrid
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Stagger staggerDelay={0.1}>
          <>
            {IMPACT_STATS.map((stat, index) => {
              const Icon = stat.icon;
              const gradientColors = stat.color === 'from-red-500 to-pink-500' 
                ? 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)'
                : stat.color === 'from-green-500 to-emerald-500' 
                ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
                : stat.color === 'from-primary to-cyan-500' 
                ? 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)'
                : 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)';
              
              return (
                <StatCard key={index}>
                  <StatValue>
                    <AnimatedCounter 
                      end={typeof stat.value === 'string' ? 24 : stat.value} 
                      suffix={stat.suffix || ''} 
                    />
                  </StatValue>
                  
                  <StatIconWrapper
                    sx={{
                      background: gradientColors,
                    }}
                  >
                    <Icon />
                  </StatIconWrapper>
                  
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              );
            })}
                </>
        </Stagger>
      </StatsGrid>
    </HeroContent>

    <ScrollIndicator
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}
      >
        <span>{WILDLIFE_CONTENT.hero.scrollText}</span>
        <KeyboardArrowDown />
      </motion.div>
    </ScrollIndicator>
  </HeroSection>
);

// ==================== FEATURED RESCUES SECTION ====================

const FeaturedRescuesSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [rescueVideos, setRescueVideos] = useState<Video[]>([]);
  const [isLoadingVideos, setIsLoadingVideos] = useState(true);

  useEffect(() => {
    const loadVideos = async () => {
      setIsLoadingVideos(true);
      const videos = await fetchYouTubeVideos();
      setRescueVideos(videos);
      setIsLoadingVideos(false);
    };
    loadVideos();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (rescueVideos.length === 0) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : rescueVideos.length - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        setCurrentVideoIndex((prev) => (prev < rescueVideos.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rescueVideos.length]);

  const handleShare = async () => {
    const video = rescueVideos[currentVideoIndex];
    const shareUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: `Watch this rescue: ${video.title}`,
          url: shareUrl,
        });
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const goToPrevious = () => {
    setCurrentVideoIndex((prev) => (prev > 0 ? prev - 1 : rescueVideos.length - 1));
  };

  const goToNext = () => {
    setCurrentVideoIndex((prev) => (prev < rescueVideos.length - 1 ? prev + 1 : 0));
  };

  return (
    <Section>
      <SectionBackground />
      <SectionContainer>
        <SectionHeader
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle>
            Watch <span className="highlight">Rescue Operations</span>
          </SectionTitle>
          <SectionDescription>Live snake rescue operations from the field</SectionDescription>
        </SectionHeader>

        <VideoPlayerContainer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {isLoadingVideos ? (
            <LoadingState>
              <div className="text-center">
                <Spinner />
                <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600 }}>{WILDLIFE_CONTENT.featuredRescues.loading}</p>
              </div>
            </LoadingState>
          ) : rescueVideos.length > 0 ? (
            <AnimatePresence mode="wait">
              <VideoFrame
                key={currentVideoIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${rescueVideos[currentVideoIndex].videoId}?rel=0&modestbranding=1`}
                  title={rescueVideos[currentVideoIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
                <VideoStats>
                  <VideoStatBadge>
                    👁️ {rescueVideos[currentVideoIndex].views}
                  </VideoStatBadge>
                  <VideoStatBadge>
                    ❤️ {rescueVideos[currentVideoIndex].likes}
                  </VideoStatBadge>
                </VideoStats>

                {/* Navigation Buttons */}
                <NavigationButton
                  direction="left"
                  onClick={goToPrevious}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous video"
                >
                  <KeyboardArrowLeft />
                </NavigationButton>

                <NavigationButton
                  direction="right"
                  onClick={goToNext}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next video"
                >
                  <KeyboardArrowRight />
                </NavigationButton>
              </VideoFrame>
            </AnimatePresence>
          ) : null}
        </VideoPlayerContainer>

        {/* Video Metadata Card */}
        {!isLoadingVideos && rescueVideos.length > 0 && (
          <VideoMetadataCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VideoMetadataHeader>
              <div>
                <VideoMetadataTitle>{rescueVideos[currentVideoIndex].title}</VideoMetadataTitle>
                <VideoMetadataLocation>
                  <LocationOn sx={{ fontSize: 16 }} />
                  {rescueVideos[currentVideoIndex].location}
                </VideoMetadataLocation>
              </div>
              <VideoMetadataActions>
                <ShareButton
                  onClick={handleShare}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Share video"
                >
                  <Share sx={{ fontSize: 20 }} />
                  <span>Share</span>
                </ShareButton>
              </VideoMetadataActions>
            </VideoMetadataHeader>
          </VideoMetadataCard>
        )}

        {!isLoadingVideos && rescueVideos.length > 0 && (
          <Stagger staggerDelay={0.03}>
            <VideoGrid>
                    {rescueVideos.slice(0, 5).map((video, i) => (
                <VideoThumbnail
                  key={i}
                  onClick={() => setCurrentVideoIndex(i)}
                  whileHover={{ scale: 1.05, y: -5 }}
                  active={currentVideoIndex === i}
                aria-label={`Play ${video.title}`}
                title={video.title}
              >
                <ThumbnailImage>
                  <img
                    src={video.thumbnail || `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                    alt={video.title}
                    loading="lazy"
                  />
                </ThumbnailImage>

                <ThumbnailOverlay>
                  <PlayArrow sx={{ color: 'white', fontSize: 28 }} />
                </ThumbnailOverlay>

                <ThumbnailTitle>
                  <span>{video.title}</span>
                </ThumbnailTitle>

                <ThumbnailStats>
                  <p>👁️ {video.views} | ❤️ {video.likes}</p>
                </ThumbnailStats>
              </VideoThumbnail>
            ))}
          </VideoGrid>
          </Stagger>
        )}

        <FadeIn delay={0.3}>
          <div style={{ textAlign: 'center' }}>
            <ChannelButton
              href={CONFIG.youtube.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTube sx={{ fontSize: 28 }} />
              <span>View All on YouTube</span>
              <OpenInNew fontSize="small" />
            </ChannelButton>
          </div>
        </FadeIn>
      </SectionContainer>
    </Section>
  );
};



// ==================== EXPERTISE SECTION ====================

const ExpertiseSection = () => (
  <Section>
    <SectionContainer>
      <FadeIn>
        <SectionHeader>
          <SectionTitle>
            {WILDLIFE_CONTENT.expertise.title} <span className="highlight">{WILDLIFE_CONTENT.expertise.titleHighlight}</span>
          </SectionTitle>
          <SectionDescription>{WILDLIFE_CONTENT.expertise.description}</SectionDescription>
        </SectionHeader>
      </FadeIn>

      <Stagger staggerDelay={0.03}>
        <SpeciesGrid>
          {SPECIES_DATA.map((species, index) => (
            <SpeciesCard key={index}>
            <DangerBar danger={species.danger}>
              {species.danger === 'High' ? '⚠️' : '✅'}
            </DangerBar>
            
            <SpeciesImage>
              <img src={species.image} alt={species.name} loading="lazy" />
              <SpeciesImageOverlay />
            </SpeciesImage>

            <SpeciesContent>
              <SpeciesHeader>
                <SpeciesName>{species.name}</SpeciesName>
                <SpeciesScientific>{species.scientific}</SpeciesScientific>
              </SpeciesHeader>

              <SpeciesFooter>
                <CategoryBadge category={species.category}>
                  {species.category === 'Venomous' ? WILDLIFE_CONTENT.expertise.badges.venomous : WILDLIFE_CONTENT.expertise.badges.safe}
                </CategoryBadge>
                <RiskLabel danger={species.danger}>{species.danger} {WILDLIFE_CONTENT.expertise.riskLabel}</RiskLabel>
              </SpeciesFooter>
            </SpeciesContent>
          </SpeciesCard>
        ))}
      </SpeciesGrid>
      </Stagger>
    </SectionContainer>
  </Section>
);

// ==================== TESTIMONIALS ====================

const TestimonialsSection = () => {
  return (
    <Section>
      <SectionBackground />
      <SectionContainer>
        <FadeIn>
          <SectionHeader>
            <SectionTitle>
              {WILDLIFE_CONTENT.testimonials.title} <span className="highlight">{WILDLIFE_CONTENT.testimonials.titleHighlight}</span>
            </SectionTitle>
            <SectionDescription>{WILDLIFE_CONTENT.testimonials.description}</SectionDescription>
          </SectionHeader>
        </FadeIn>

        <Stagger staggerDelay={0.05}>
          <TestimonialsGrid>
            {TESTIMONIALS_DATA.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                whileHover={{ y: -4 }}
              >
              <TestimonialRating>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} sx={{ fontSize: 14, color: '#facc15', fill: '#facc15' }} />
                ))}
              </TestimonialRating>

              <TestimonialQuote>"{testimonial.text}"</TestimonialQuote>

              <TestimonialAuthor>
                <AuthorAvatar>
                  <span>{testimonial.initial}</span>
                </AuthorAvatar>
                <AuthorInfo>
                  <AuthorName>{testimonial.name}</AuthorName>
                  <AuthorLocation>
                    <LocationOn sx={{ fontSize: 10 }} />
                    {testimonial.location}
                  </AuthorLocation>
                </AuthorInfo>
              </TestimonialAuthor>

              <TestimonialRescueBadge>
                <div className="badge">
                  <CheckCircle sx={{ fontSize: 12, color: '#10b981' }} />
                  <span>{testimonial.rescue}</span>
                </div>
              </TestimonialRescueBadge>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
        </Stagger>
      </SectionContainer>
    </Section>
  );
};

// ==================== HOW IT WORKS ====================

const HowItWorksSection = () => {
  return (
    <Section sx={{ background: 'linear-gradient(to bottom, #0a1d2c, rgba(59, 130, 246, 0.05), #0a1d2c)' }}>
      <SectionBackground />
      <SectionContainer>
        <FadeIn>
          <SectionHeader>
            <SectionTitle>
              {WILDLIFE_CONTENT.howItWorks.title} <span className="highlight">{WILDLIFE_CONTENT.howItWorks.titleHighlight}</span>
            </SectionTitle>
            <SectionDescription>{WILDLIFE_CONTENT.howItWorks.description}</SectionDescription>
          </SectionHeader>
        </FadeIn>

        <Stagger staggerDelay={0.1}>
          <StepsGrid>
            {WILDLIFE_CONTENT.howItWorks.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <StepCard key={index}>
                <StepCardInner>
                  <StepNumber>{step.number}</StepNumber>

                  <StepIconWrapper
                    sx={{
                      background: step.gradient,
                    }}
                  >
                    <Icon />
                  </StepIconWrapper>

                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </StepCardInner>

                {index < WILDLIFE_CONTENT.howItWorks.steps.length - 1 && <StepConnector />}
              </StepCard>
                );
          })}
        </StepsGrid>
        </Stagger>
      </SectionContainer>
    </Section>
  );
};
// ==================== CTA SECTION ====================

const CTASection = () =>(
  <Section>
    <SectionBackground sx={{ background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.1), transparent, transparent)' }} />
    <CTAContainer>
      <FadeIn delay={0.2}>
        <CTAContent>
          <SectionTitle>
            {WILDLIFE_CONTENT.cta.title.line1} <br />
            <span className="highlight" style={{ background: 'linear-gradient(to right, #ef4444, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              {WILDLIFE_CONTENT.cta.title.line2}
            </span>
          </SectionTitle>

          <SectionDescription style={{ marginBottom: '2rem', maxWidth: '640px' }}>
            {WILDLIFE_CONTENT.cta.description}
          </SectionDescription>

          <Bounce delay={0.5}>
            <CTAButton
              href={`tel:${CONFIG.contact.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone sx={{ fontSize: 24 }} />
              <span>{WILDLIFE_CONTENT.cta.button} {CONFIG.contact.phoneDisplay}</span>
            </CTAButton>
          </Bounce>
        </CTAContent>
      </FadeIn>

      <SafetyNotice>
        <SlideIn direction="up" delay={0.7}>
          <SafetyHeader>
            <Warning sx={{ color: '#facc15', fontSize: 18 }} />
            <h3>{WILDLIFE_CONTENT.cta.safetyNotice.title}</h3>
          </SafetyHeader>
          <SafetyText>
            {WILDLIFE_CONTENT.cta.safetyNotice.text}{' '}
            <a href={`tel:${CONFIG.contact.phone}`}>
              {CONFIG.contact.phoneDisplay}
            </a>
          </SafetyText>
        </SlideIn>
      </SafetyNotice>
    </CTAContainer>
  </Section>
);

// ==================== MAIN COMPONENT ====================

export const Wildlife = ({ setPage }: WildlifeProps) => {
  return (
    <WildlifeWrapper>
      {/* Sticky Emergency Button */}
      <StickyEmergencyButton
        href={`tel:${CONFIG.contact.phone}`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Emergency Snake Rescue - Call Now"
      >
        <Phone sx={{ fontSize: 28 }} />
        <span className="indicator-ping" />
        <span className="indicator" />
      </StickyEmergencyButton>

      {/* Sections */}
      <HeroSectionComponent />
      <FeaturedRescuesSection />
      <ExpertiseSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <CTASection />
    </WildlifeWrapper>
  );
};
