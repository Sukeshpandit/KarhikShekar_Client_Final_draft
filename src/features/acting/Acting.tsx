import { motion } from 'motion/react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons';

import { PageType, PAGES } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, ZoomIn } from '../../shared/components';
import { ShowreelStack, ActingBits, PressReviews } from './components';
import {
  ActingWrapper,
  HeroStickyWrapper,
  HeroSection,
  HeroDarkTint,
  HeroGradientLeft,
  HeroGradientBottom,
  HeroVideo,
  HeroAmbientGlow,
  HeroContent,
  HeroInner,
  HeroBadge,
  HeroBadgeText,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  HeroSpacer,
  HeroStatsGrid,
  HeroStatCard,
  HeroStatLabel,
  HeroStatValue,
  HeroStatDescription,
  HeroButtonGroup,
  HeroPrimaryButton,
  HeroSecondaryButton,
  BiographySection,
  BiographyBackground,
  BiographyOverlay,
  BiographyOverlayRight,
  BiographyGrid,
  BiographyContent,
  BiographyTitle,
  BiographyTextContainer,
  BiographyLeadText,
  BiographyParagraph,
  BiographyButtonGroup,
  BiographyPrimaryButton,
  BiographySecondaryButton,
  BiographyPortrait,
  BiographyPortraitInner,
  BiographyPortraitOverlay,
  GallerySection,
  GalleryContainer,
  GalleryHeader,
  GalleryGrid,
  GalleryItem,
  GalleryItemOverlay,
  GalleryItemBorder,
  GalleryItemCorner,
  GalleryItemScanLine,
  CTASection,
  CTAInner,
  CTAGlow,
  CTAContent,
  CTATextContent,
  CTATitle,
  CTADescription,
  CTAButton,
} from './Acting.style';

interface ActingProps {
  setPage?: (page: PageType) => void;
}

// ==================== CONTENT DATA ====================
const ACTING_CONTENT = {
  hero: {
    badge: 'Professional Actor',
    title: {
      line1: GLOBAL_CONFIG.personal.firstName,
      line2: GLOBAL_CONFIG.personal.middleName,
      line3: GLOBAL_CONFIG.personal.lastName,
      highlightLine: 2, // Which line to highlight (0-based index)
    },
    subtitle: 'Action Specialist • Character Actor • Kannada Cinema',
    description: {
      text: 'Bringing raw intensity and authentic depth to every role. With 8+ years of experience in action and dramatic cinema, I deliver performances that resonate beyond the screen.',
      highlights: ['raw intensity', 'authentic depth'], // Words to make bold
    },
    stats: [
      {
        label: 'Experience',
        value: '08',
        description: 'Feature Films',
      },
      {
        label: 'Language',
        value: 'KANNADA',
        description: '(Native Speaker)',
        span: { xs: 2, md: 1 }, // Grid column span
      },
    ],
    buttons: {
      primary: 'AVAILABLE FOR CASTING',
      secondary: 'WATCH SHOWREEL',
    },
  },
  biography: {
    title: 'Acting Biography',
    titleHighlight: 'Acting', // Word to highlight
    leadText: 'A presence that commands the frame and a depth that lingers long after the credits roll.',
    paragraphs: [
      'With over eight years of experience across independent cinema and mainstream productions, Karthik has carved a niche as a transformative performer. His unique value lies in the intersection of raw, visceral intensity and quiet, calculated vulnerability.',
      'Whether portraying a weathered antagonist or a complex action lead, Karthik brings an authenticity that anchors every scene — making him a preferred collaborator for directors seeking truth in every frame.',
    ],
    buttons: {
      primary: 'Full CV / Credits',
      secondary: 'Download Headshots',
    },
  },
  gallery: {
    title: 'The Gallery',
    titleHighlight: 'Gallery', // Word to highlight
    subtitle: 'Audition Frames & On-Set Captures',
  },
  cta: {
    title: {
      line1: 'Collaborate',
      line2: 'with Karthik',
    },
    description: 'For inquiries regarding new projects, theatrical representation, or commercial bookings, reach out directly.',
    button: 'Contact Talent Agency',
  },
};

const reels = [
  {
    title: 'Acting Reel 2025',
    subtitle: 'Action, Drama & Commercial Highlights',
    duration: '03:45',
    label: 'Official Reel',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
  },
  {
    title: 'Action Showcase',
    subtitle: 'High-Intensity Fight & Stunt Sequences',
    duration: '02:10',
    label: 'Action Cut',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop',
  },
  {
    title: 'Drama Highlights',
    subtitle: 'Character Depth & Emotional Range',
    duration: '04:20',
    label: 'Drama Cut',
    youtubeId: '',
    videoSrc: '',
    thumbnail: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=2070&auto=format&fit=crop',
  },
];

