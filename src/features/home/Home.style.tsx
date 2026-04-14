import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { motion } from 'motion/react';

// ============================================================================
// MAIN WRAPPER
// ============================================================================

export const HomeWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
}));

// ============================================================================
// HERO SECTION
// ============================================================================

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.default,
  height: '100svh',
  minHeight: '500px',
  
  [theme.breakpoints.up('sm')]: {
    minHeight: '600px',
  },
  
  [theme.breakpoints.up('md')]: {
    minHeight: '700px',
  },
}));

export const HeroImage = styled(motion.img)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: '50% 15%',
  opacity: 1,
  
  [theme.breakpoints.up('sm')]: {
    objectPosition: '55% 20%',
  },
  
  [theme.breakpoints.up('md')]: {
    objectPosition: '52% 30%',
    opacity: 1,
  },
  
  [theme.breakpoints.up('lg')]: {
    objectPosition: '50% 40%',
    opacity: 1,
  },
}));

export const HeroOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 1,
  background: `linear-gradient(to right, ${theme.palette.background.default}dd 0%, ${theme.palette.background.default}99 30%, ${theme.palette.background.default}26 100%)`,
  pointerEvents: 'none',
  
  [theme.breakpoints.up('md')]: {
    background: `linear-gradient(to right, ${theme.palette.background.default}99 0%, ${theme.palette.background.default}80 30%, ${theme.palette.background.default}1a 100%)`,
  },
  
  [theme.breakpoints.up('lg')]: {
    background: `linear-gradient(to right, ${theme.palette.background.default}80 0%, ${theme.palette.background.default}66 30%, ${theme.palette.background.default}0d 100%)`,
  },
}));

export const HeroBlobs = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 2,
  pointerEvents: 'none',
  overflow: 'hidden',
  
  '& > div:nth-of-type(1)': {
    position: 'absolute',
    top: '-96px',
    left: '-64px',
    width: '520px',
    height: '520px',
    backgroundColor: 'rgba(212, 175, 55, 0.1)',
    borderRadius: '50%',
    filter: 'blur(130px)',
  },
  
  '& > div:nth-of-type(2)': {
    position: 'absolute',
    top: '33.333%',
    left: '33.333%',
    width: '280px',
    height: '380px',
    backgroundColor: 'rgba(120, 113, 108, 0.1)',
    borderRadius: '60% 40% 50% 70% / 40% 60% 40% 60%',
    filter: 'blur(90px)',
  },
  
  '& > div:nth-of-type(3)': {
    position: 'absolute',
    top: '50%',
    right: '25%',
    width: '180px',
    height: '260px',
    backgroundColor: 'rgba(120, 113, 108, 0.15)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    transform: 'rotate(12deg)',
  },
}));

export const HeroMainLayout = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  position: 'relative',
  zIndex: 10,
  minHeight: 0,
}));

export const HeroLeftPanel = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(2),
  
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
  
  [theme.breakpoints.up('lg')]: {
    width: '42%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    paddingTop: theme.spacing(10),
  },
}));

export const HeroNameBlock = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  width: '100%',
  maxWidth: '448px',
  
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(3),
  },
  
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    maxWidth: 'none',
    marginBottom: theme.spacing(4),
  },
}));

export const HeroTitle = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2.4rem, 11vw, 7.5rem)',
  lineHeight: 0.9,
  color: theme.palette.common.white,
  letterSpacing: '-0.02em',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  margin: 0,
  
  [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(7rem, 10vw, 11rem)',
  },
}));

export const HeroSubtitle = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2.4rem, 11vw, 7.5rem)',
  lineHeight: 0.9,
  color: theme.palette.primary.main,
  letterSpacing: '-0.02em',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  margin: 0,
   [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(7rem, 10vw, 11rem)',
  },
}));

export const HeroThirdLine = styled('h1')(({ theme }) => ({
  fontSize: 'clamp(2.4rem, 11vw, 7.5rem)',
  lineHeight: 0.9,
  color: theme.palette.common.white,
  letterSpacing: '-0.02em',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  margin: 0,
  
  [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(7rem, 10vw, 11rem)',
  },
}));

export const TaglineContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(1.5),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
    gap: theme.spacing(2),
  },
}));

export const TaglineItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),
  
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-start',
    gap: theme.spacing(3),
  },
}));

export const TaglineIcon = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: theme.palette.primary.main,
  flexShrink: 0,
  transition: 'all 500ms',
  
  [theme.breakpoints.up('lg')]: {
    fontSize: '2rem',
  },
}));

