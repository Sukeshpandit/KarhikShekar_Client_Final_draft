import { styled } from '@mui/material/styles';
import { Box, Button, IconButton } from '@mui/material';
import { motion } from 'motion/react';

// ==================== MAIN WRAPPER ====================
export const WildlifeWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
}));

// ==================== HERO SECTION ====================
export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  paddingTop: '5rem',
  paddingBottom: '3rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
}));

export const HeroBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
});

export const HeroBackgroundImage = styled(motion.div)({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.6,
  willChange: 'transform',
});

export const HeroBackgroundOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, #0a1d2c, rgba(10, 29, 44, 0.5), #0a1d2c)',
});

export const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 10,
  maxWidth: '1280px',
  margin: '0 auto',
  textAlign: 'center',
});

export const HeroBadge = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  background: `${theme.palette.primary.main}1a`,
  border: `1px solid ${theme.palette.primary.main}4d`,
  borderRadius: '9999px',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${theme.palette.primary.main}33`,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '& span': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.25em',
  },
}));

export const HeroTitle = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  '& h1': {
    fontSize: 'clamp(3.75rem, 8vw, 6rem)',
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 900,
    marginBottom: theme.spacing(2),
    lineHeight: 0.95,
    '& .name': {
      display: 'block',
      color: theme.palette.common.white,
    },
    '& .surname': {
      display: 'block',
      background: `linear-gradient(to right, ${theme.palette.primary.main}, #10b981, ${theme.palette.primary.main})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
  },
  '& .tagline': {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 300,
    letterSpacing: '0.05em',
  },
}));

export const HeroDescription = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
  color: 'rgba(255, 255, 255, 0.6)',
  maxWidth: '640px',
  margin: '0 auto',
  marginBottom: theme.spacing(5),
}));

export const HeroButtonGroup = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  justifyContent: 'center',
  marginBottom: theme.spacing(8),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const EmergencyButton = styled('a')(({ theme }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(2.5)} ${theme.spacing(6)}`,
  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  textDecoration: 'none',
  boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.5)',
  transition: 'all 0.3s ease',
  overflow: 'hidden',
  '&:hover': {
    background: 'linear-gradient(to right, #ef4444, #dc2626)',
    transform: 'scale(1.05)',
  },
  '& .shine': {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)',
    transform: 'translateX(-200%)',
    transition: 'transform 1s ease',
  },
  '&:hover .shine': {
    transform: 'translateX(200%)',
  },
}));

export const SecondaryButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(2.5)} ${theme.spacing(6)}`,
  background: 'rgba(255, 255, 255, 0.1)',
  color: theme.palette.common.white,
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',
    transform: 'scale(1.05)',
  },
}));

export const StatsGrid = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  marginTop: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const StatCard = styled(motion.div)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(4, 3),
  display: 'flex',
  flexDirection: 'column',
   alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover': {
    borderColor: '#D4AF37',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
    '&::before': {
      opacity: 1,
    },
  },
}));

export const StatIconWrapper = styled(Box)(({ theme }) => ({
  width: '72px',
  height: '72px',
  borderRadius: '18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
  '& .MuiSvgIcon-root': {
    fontSize: '32px',
    position: 'relative',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
}));

export const StatLabel = styled(Box)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.7)',
  fontSize: '0.813rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  lineHeight: 1.4,
  maxWidth: '200px',
}));

export const StatValue = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  background: 'linear-gradient(135deg, #ffffff 0%, #D4AF37 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1,
  order: -1,
}));

export const ScrollIndicator = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(4),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  '& span': {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '0.875rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    fontWeight: 600,
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));

// ==================== SECTION COMMON ====================
export const Section = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '2rem 1rem',
  overflow: 'hidden',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '2.5rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '3rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '4rem 3rem',
  },
}));

export const SectionBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, rgba(10, 29, 44, 0), rgba(10, 29, 44, 0.3), rgba(10, 29, 44, 0.8))',
});

export const SectionContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
});