const galleryImages = [
  { src: 'Acting/Anger.jpg', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'Gym/heroImage2.png', span: 'col-span-1 row-span-1' },
  { src: 'Gym/heroImage3.png', span: 'col-span-1 row-span-1' },
  { src: 'Gym/Homehero1.JPG', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'Acting/Prabas.jpg', span: 'col-span-1 row-span-2' },
  { src: 'Acting/shared image (1).jpg', span: 'col-span-1 md:col-span-2 row-span-2' },
  { src: 'Gym/shared image (3).jpg', span: 'col-span-1 row-span-1' },
  { src: 'Gym/shared image (4).jpg', span: 'col-span-1 row-span-1' },
  { src: 'Acting/shared image (5).jpg', span: 'col-span-1 row-span-1' },
  { src: 'Acting/IMG-20260413-WA0087.jpg', span: 'col-span-1 md:col-span-2 row-span-1' },
  { src: 'Acting/Tiger_prabrakar.jpg', span: 'col-span-1 row-span-1' },
];

export const Acting = ({ setPage }: ActingProps) => {
  const handlePageChange = (page: string) => {
    if (setPage) {
      setPage(page as PageType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ActingWrapper>
      {/* ==================== HERO SECTION ==================== */}
      <HeroStickyWrapper>
        <HeroSection>
          <HeroDarkTint />
          <HeroGradientLeft />
          <HeroGradientBottom />

          <HeroVideo autoPlay muted loop playsInline>
            <source src={`${import.meta.env.BASE_URL}assets/video/hero.mp4`} type="video/mp4" />
          </HeroVideo>

          <HeroAmbientGlow sx={{ top: '-10%', left: '-10%', background: 'rgba(201,168,76,0.05)', filter: 'blur(120px)' }} />
          <HeroAmbientGlow sx={{ bottom: '-10%', right: '-10%', background: 'rgba(41,59,75,0.2)', filter: 'blur(120px)' }} />

          <HeroContent>
            <HeroInner>
              {/* Professional Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <HeroBadge>
                  <HeroBadgeText>{ACTING_CONTENT.hero.badge}</HeroBadgeText>
                </HeroBadge>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <HeroTitle>
                  {ACTING_CONTENT.hero.title.line1}<br />
                  <span className="highlight">{ACTING_CONTENT.hero.title.line2}</span><br />
                  {ACTING_CONTENT.hero.title.line3}
                </HeroTitle>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <HeroSubtitle>
                  {ACTING_CONTENT.hero.subtitle}
                </HeroSubtitle>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
             transition={{ duration: 0.6, delay: 0.6 }}
              >
                <HeroDescription>
                  Bringing <strong>raw intensity</strong> and <strong>authentic depth</strong> to every role. 
                  With 8+ years of experience in action and dramatic cinema, I deliver performances 
                  that resonate beyond the screen.
                </HeroDescription>
              </motion.div>

              <HeroSpacer />

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <HeroStatsGrid>
                  {ACTING_CONTENT.hero.stats.map((stat, index) => (
                    <HeroStatCard 
                      key={index}
                      className="group" 
                      sx={stat.span ? { gridColumn: { xs: `span ${stat.span.xs}`, md: `span ${stat.span.md}` } } : {}}
                    >
                      <HeroStatLabel>{stat.label}</HeroStatLabel>
                      <HeroStatValue className="stat-value">{stat.value}</HeroStatValue>
                      <HeroStatDescription>{stat.description}</HeroStatDescription>
                    </HeroStatCard>
                  ))}
                </HeroStatsGrid>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <HeroButtonGroup>
                  <HeroPrimaryButton
                    sx={{ '&:hover': { transform: 'scale(1.02)' }, '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }}
                  >
                    {ACTING_CONTENT.hero.buttons.primary}
                  </HeroPrimaryButton>
                  <HeroSecondaryButton
                    sx={{ '&:hover': { transform: 'scale(1.02)' }, '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }}
                  >
                    <FontAwesomeIcon icon={faPlay} />
                    {ACTING_CONTENT.hero.buttons.secondary}
                  </HeroSecondaryButton>
                </HeroButtonGroup>
              </motion.div>
            </HeroInner>
          </HeroContent>
        </HeroSection>
      </HeroStickyWrapper>
        {/* ==================== ACTING BITS ==================== */}
      <ActingBits />

      {/* ==================== SHOWREEL STACK ==================== */}
      {/* <ShowreelStack reels={reels} /> */}

      {/* ==================== BIOGRAPHY SECTION ==================== */}
      <BiographySection>
        <BiographyBackground>
          <img
            src={`${import.meta.env.BASE_URL}assets/Acting/Anger.jpg`}
            alt=""
            aria-hidden
          />
          <BiographyOverlay />
          <BiographyOverlayRight />
        </BiographyBackground>

        <BiographyGrid>
          <SlideIn direction="left" delay={0.2}>
            <BiographyContent>
              <BiographyTitle>
                <span className="highlight">{ACTING_CONTENT.biography.titleHighlight}</span> {ACTING_CONTENT.biography.title.replace(ACTING_CONTENT.biography.titleHighlight, '').trim()}
              </BiographyTitle>

              <BiographyTextContainer>
                <BiographyLeadText>
                  {ACTING_CONTENT.biography.leadText}
                </BiographyLeadText>
                {ACTING_CONTENT.biography.paragraphs.map((paragraph, index) => (
                  <BiographyParagraph key={index}>
                    {paragraph}
                  </BiographyParagraph>
                ))}
              </BiographyTextContainer>

              <BiographyButtonGroup>
                <BiographyPrimaryButton
                  sx={{ '&:hover': { transform: 'scale(1.02)' }, '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }}
                >
                  {ACTING_CONTENT.biography.buttons.primary}
                </BiographyPrimaryButton>
                <BiographySecondaryButton
                  sx={{ '&:hover': { transform: 'scale(1.02)' }, '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }}
                >
                  {ACTING_CONTENT.biography.buttons.secondary}
                </BiographySecondaryButton>
              </BiographyButtonGroup>
            </BiographyContent>
          </SlideIn>

          <SlideIn direction="right" delay={0.35}>
            <BiographyPortrait>
              <BiographyPortraitInner>
                <img
                  alt="Karthik Shekar Acharya Portrait"
                  src={`${import.meta.env.BASE_URL}assets/Acting/Anger.jpg`}
                />
                <BiographyPortraitOverlay />
              </BiographyPortraitInner>
            </BiographyPortrait>
          </SlideIn>
        </BiographyGrid>
      </BiographySection>

      {/* ==================== ACTING BITS ==================== */}
      {/* <ActingBits /> */}

      {/* ==================== PRESS & REVIEWS ==================== */}
      <PressReviews />

      {/* ==================== PHOTO GALLERY ==================== */}
      <GallerySection>
        <GalleryContainer>
          <FadeIn delay={0.2}>
            <GalleryHeader>
              <Box component="h2" sx={{
                fontFamily: '"Bebas Neue", sans-serif',
                fontSize: 'clamp(3.75rem, 8vw, 6rem)',
                color: 'white',
                textTransform: 'uppercase',
                letterSpacing: '0.025em',
                '& .highlight': {
                  color: '#C9A84C',
                  fontStyle: 'italic',
                },
              }}>
                {ACTING_CONTENT.gallery.title.replace(ACTING_CONTENT.gallery.titleHighlight, '')} <span className="highlight">{ACTING_CONTENT.gallery.titleHighlight}</span>
              </Box>
              <Box sx={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '0.875rem',
                fontFamily: '"Inter", sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.3em',
                mt: 1.5,
              }}>
                {ACTING_CONTENT.gallery.subtitle}
              </Box>
            </GalleryHeader>
          </FadeIn>

          <Stagger staggerDelay={0.04}>
            <GalleryGrid>
              {galleryImages.map((item, i) => (
                <GalleryItem
                  key={i}
                  className="GalleryItem"
                  sx={{
                    gridColumn: item.span.split(' ')[0].replace('col-span-', 'span '),
                    gridRow: item.span.split(' ').find(s => s.includes('row-span'))?.replace('row-span-', 'span ') || 'span 1',
                  }}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}assets/${item.src}`}
                    alt=""
                  />
                  <GalleryItemOverlay />
                  <GalleryItemBorder />
                  <GalleryItemCorner />
                  <GalleryItemScanLine />
                </GalleryItem>
              ))}
            </GalleryGrid>
          </Stagger>
        </GalleryContainer>
      </GallerySection>

      {/* ==================== COLLABORATE CTA ==================== */}
      <CTASection>
        <CTAInner>
          <CTAGlow sx={{ top: 0, right: 0, marginRight: '-5rem', marginTop: '-5rem' }} />
          <CTAGlow sx={{ bottom: 0, left: 0, marginLeft: '-5rem', marginBottom: '-5rem' }} />

          <FadeIn delay={0.2}>
            <CTAContent>
              <CTATextContent>
                <CTATitle>
                  {ACTING_CONTENT.cta.title.line1}<br />{ACTING_CONTENT.cta.title.line2}
                </CTATitle>
                  <CTADescription>
                  {ACTING_CONTENT.cta.description}
                </CTADescription>
              </CTATextContent>

              <ScaleIn delay={0.5}>
                <CTAButton 
                  onClick={() => handlePageChange(PAGES.CONTACT)}
                  sx={{ '&:hover': { transform: 'scale(1.05)' }, '&:active': { transform: 'scale(0.95)' }, transition: 'transform 0.2s' }}
                >
                  <span>{ACTING_CONTENT.cta.button}</span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </CTAButton>
              </ScaleIn>
            </CTAContent>
          </FadeIn>
        </CTAInner>
      </CTASection>
    </ActingWrapper>
  );
};