export const TaglineBar = styled(Box)(({ theme }) => ({
  width: '2px',
  height: '32px',
  flexShrink: 0,
  borderRadius: '9999px',
  transition: 'all 700ms',
  
  [theme.breakpoints.up('md')]: {
    height: '40px',
  },
  
  [theme.breakpoints.up('lg')]: {
    height: '48px',
  },
}));

export const TaglineText = styled('p')(({ theme }) => ({
  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 500,
  transition: 'all 500ms',
  margin: 0,
  
  [theme.breakpoints.up('md')]: {
    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  },
  
  [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
    fontWeight: 600,
  },
}));

export const HeroCTAContainer = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
  
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'flex-start',
  },
}));

export const HeroCTAButton = styled(motion.button)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4.5)}`,
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  fontWeight: 900,
  fontSize: theme.typography.pxToRem(12),
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  borderRadius: theme.spacing(1),
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  
  '&:hover': {
    transform: 'scale(1.05)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const HeroSecondaryButton = styled(motion.button)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4.5)}`,
  border: `1px solid rgba(255, 255, 255, 0.2)`,
  color: theme.palette.common.white,
  fontWeight: 900,
  fontSize: theme.typography.pxToRem(12),
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  borderRadius: theme.spacing(1),
  backgroundColor: 'transparent',
  backdropFilter: 'blur(10px)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

export const HeroRightPanel = styled(Box)(({ theme }) => ({
  display: 'none',
  
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    width: '58%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(8),
    paddingRight: theme.spacing(6),
  },
}));

export const HeroQuoteBox = styled(motion.div)(({ theme }) => ({
  textAlign: 'right',
  maxWidth: '300px',
}));

export const HeroQuoteText = styled('p')(({ theme }) => ({
  fontWeight: 900,
  textTransform: 'uppercase',
  lineHeight: 1.4,
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: 'clamp(1rem, 1.6vw, 1.3rem)',
  margin: 0,
  marginBottom: theme.spacing(0.5),
}));

// ============================================================================
// THUMBNAIL CAROUSEL
// ============================================================================

export const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 20,
  flexShrink: 0,
  overflow: 'hidden',
  height: '11rem',
  
  [theme.breakpoints.up('sm')]: {
    height: '13rem',
  },
  
  [theme.breakpoints.up('md')]: {
       height: '15rem',
  },
}));

export const CarouselFade = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '64px',
  zIndex: 10,
  pointerEvents: 'none',
  
  '&.left': {
    left: 0,
    background: `linear-gradient(to right, ${theme.palette.background.default}cc 0%, transparent 100%)`,
  },
  
  '&.right': {
    right: 0,
    background: `linear-gradient(to left, ${theme.palette.background.default}cc 0%, transparent 100%)`,
  },
}));

export const CarouselStrip = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  gap: theme.spacing(2),
  width: 'max-content',
  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  
  animation: 'marquee 40s linear infinite',
  
  '&:hover': {
    animationPlayState: 'paused',
  },
  
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
}));

export const ThumbnailCard = styled(motion.button)(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  borderRadius: theme.spacing(2.25),
  overflow: 'hidden',
  aspectRatio: '16/9',
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  backgroundColor: 'transparent',
  padding: 0,
  height: '100%',
  
  '&:hover': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: '0px',
  },
}));

export const ThumbnailImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center 25%',
  transition: 'transform 500ms',
  
  [`${ThumbnailCard}:hover &`]: {
    transform: 'scale(1.05)',
  },
}));