export const SectionHeader = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(5),
  },
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  marginBottom: theme.spacing(2),
  color: theme.palette.common.white,
  '& .highlight': {
    background: `linear-gradient(to right, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
}));

export const SectionDescription = styled('p')(({ theme }) => ({
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  color: 'rgba(255, 255, 255, 0.6)',
  maxWidth: '640px',
  margin: '0 auto',
}));

// ==================== FEATURED RESCUES (YOUTUBE) ====================
export const VideoPlayerContainer = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '16/9',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  background: 'rgba(10, 29, 44, 0.6)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  marginBottom: theme.spacing(6),
  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
}));

export const LoadingState = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(17, 34, 64, 0.6)',
  backdropFilter: 'blur(10px)',
  '& .text-center': {
    textAlign: 'center',
  },
}));

export const Spinner = styled(Box)({
  width: '4rem',
  height: '4rem',
  border: '4px solid rgba(239, 68, 68, 0.2)',
  borderTop: '4px solid #ef4444',
  borderRadius: '50%',
  animation: 'spin 1s linear infinite',
  margin: '0 auto 1rem',
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
});

export const VideoFrame = styled(motion.div)({
  position: 'absolute',
   inset: 0,
  '& iframe': {
    width: '100%',
    height: '100%',
  },
});

export const VideoStats = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  gap: theme.spacing(1.5),
}));

export const VideoStatBadge = styled(Box)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  background: 'rgba(220, 38, 38, 0.9)',
  borderRadius: '0.5rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  fontSize: '0.875rem',
}));

export const VideoGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

export const VideoThumbnail = styled(motion.button)<{ active?: boolean }>(({ theme, active }) => ({
  position: 'relative',
  aspectRatio: '16/9',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  border: active ? `2px solid ${theme.palette.error.main}` : '2px solid rgba(255, 255, 255, 0.1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  background: theme.palette.background.paper,
  padding: 0,
  boxShadow: active ? `0 20px 25px -5px ${theme.palette.error.main}33` : 'none',
  '&:hover': {
    borderColor: active ? theme.palette.error.main : 'rgba(255, 255, 255, 0.3)',
  },
}));

export const ThumbnailImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: '#112240',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});

export const ThumbnailOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'rgba(10, 29, 44, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: 'rgba(10, 29, 44, 0.6)',
  },
});

export const ThumbnailStats = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1),
  background: 'linear-gradient(to top, rgba(10, 29, 44, 0.9), transparent)',
  '& p': {
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: 700,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

export const ThumbnailTitle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(1.5),
  background: 'linear-gradient(to bottom, rgba(10, 29, 44, 0.95), transparent)',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  pointerEvents: 'none',
  'button:hover &': {
    opacity: 1,
  },
  '& span': {
    color: theme.palette.common.white,
    fontSize: '0.75rem',
    fontWeight: 700,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textAlign: 'left',
    lineHeight: 1.3,
  },
}));

export const VideoMetadataCard = styled(motion.div)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(3),
  background: 'rgba(17, 34, 64, 0.5)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '1rem',
  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const VideoMetadataHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
}));

export const VideoMetadataTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 800,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.3,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

export const VideoMetadataLocation = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: 'rgba(212, 175, 55, 0.9)',
  fontSize: '0.95rem',
  fontWeight: 600,
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
}));

export const VideoMetadataActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
}));

export const ShareButton = styled(motion.button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15), rgba(244, 208, 63, 0.15))',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  borderRadius: '0.75rem',
  color: theme.palette.primary.main,
  fontWeight: 700,
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.25), rgba(244, 208, 63, 0.25))',
    borderColor: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  '& span': {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
    },
  },
}));

export const NavigationButton = styled(motion.button)<{ direction: 'left' | 'right' }>(({ theme, direction }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  ...(direction === 'left' ? { left: theme.spacing(2) } : { right: theme.spacing(2) }),
  width: '48px',
  height: '48px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(220, 38, 38, 0.9)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '50%',
  color: theme.palette.common.white,
  cursor: 'pointer',
  zIndex: 10,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
  '&:hover': {
    background: 'rgba(239, 68, 68, 1)',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 8px 25px rgba(220, 38, 38, 0.5)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 28,
  },
}));

export const ChannelButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: `${theme.spacing(2.5)} ${theme.spacing(5)}`,
  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '1rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  textDecoration: 'none',
  boxShadow: '0 25px 50px -12px rgba(220, 38, 38, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #ef4444, #dc2626)',
    transform: 'scale(1.05)',
  },
}));

// ==================== SUBSCRIBE SECTION ====================
export const SubscribeContainer = styled(Box)({
  maxWidth: '640px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
  textAlign: 'center',
});

export const YouTubeSubscribeButton = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(6),
}));

export const SubscribeButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const SubscribeBenefits = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  paddingTop: theme.spacing(6),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));

export const BenefitsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const BenefitCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.5rem',
  '& .icon': {
    fontSize: '1.5rem',
    marginBottom: theme.spacing(1),
  },
  '& p': {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    fontWeight: 600,
  },
}));

// ==================== SPECIES EXPERTISE ====================
export const SpeciesGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(4),
  },
}));

export const SpeciesCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  willChange: 'transform',
  '&:hover': {
    borderColor: '#D4AF37',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
  },
}));

export const DangerBar = styled(Box)<{ danger?: 'High' | 'Low' }>(({ theme, danger }) => ({
  position: 'absolute',
  top: '12px',
  right: '12px',
  width: '48px',
  height: '48px',
  borderRadius: '12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.25rem',
  zIndex: 2,
  background: danger === 'High' 
    ? 'rgba(239, 68, 68, 0.95)' 
    : 'rgba(16, 185, 129, 0.95)',
  border: danger === 'High'
    ? '1px solid rgba(239, 68, 68, 0.6)'
    : '1px solid rgba(16, 185, 129, 0.6)',
  transition: 'all 0.3s ease',
}));

export const SpeciesImage = styled(Box)({  
  position: 'relative',
  height: '180px',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s ease',
    willChange: 'transform',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});

export const SpeciesImageOverlay = styled(Box)({  
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to bottom, transparent 40%, rgba(10, 29, 44, 0.95) 100%)',
});

export const SpeciesContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3, 2.5, 2.5),
}));

export const SpeciesHeader = styled(Box)({  
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginBottom: '16px',
});

export const SpeciesInfo = styled(Box)({
  flex: 1,
});

export const SpeciesName = styled('h3')(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  lineHeight: 1.3,
   marginBottom: '4px',
}));

export const SpeciesScientific = styled('p')({  
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.813rem',
  fontStyle: 'italic',
  margin: 0,
});

export const DangerIcon = styled(Box)<{ danger?: 'High' | 'Low' }>(({ theme, danger }) => ({
  display: 'none',
}));

export const SpeciesFooter = styled(Box)({  
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const CategoryBadge = styled('span')<{ category?: 'Venomous' | 'Non-Venomous' }>(({ theme, category }) => ({
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
  padding: '6px 12px',
  borderRadius: '8px',
  background: category === 'Venomous' 
    ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)' 
    : 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
  color: category === 'Venomous' ? '#ef4444' : '#10b981',
  border: category === 'Venomous'
    ? '1px solid rgba(239, 68, 68, 0.3)'
    : '1px solid rgba(16, 185, 129, 0.3)',
}));

export const RiskLabel = styled('span')<{ danger?: 'High' | 'Low' }>(({ danger }) => ({
  fontSize: '0.75rem',
  fontWeight: 600,
  color: danger === 'High' ? '#ef4444' : '#10b981',
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  '&::before': {
    content: '""',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    background: danger === 'High' ? '#ef4444' : '#10b981',
    display: 'inline-block',
  },
}));

// ==================== TESTIMONIALS ====================
export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(3),
  },
}));

export const TestimonialCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  padding: theme.spacing(2.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}66`,
  },
}));