export const ThumbnailOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default} 0%, ${theme.palette.background.default}4d 40%, transparent 100%)`,
}));

export const ThumbnailTag = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(1.5),
  left: theme.spacing(1.5),
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingTop: theme.spacing(0.5),
  paddingBottom: theme.spacing(0.5),
  borderRadius: '9999px',
  fontSize: theme.typography.pxToRem(8),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  boxShadow: theme.shadows[8],
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(9),
    letterSpacing: '0.2em',
  },
}));

export const ThumbnailLabel = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  paddingLeft: theme.spacing(1.5),
  paddingRight: theme.spacing(1.5),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  backgroundColor: 'rgba(10, 29, 44, 0.85)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
}));

export const ThumbnailLabelText = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  color: theme.palette.common.white,
  margin: 0,
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  flex: 1,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(12),
    letterSpacing: '0.15em',
  },
}));

// ============================================================================
// MARQUEE SECTION - OLD MOVIE REEL STYLE
// ============================================================================

export const MarqueeSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
  
  // Film grain texture overlay
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.1) 3px, rgba(0,0,0,.1) 3px),
      repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,.1) 3px, rgba(0,0,0,.1) 3px)
    `,
    opacity: 0.4,
    pointerEvents: 'none',
    animation: 'filmGrain 0.5s steps(5) infinite',
  },
  
  // Top film strip with sprocket holes
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '30px',
    background: theme.palette.background.default,
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    backgroundImage: `
      repeating-linear-gradient(
        90deg,
        transparent 0px,
        transparent 20px,
        rgba(0,0,0,0.4) 20px,
        rgba(0,0,0,0.4) 30px,
        transparent 30px,
        transparent 50px
      )
    `,
    boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.5)',
  },
  
  '@keyframes filmGrain': {
    '0%, 100%': { transform: 'translate(0, 0)' },
    '10%': { transform: 'translate(-1%, -1%)' },
    '20%': { transform: 'translate(1%, 1%)' },
    '30%': { transform: 'translate(-1%, 1%)' },
    '40%': { transform: 'translate(1%, -1%)' },
    '50%': { transform: 'translate(-1%, -1%)' },
    '60%': { transform: 'translate(1%, 1%)' },
    '70%': { transform: 'translate(-1%, -1%)' },
      '80%': { transform: 'translate(1%, -1%)' },
    '90%': { transform: 'translate(-1%, 1%)' },
  },
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}));

export const MarqueeStrip = styled(Box)(({}) => ({
  display: 'flex',
  gap: '0.75rem',
  width: 'max-content',
  paddingTop: '45px',
  paddingBottom: '15px',
  animation: 'marqueeReel 35s linear infinite, flicker 0.1s infinite alternate',
  
  '@keyframes marqueeReel': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
  
  '@keyframes flicker': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0.97 },
    '100%': { opacity: 1 },
  },
}));

export const MarqueeItem = styled('span')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(1.25rem, 3vw, 2rem)',
  fontWeight: 700,
  letterSpacing: '0.05em',
  color: theme.palette.text.primary,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  padding: '1rem 2rem',
  marginRight: '1.75rem',
  
  // Film frame border around the name - Reel design with theme colors
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: '4px',
  background: `linear-gradient(135deg, ${theme.palette.background.paper}dd 0%, ${theme.palette.background.default}dd 100%)`,
  backdropFilter: 'blur(10px)',
  boxShadow: `
    0 0 20px ${theme.palette.primary.main}25,
    inset 0 0 30px rgba(0,0,0,0.6),
    inset 0 4px 10px rgba(255,255,255,0.05),
    0 4px 15px rgba(0,0,0,0.8)
  `,
  textShadow: `2px 2px 4px rgba(0,0,0,0.9), 0 0 15px ${theme.palette.primary.main}40`,
  
  // Top-left corner notch
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '4px',
    left: '4px',
    width: '12px',
    height: '12px',
    borderTop: `3px solid ${theme.palette.primary.main}`,
    borderLeft: `3px solid ${theme.palette.primary.main}`,
    opacity: 0.8,
  },
  
  // Film frame separator bars on the right: ||
  '&::after': {
    content: '"||"',
    position: 'absolute',
    right: '-1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    color: theme.palette.primary.main,
    fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
    fontWeight: 700,
    opacity: 0.7,
    textShadow: `0 0 15px ${theme.palette.primary.main}, 0 0 30px ${theme.palette.primary.main}30`,
    letterSpacing: '-0.1em',
  },
  
  // Bottom-right corner notch using nested span
  '& > span::after': {
    content: '""',
    position: 'absolute',
    bottom: '-0.6rem',
    right: '-1.3rem',
    width: '12px',
    height: '12px',
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    borderRight: `3px solid ${theme.palette.primary.main}`,
    opacity: 0.8,
  },
}));

// ============================================================================
// SECTION HEADING
// ============================================================================

export const SectionHeadingContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(8),
  },
  
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(10),
  },
  
  '&.align-left': {
    textAlign: 'left',
    marginBottom: theme.spacing(4),
    
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(6),
    },
    
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(8),
    },
  },
}));

export const SectionSubtitle = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
  fontFamily: 'Inter, sans-serif',
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
  fontFamily: 'Bebas Neue, sans-serif',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: theme.palette.common.white,
  lineHeight: 1,
  margin: 0,
}));

// ============================================================================
// STATS SECTION
// ============================================================================