export const TestimonialRating = styled(Box)({
  display: 'flex',
  gap: '0.25rem',
  marginBottom: '0.75rem',
});

export const TestimonialQuote = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.8)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
}));

export const TestimonialAuthor = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const AuthorAvatar = styled(Box)(({ theme}) => ({
  width: '2.25rem',
  height: '2.25rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  '& span': {
    color: theme.palette.common.white,
    fontWeight: 900,
    fontSize: '0.75rem',
  },
}));

export const AuthorInfo = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const AuthorName = styled('p')(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 700,
  fontSize: '0.875rem',
  lineHeight: 1.2,
}));

export const AuthorLocation = styled('p')({
  color: 'rgba(255, 255, 255, 0.5)',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.25rem',
});

export const TestimonialRescueBadge = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  paddingTop: theme.spacing(2),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  '& .badge': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.375rem',
    padding: '0.375rem 0.625rem',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    borderRadius: '9999px',
    '& span': {
      color: theme.palette.success.main,
      fontWeight: 700,
      fontSize: '0.75rem',
    },
  },
}));

// ==================== HOW IT WORKS ====================
export const StepsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: theme.spacing(4),
  },
}));

export const StepCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  height: '100%',
}));

export const StepCardInner = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(10, 29, 44, 0.95) 0%, rgba(17, 34, 64, 0.95) 100%)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(212, 175, 55, 0.2)',
  borderRadius: '20px',
  padding: theme.spacing(4, 3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2.5),
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
     right: 0,
    height: '3px',
    background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)',
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  '&:hover': {
    borderColor: '#D4AF37',
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(212, 175, 55, 0.3)',
    '&::before': {
      opacity: 1,
    },
  },
}));