export const StatsSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  background: `radial-gradient(ellipse at center, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '800px',
    height: '800px',
    background: `radial-gradient(circle, ${theme.palette.primary.main}08 0%, transparent 70%)`,
    borderRadius: '50%',
    pointerEvents: 'none',
  },
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  maxWidth: '1280px',
  margin: '0 auto',
   marginTop: theme.spacing(3),
  
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
  
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: theme.spacing(4),
    marginTop: theme.spacing(5),
  },
}));

// ============================================================================
// SOCIAL DASHBOARD SECTION
// ============================================================================

export const SocialSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',
  background: `radial-gradient(ellipse at top, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const SocialHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  marginBottom: theme.spacing(6),
  maxWidth: '1280px',
  margin: '0 auto',
  
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
    marginBottom: theme.spacing(8),
  },
  
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: theme.spacing(6),
  },
}));

export const SocialStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2.5),
  marginBottom: 0,
  
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing(2.5),
  },
  
  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
  },
}));

export const StatBox = styled(motion.div)(({ theme }) => ({
  padding: theme.spacing(2.5),
  paddingLeft: theme.spacing(2.5),
  paddingRight: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  width: '100%',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
    gap: theme.spacing(2.5),
    borderRadius: theme.spacing(1.875),
    flex: '1 1 calc(50% - 10px)',
    minWidth: '200px',
  },
  
  [theme.breakpoints.up('md')]: {
    flex: '0 1 auto',
    width: 'auto',
  },
}));

export const StatIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  borderRadius: theme.spacing(0.75),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  flexShrink: 0,
  
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(1),
  },
}));

export const StatContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const StatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(24),
  fontFamily: 'Bebas Neue, sans-serif',
  lineHeight: 1,
  margin: 0,
  fontWeight: 700,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(30),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(32),
  },
}));

export const StatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
  textTransform: 'uppercase',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.3)',
  letterSpacing: '0.15em',
  marginTop: theme.spacing(0.5),
  margin: 0,
  lineHeight: 1.3,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(10),
    letterSpacing: '0.2em',
  },
}));

export const VideoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  maxWidth: '1280px',
  margin: '0 auto',
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(4),
  
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(4),
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5),
  },
  
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(5),
    marginTop: theme.spacing(8),
  },
}));

export const VideoCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1 / 0.5625',
  borderRadius: theme.spacing(2),
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  border: `1px solid rgba(255, 255, 255, 0.05)`,
  cursor: 'pointer',
}));
export const VideoImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.4,
  transition: 'all 700ms',
  
  [`${VideoCard}:hover &`]: {
    opacity: 1,
    transform: 'scale(1.05)',
  },
}));

export const VideoOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default} 0%, ${theme.palette.background.default}33 20%, transparent 100%)`,
}));

export const VideoPlayButton = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 500ms',
  
  [`${VideoCard}:hover &`]: {
    opacity: 1,
  },
}));

export const PlayIcon = styled(Box)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: theme.shadows[12],
}));

export const VideoContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  left: theme.spacing(1),
  right: theme.spacing(1),
  
  [theme.breakpoints.up('sm')]: {
    bottom: theme.spacing(2.5),
    left: theme.spacing(2.5),
    right: theme.spacing(2.5),
  },
}));

export const VideoTag = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(10),
  color: theme.palette.primary.main,
  fontWeight: 900,
  marginBottom: theme.spacing(1),
  marginTop: 0,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
}));

export const VideoTitle = styled('h4')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(16),
  lineHeight: 1.3,
  letterSpacing: '-0.01em',
  fontWeight: 700,
  margin: 0,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(22),
  },
}));

export const ViewAllButton = styled(motion.button)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.4em',
  fontSize: theme.typography.pxToRem(11),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(5),
  marginLeft: 'auto',
  marginRight: 'auto',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  
  '&:hover': {
    color: theme.palette.common.white,
    
    '& svg': {
      transform: 'translateX(8px)',
    },
  },
  
  '& svg': {
    transition: 'transform 0.3s ease',
  },
}));

// ============================================================================
// ACTING TEASER SECTION
// ============================================================================

export const ActingTeaserSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(16),
  },
  
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 0,
    backgroundImage: `url('${import.meta.env.BASE_URL}assets/images/Prabas.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    filter: 'brightness(0.4)',
  },
  
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    opacity: 0.3,
  },
}));

export const ActingTeaserContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  maxWidth: '1280px',
  margin: '0 auto',
  textAlign: 'center',
}));