export const StepIconWrapper = styled(Box)(({ theme }) => ({
  width: '80px',
  height: '80px',
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #D4AF37 0%, #F4D03F 100%)',
  position: 'relative',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 8px 24px rgba(212, 175, 55, 0.4)',
  '& .MuiSvgIcon-root': {
    fontSize: '36px',
    color: '#0a1d2c',
    position: 'relative',
    zIndex: 1,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    borderRadius: 'inherit',
    padding: '2px',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.1))',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  },
  '.MuiBox-root:hover &': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 12px 32px rgba(212, 175, 55, 0.6)',
  },
}));

export const StepNumber = styled(Box)({
  position: 'absolute',
  top: '16px',
  right: '16px',
  width: '44px',
  height: '44px',
  borderRadius: '12px',
  background: 'rgba(212, 175, 55, 0.15)',
  border: '1px solid rgba(212, 175, 55, 0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#D4AF37',
  fontFamily: '"Bebas Neue", sans-serif',
  letterSpacing: '1px',
  transition: 'all 0.3s ease',
  '.MuiBox-root:hover &': {
    background: 'rgba(212, 175, 55, 0.25)',
    borderColor: '#D4AF37',
    transform: 'scale(1.1)',
  },
});

export const StepTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 700,
  color: '#ffffff',
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.3,
}));

export const StepDescription = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  margin: 0,
}));

export const StepConnector = styled(Box)(({ theme }) => ({
  display: 'none',
  '@media (min-width: 1024px)': {
    display: 'block',
    position: 'absolute',
    top: '40px',
    right: '-32px',
    width: '32px',
    height: '2px',
    background: 'linear-gradient(to right, #D4AF37, rgba(212, 175, 55, 0.2))',
    zIndex: 1,
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-4px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderLeft: '6px solid #D4AF37',
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
    },
  },
}));

// ==================== CTA SECTION ====================
export const CTAContainer = styled(Box)({
  maxWidth: '640px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
});

export const CTAContent = styled(motion.div)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(5),
}));

export const CTAButton = styled(motion.a)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: `${theme.spacing(2.5)} ${theme.spacing(4)}`,
  background: 'linear-gradient(to right, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '0.75rem',
  fontWeight: 900,
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  textDecoration: 'none',
  boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.5)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(to right, #ef4444, #dc2626)',
  },
}));

export const SafetyNotice = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  paddingTop: theme.spacing(4),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center',
}));

export const SafetyHeader = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(1),
  '& h3': {
    color: theme.palette.common.white,
    fontWeight: 700,
    fontSize: '0.875rem',
    margin: 0,
  },
}));

export const SafetyText = styled('p')(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.75rem',
  maxWidth: '640px',
  margin: '0 auto',
  '& a': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    textDecoration: 'underline',
    '&:hover': {
      color: `${theme.palette.primary.main}cc`,
    },
  },
}));

// ==================== STICKY EMERGENCY BUTTON ====================
export const StickyEmergencyButton = styled(motion.a)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  left: theme.spacing(3),
  zIndex: 50,
  width: '4rem',
  height: '4rem',
  background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
  color: theme.palette.common.white,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 25px 50px -12px rgba(185, 28, 28, 0.5)',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  '&:hover': {
    background: 'linear-gradient(135deg, #ef4444, #dc2626)',
    animation: 'none',
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.8 },
  },
  [theme.breakpoints.up('md')]: {
    width: '5rem',
    height: '5rem',
  },
  '& .indicator': {
    position: 'absolute',
    top: '-0.25rem',
    right: '-0.25rem',
    width: '1rem',
    height: '1rem',
    background: theme.palette.success.main,
    borderRadius: '50%',
    border: `2px solid ${theme.palette.background.default}`,
  },
  '& .indicator-ping': {
    position: 'absolute',
    top: '-0.25rem',
    right: '-0.25rem',
    width: '1rem',
    height: '1rem',
    background: theme.palette.success.main,
    borderRadius: '50%',
    animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
  },
  '@keyframes ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
}));