export const TeaserDescription = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'Inter, sans-serif',
  marginBottom: theme.spacing(4),
  lineHeight: 1.6,
  maxWidth: '768px',
  margin: `0 auto ${theme.spacing(4)} auto`,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(16),
    marginBottom: theme.spacing(5),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(18),
    marginBottom: theme.spacing(6),
  },
  
  [theme.breakpoints.up('lg')]: {
    fontSize: theme.typography.pxToRem(20),
  },
}));

export const TeaserStatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(5),
  
  [theme.breakpoints.up('sm')]: {
     gap: theme.spacing(2.5),
    marginBottom: theme.spacing(6),
  },
  
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    marginBottom: theme.spacing(8),
  },
}));

export const TeaserStatBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1.5),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(2.5),
    borderRadius: theme.spacing(1.875),
  },
}));

export const TeaserStatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(30),
  fontFamily: 'Bebas Neue, sans-serif',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  margin: 0,
  fontWeight: 700,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(36),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(40),
  },
}));

export const TeaserStatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(9),
  textTransform: 'uppercase',
  fontWeight: 900,
  color: 'rgba(255, 255, 255, 0.3)',
  letterSpacing: '0.2em',
  margin: 0,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(10),
  },
}));

export const TeaserCTAButton = styled(motion.button)(({ theme }) => ({
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  backgroundColor: theme.palette.common.white,
  color: theme.palette.background.default,
  fontWeight: 900,
  fontSize: theme.typography.pxToRem(12),
  borderRadius: theme.spacing(1.5),
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  boxShadow: theme.shadows[12],
  fontFamily: 'Montserrat, sans-serif',
  
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
  
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'scale(1.05)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

// ============================================================================
// WILDLIFE RESCUE SECTION
// ============================================================================

export const WildlifeSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  overflow: 'hidden',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538)`,
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
}));

export const WildlifeContent = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(5),
  position: 'relative',
  
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(6),
  },
  
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },
  
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(10),
  },
}));

export const WildlifeGradientBlob = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  width: theme.spacing(40),
  height: theme.spacing(40),
  backgroundColor: 'rgba(59, 130, 246, 0.05)',
  borderRadius: '50%',
  filter: 'blur(120px)',
  transform: 'translateX(50%) translateY(-50%)',
  pointerEvents: 'none',
}));

export const WildlifeTextContent = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  zIndex: 10,
  
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

export const WildlifeDescription = styled('p')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.4)',
  fontFamily: 'Inter, sans-serif',
  fontSize: theme.typography.pxToRem(18),
  marginBottom: theme.spacing(6),
  lineHeight: 1.6,
}));

export const WildlifeButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const EmergencyButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: '#dc2626',
  color: theme.palette.common.white,
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: theme.typography.pxToRem(12),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  border: 'none',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
   boxShadow: theme.shadows[8],
  fontFamily: 'Montserrat, sans-serif',
  
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.background.default,
    transform: 'scale(1.05)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const StoriesButton = styled(motion.button)(({ theme }) => ({
  backgroundColor: 'transparent',
  border: 'none',
  color: theme.palette.common.white,
  paddingLeft: theme.spacing(5),
  paddingRight: theme.spacing(5),
  paddingTop: theme.spacing(2.5),
  paddingBottom: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: theme.typography.pxToRem(12),
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  fontFamily: 'Montserrat, sans-serif',
  
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const WildlifeImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  position: 'relative',
  zIndex: 10,
  
  [theme.breakpoints.up('lg')]: {
    width: '50%',
  },
}));

export const WildlifeImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1 / 1',
  borderRadius: theme.spacing(2.5),
  overflow: 'hidden',
  border: `1px solid rgba(255, 255, 255, 0.05)`,
}));

export const WildlifeImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 1000ms',
  
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

export const WildlifeImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default}e6 0%, ${theme.palette.background.default}33 20%, transparent 100%)`,
}));

export const WildlifeStatBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(5),
  left: theme.spacing(5),
}));

export const WildlifeStatValue = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(48),
  fontFamily: 'Bebas Neue, sans-serif',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(0.5),
  margin: 0,
  fontWeight: 700,
}));

export const WildlifeStatLabel = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.4em',
  color: 'rgba(255, 255, 255, 0.4)',
  margin: 0,
}));

// ============================================================================
// JOURNEY ROADMAP SECTION
// ============================================================================

export const JourneySection = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(4)} ${theme.spacing(2)}`,
  background: 'linear-gradient(135deg, rgba(20, 45, 60, 0.9) 0%, rgba(25, 55, 75, 0.95) 100%)',
  position: 'relative',
  overflow: 'hidden',
  
  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(5)} ${theme.spacing(3)}`,
  },
  
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(6)} ${theme.spacing(4)}`,
  },
}));

export const JourneyBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  opacity: 0.02,
  backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
  backgroundSize: '40px 40px',
  pointerEvents: 'none',
}));

export const JourneyContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 1,
}));

export const TimelineWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
  autoRows: 'minmax(160px, auto)',
  gap: theme.spacing(2),
  position: 'relative',
  
  [theme.breakpoints.up('sm')]: {
    gap: theme.spacing(2.5),
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    autoRows: 'minmax(180px, auto)',
    marginTop: theme.spacing(5),
  },
  
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
    gridTemplateColumns: 'repeat(6, 1fr)',
    autoRows: 'minmax(200px, auto)',
    marginTop: theme.spacing(6),
  },
}));

export const TimelineLine = styled(Box)(({ theme }) => ({
  display: 'none',
}));

export const TimelineItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  
  // Varying card heights for masonry effect
  '&:nth-child(1)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
  },
  '&:nth-child(2)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
  },
  '&:nth-child(3)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
  },
  '&:nth-child(4)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 2',
    },
  },
  '&:nth-child(5)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
       },
  },
  '&:nth-child(6)': {
    [theme.breakpoints.up('md')]: {
      gridColumn: 'span 1',
      gridRow: 'span 1',
    },
  },
}));

export const TimelineDot = styled(motion.div)(({ theme }) => ({
  display: 'none',
}));

export const TimelineContent = styled(motion.div)(({ theme }) => ({
  flex: 1,
  width: '100%',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
}));

export const MilestoneCard = styled(motion.div)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(100, 100, 100, 0.05) 100%)',
  backdropFilter: 'blur(12px)',
  border: '1.5px solid rgba(212, 175, 55, 0.25)',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  
  '&:hover': {
    transform: 'translateY(-6px)',
    borderColor: 'rgba(212, 175, 55, 0.55)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.25)',
  },
  
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2.5),
  },
  
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
  },
}));

export const YearBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  padding: `${theme.spacing(0.75)} ${theme.spacing(1.25)}`,
  borderRadius: '10px',
  fontSize: theme.typography.pxToRem(11),
  fontWeight: 800,
  marginBottom: theme.spacing(1.5),
  fontFamily: 'Bebas Neue, sans-serif',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
  width: 'fit-content',
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(12),
    marginBottom: theme.spacing(1.75),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(13),
    marginBottom: theme.spacing(2),
  },
}));

export const MilestoneTitle = styled('h4')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(14),
  fontWeight: 700,
  color: 'white',
  marginBottom: theme.spacing(1),
  lineHeight: 1.35,
  margin: 0,
  fontFamily: 'Inter, sans-serif',
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(15),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(15.5),
  },
}));

export const MilestoneDescription = styled('p')(({ theme }) => ({
  fontSize: theme.typography.pxToRem(11),
  color: 'rgba(255, 255, 255, 0.65)',
  lineHeight: 1.45,
  margin: 0,
  marginTop: theme.spacing(0.75),
  flexGrow: 1,
  
  [theme.breakpoints.up('sm')]: {
    fontSize: theme.typography.pxToRem(12),
  },
  
  [theme.breakpoints.up('md')]: {
    fontSize: theme.typography.pxToRem(12.5),
    lineHeight: 1.5,
  },
}));

export const JourneyCTAButton = styled(motion.button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #D4AF37, #F4D03F)',
  color: '#0a1d2c',
  border: 'none',
  padding: `${theme.spacing(1.75)} ${theme.spacing(3.5)}`,
  fontSize: theme.typography.pxToRem(13),
  fontWeight: 700,
  borderRadius: '50px',
  cursor: 'pointer',
  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.3)',
  transition: 'all 0.3s ease',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(5),
  fontFamily: 'Montserrat, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.4)',
  },
  
  '&:active': {
    transform: 'scale(0.95)',
  },
  
  [theme.breakpoints.up('sm')]: {
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    fontSize: theme.typography.pxToRem(14),
    marginTop: theme.spacing(5.5),
  },
  
  [theme.breakpoints.up('md')]: {
    padding: `${theme.spacing(2.25)} ${theme.spacing(4.5)}`,
    fontSize: theme.typography.pxToRem(15),
    marginTop: theme.spacing(6),
  },
}));
