import { styled } from '@mui/material/styles';
import { Box, Button, Container, Paper } from '@mui/material';

// Main Wrapper
export const ActingWrapper = styled(Box)(({ theme }) => ({
  paddingBottom: '5rem',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
}));

// ==================== HERO SECTION ====================
export const HeroStickyWrapper = styled(Box)({
  position: 'sticky',
  top: 0,
  height: '100vh',
  zIndex: 0,
});

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  paddingTop: '80px',
  [theme.breakpoints.up('md')]: {
    paddingTop: '100px',
  },
}));

export const HeroDarkTint = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 10,
  backgroundColor: theme.palette.background.default,
  opacity: 0.4,
  pointerEvents: 'none',
}));

export const HeroGradientLeft = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 20,
  pointerEvents: 'none',
  background: 'linear-gradient(to right, #021523 0%, rgba(2,21,35,0.82) 40%, transparent 100%)',
});

export const HeroGradientBottom = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  zIndex: 20,
  background: `linear-gradient(to top, ${theme.palette.background.default}, rgba(10, 29, 44, 0.4), transparent)`,
  pointerEvents: 'none',
}));

export const HeroVideo = styled('video')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  filter: 'grayscale(30%)',
  transition: 'all 1s ease',
  opacity: 0.7,
  '&:hover': {
    filter: 'grayscale(0%)',
  },
  [theme.breakpoints.up('sm')]: {
    width: '60%',
    opacity: 1,
  },
  [theme.breakpoints.up('md')]: {
    right: '55px',
    width: '50%',
    transform: 'rotate(-90deg) scale(0.9)',
  },
}));

export const HeroAmbientGlow = styled(Box)({
  position: 'absolute',
  width: '40%',
  height: '40%',
  borderRadius: '50%',
  pointerEvents: 'none',
  zIndex: 0,
});

export const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 30,
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '4rem 1.5rem 2rem',
  [theme.breakpoints.up('sm')]: {
    padding: '5rem 2rem 2rem',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
    padding: '0 5rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 8rem',
  },
}));

export const HeroInner = styled(Box)(({ theme }) => ({
  maxWidth: '1024px',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  [theme.breakpoints.up('md')]: {
    height: 'auto',
    gap: theme.spacing(4),
  },
}));

export const HeroBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  padding: '0.5rem 1.25rem',
  borderRadius: '9999px',
  backgroundColor: 'rgba(201, 168, 76, 0.1)',
  border: '1px solid rgba(201, 168, 76, 0.3)',
  backdropFilter: 'blur(10px)',
  marginBottom: theme.spacing(3),
  
  '&::before': {
    content: '""',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 10px ${theme.palette.primary.main}`,
    animation: 'pulse 2s ease-in-out infinite',
  },
  
  '@keyframes pulse': {
    '0%, 100%': { opacity: 1, transform: 'scale(1)' },
    '50%': { opacity: 0.5, transform: 'scale(1.2)' },
  },
}));

export const HeroBadgeText = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: theme.palette.primary.main,
  fontFamily: '"Inter", sans-serif',
}));

export const HeroTitle = styled('h1')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(2.5rem, 8vw, 7rem)',
  lineHeight: 0.9,
  letterSpacing: '-0.02em',
  color: theme.palette.common.white,
  textShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  transform: 'translateX(0)',
  marginBottom: theme.spacing(2),
  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
  [theme.breakpoints.up('md')]: {
    transform: 'translateX(-1.5rem)',
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: 'clamp(7rem, 10vw, 11rem)',
  },
}));

export const HeroSubtitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
  fontWeight: 600,
  lineHeight: 1.4,
  letterSpacing: '0.05em',
  color: theme.palette.primary.main,
  textTransform: 'uppercase',
  marginBottom: theme.spacing(2),
  maxWidth: '600px',
  
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const HeroDescription = styled('p')(({ theme }) => ({
  fontFamily: '"Inter", sans-serif',
  fontSize: 'clamp(0.95rem, 1.8vw, 1.125rem)',
  lineHeight: 1.8,
  color: 'rgba(255, 255, 255, 0.75)',
  maxWidth: '560px',
  marginBottom: theme.spacing(3),
  fontWeight: 400,
  
  '& strong': {
    color: theme.palette.common.white,
    fontWeight: 600,
  },
  
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const HeroSpacer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const HeroStatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(3),
  maxWidth: '640px',
  position: 'relative',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: `linear-gradient(to right, ${theme.palette.primary.main}, transparent)`,
    opacity: 0.3,
  },
  
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(3),
    paddingTop: theme.spacing(4),
  },
}));

export const HeroStatCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: '0.75rem',
  backgroundColor: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.05)',
  transition: 'all 0.3s ease',
  cursor: 'default',
  position: 'relative',
  overflow: 'hidden',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '2px',
    background: theme.palette.primary.main,
    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 0.3s ease',
  },
  
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
  
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderColor: 'rgba(201,168,76,0.2)',
    '& .stat-value': {
      color: theme.palette.primary.main,
    },
    '&::before': {
      transform: 'scaleX(1)',
    },
  },
}));

export const HeroStatLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: 'rgba(255,255,255,0.4)',
  fontWeight: 900,
  marginBottom: theme.spacing(0.5),
}));
export const HeroStatValue = styled(Box)(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 700,
  color: theme.palette.common.white,
  transition: 'color 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.875rem',
  },
}));

export const HeroStatDescription = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.6)',
  fontFamily: '"Inter", sans-serif',
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.875rem',
  },
}));

export const HeroButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: theme.spacing(2),
  paddingTop: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(3),
    paddingTop: theme.spacing(5),
  },
}));

export const HeroPrimaryButton = styled(Button)(({ theme }) => ({
  width: '100%',
  padding: '1rem 2rem',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.95rem',
  borderRadius: '0.75rem',
  color: theme.palette.common.black,
  background: 'linear-gradient(to bottom right, #C9A84C, rgba(201,168,76,0.65))',
  boxShadow: '0 10px 30px rgba(201,168,76,0.3)',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    padding: '1.25rem 2.5rem',
    fontSize: '1.125rem',
    letterSpacing: '0.15em',
    boxShadow: '0 20px 60px rgba(201,168,76,0.4)',
  },
}));

export const HeroSecondaryButton = styled(Button)(({ theme }) => ({
  display: 'inline-flex',
  width: '100%',
  padding: '1rem 2rem',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.95rem',
  borderRadius: '0.75rem',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  gap: theme.spacing(1.5),
  transition: 'background-color 0.3s ease',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    padding: '1.25rem 2.5rem',
    fontSize: '1.125rem',
    letterSpacing: '0.15em',
  },
}));
export const ShowreelStackContainer = styled(Box)({
  height: '70vh',
  position: 'relative',
  overflow: 'hidden',
  background: '#0a1d2c',
  perspective: '1400px',
});

export const ReelCardWrapper = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1.5rem',
  background: '#0a1d2c',
});

export const ReelCardInner = styled(Box)({
  position: 'relative',
  width: '100%',
  maxWidth: '62rem',
  aspectRatio: '16/9',
  borderRadius: '1rem',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.4s ease',
});

export const ReelThumbnail = styled('img')({
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: 0.5,
  transition: 'all 0.7s ease',
  '.group:hover &': {
    opacity: 0.65,
    transform: 'scale(1.05)',
  },
});

export const ReelVignetteTop = styled(Box)({
  position: 'absolute',
  insetX: 0,
  top: 0,
  height: '8rem',
  background: 'linear-gradient(to bottom, rgba(10,29,44,0.75), transparent)',
});
export const ReelVignetteBottom = styled(Box)({
  position: 'absolute',
  insetX: 0,
  bottom: 0,
  height: '11rem',
  background: 'linear-gradient(to top, rgba(10,29,44,1), rgba(10,29,44,0.55), transparent)',
});

export const ReelScanLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  insetX: 0,
  top: '50%',
  height: '1px',
  background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
  opacity: 0,
  transition: 'opacity 0.7s ease',
  '.group:hover &': {
    opacity: 0.5,
  },
}));

export const ReelCornerAccent = styled(Box)<{ corner: string }>(({ theme, corner }) => {
  const positions: Record<string, any> = {
    'top-left': { top: '1rem', left: '1rem', borderTop: `2px solid ${theme.palette.primary.main}66`, borderLeft: `2px solid ${theme.palette.primary.main}66` },
    'top-right': { top: '1rem', right: '1rem', borderTop: `2px solid ${theme.palette.primary.main}66`, borderRight: `2px solid ${theme.palette.primary.main}66` },
    'bottom-left': { bottom: '1rem', left: '1rem', borderBottom: `2px solid ${theme.palette.primary.main}66`, borderLeft: `2px solid ${theme.palette.primary.main}66` },
    'bottom-right': { bottom: '1rem', right: '1rem', borderBottom: `2px solid ${theme.palette.primary.main}66`, borderRight: `2px solid ${theme.palette.primary.main}66` },
  };
  
  return {
    position: 'absolute',
    width: '1.25rem',
    height: '1.25rem',
    transition: 'all 0.5s ease',
    ...positions[corner],
    '.group:hover &': {
      width: '1.75rem',
      height: '1.75rem',
      borderColor: `${theme.palette.primary.main}b3`,
    },
  };
});

export const ReelTopRow = styled(Box)({
  position: 'absolute',
  top: '1.25rem',
  left: '1.5rem',
  right: '1.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const ReelLabelBadge = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.375rem',
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  backgroundColor: `${theme.palette.primary.main}1f`,
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}33`,
}));

export const ReelDuration = styled(Box)({
  color: 'rgba(255,255,255,0.45)',
  fontSize: '0.625rem',
  fontFamily: 'monospace',
  tabularNums: 'tabular-nums',
  backgroundColor: 'rgba(10,29,44,0.5)',
  backdropFilter: 'blur(10px)',
  padding: '0.125rem 0.5rem',
  borderRadius: '0.25rem',
});

export const ReelWatermark = styled(Box)({
  position: 'absolute',
  top: '1rem',
  right: '4rem',
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: '6rem',
  fontWeight: 700,
  lineHeight: 1,
  color: 'rgba(255,255,255,0.04)',
  userSelect: 'none',
  pointerEvents: 'none',
});

export const ReelPlayButton = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '& .play-circle': {
    position: 'relative',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 0 50px rgba(201,168,76,0.5), 0 0 100px rgba(201,168,76,0.15)',
    '& .ping': {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      border: `2px solid ${theme.palette.primary.main}80`,
      animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      opacity: 0.2,
    },
  },
  '@keyframes ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
}));

export const ReelBottomInfo = styled(Box)({
  position: 'absolute',
  bottom: '1.5rem',
  left: '1.75rem',
  right: '1.75rem',
});

export const ReelTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontFamily: '"Bebas Neue", sans-serif',
  marginBottom: '0.25rem',
  letterSpacing: '-0.01em',
  transition: 'color 0.3s ease',
  '.group:hover &': {
    color: theme.palette.primary.main,
  },
}));

export const ReelSubtitle = styled(Box)({
  color: 'rgba(255,255,255,0.4)',
  fontSize: '0.75rem',
  fontFamily: '"Inter", sans-serif',
  marginBottom: '0.75rem',
});
export const ReelProgressBar = styled(Box)({
  height: '2px',
  backgroundColor: 'rgba(255,255,255,0.08)',
  borderRadius: '9999px',
  overflow: 'hidden',
  '& .fill': {
    height: '100%',
    width: 0,
    borderRadius: '9999px',
    background: 'linear-gradient(to right, rgba(201,168,76,0.8), rgba(201,168,76,0.3))',
    transition: 'width 0.7s ease-out',
    '.group:hover &': {
      width: '100%',
    },
  },
});

export const ReelCloseButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '0.75rem',
  right: '0.75rem',
  zIndex: 50,
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  backgroundColor: 'rgba(10,29,44,0.8)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'rgba(255,255,255,0.6)',
  fontSize: '0.875rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.common.white,
    backgroundColor: 'rgba(10,29,44,0.95)',
  },
}));

export const ReelPlaceholder = styled(Box)({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0,0,0,0.9)',
  gap: '1rem',
});
export const BiographySection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: `radial-gradient(ellipse at center, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 60%)`,
}));

export const BiographyBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center 15%',
    transform: 'scale(0.7)',
    transformOrigin: 'center 15%',
    opacity: 0.3,
  },
});

export const BiographyOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  background: `linear-gradient(to top, ${theme.palette.background.default}, rgba(10,29,44,0.4), rgba(10,29,44,0.6))`,
}));

export const BiographyOverlayRight = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to right, #0a1d2c, transparent, transparent)',
  display: 'none',
  '@media (min-width: 900px)': {
    display: 'block',
  },
});

export const BiographyGrid = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  width: '100%',
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '6rem 1.5rem 4rem',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '3rem',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    padding: '6rem 3rem 4rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));
export const BiographyContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

export const BiographyTitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
  letterSpacing: '-0.02em',
  lineHeight: 0.85,
  marginBottom: '2rem',
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
}));

export const BiographyTextContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  maxWidth: '36rem',
}));

export const BiographyLeadText = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
  color: theme.palette.common.white,
  fontWeight: 300,
  lineHeight: 1.6,
}));

export const BiographyParagraph = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.6)',
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  lineHeight: 1.6,
}));
export const BiographyButtonGroup = styled(Box)(({ theme }) => ({
  marginTop: '2.5rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
}));

export const BiographyPrimaryButton = styled(Button)(({ theme }) => ({
  padding: '1rem 2rem',
  borderRadius: '0.375rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: theme.palette.common.black,
  background: 'linear-gradient(135deg, #C9A84C 0%, rgba(201,168,76,0.75) 100%)',
  boxShadow: '0 8px 32px rgba(201,168,76,0.35)',
}));

export const BiographySecondaryButton = styled(Button)(({ theme }) => ({
  padding: '1rem 2rem',
  borderRadius: '0.375rem',
  border: '1px solid rgba(255,255,255,0.2)',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: theme.palette.common.white,
  backgroundColor: 'rgba(255,255,255,0.05)',
  backdropFilter: 'blur(10px)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
}));

export const BiographyPortrait = styled(Box)({
  display: 'none',
  justifyContent: 'flex-end',
  '@media (min-width: 900px)': {
    display: 'flex',
  },
});

export const BiographyPortraitInner = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '28rem',
  aspectRatio: '3/4',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  border: '1px solid rgba(255,255,255,0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    transition: 'filter 0.7s ease',
  },
  '&:hover img': {
    filter: 'grayscale(0%)',
  },
}));
export const BiographyPortraitOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  mixBlendMode: 'overlay',
  background: 'rgba(201,168,76,0.08)',
});
export const CarouselSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  paddingTop: '2rem',
  paddingBottom: '1rem',
  overflow: 'hidden',
}));

export const CarouselHeader = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 1.5rem',
  marginBottom: '0.75rem',
}));

export const CarouselTitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(3.75rem, 8vw, 6rem)',
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  letterSpacing: '0.025em',
  '& .highlight': {
    color: theme.palette.primary.main,
    fontStyle: 'italic',
  },
}));

export const CarouselContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  scrollBehavior: 'smooth',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const CarouselFade = styled(Box)<{ side: 'left' | 'right' }>(({ side }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '6rem',
  zIndex: 10,
  pointerEvents: 'none',
  ...(side === 'left' ? {
    left: 0,
    background: 'linear-gradient(to right, #021523 0%, transparent 100%)',
  } : {
    right: 0,
    background: 'linear-gradient(to left, #021523 0%, transparent 100%)',
  }),
}));
export const CarouselTrack = styled(Box)<{ paused?: boolean }>(({ theme, paused }) => ({
  display: 'flex',
  gap: '1.25rem',
  width: 'max-content',
  paddingLeft: '1.5rem',
  paddingBottom: '0.25rem',
  
  animation: 'marquee 60s linear infinite',
  animationPlayState: paused ? 'paused' : 'running',
  
  // Only pause on hover for non-touch devices
  '@media (hover: hover) and (pointer: fine)': {
    '&:hover': {
      animationPlayState: 'paused',
    },
  },
  
  '@keyframes marquee': {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
}));

// Acting Bits Clip Card
export const ClipCard = styled(Box)(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: '20rem',
  aspectRatio: '16/9',
  borderRadius: '1rem',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'box-shadow 0.35s ease',
  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
  '&.hovered': {
    boxShadow: '0 0 0 1px rgba(201,168,76,0.5), 0 20px 60px rgba(0,0,0,0.7)',
  },
  [theme.breakpoints.up('sm')]: {
    width: '26rem',
  },
  [theme.breakpoints.up('md')]: {
    width: '30rem',
  },
  [theme.breakpoints.up('lg')]: {
    width: '32rem',
  },
}));

// Press Review Card
export const ReviewCard = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '16rem',
  padding: '1rem',
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.08)',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  position: 'relative',
  overflow: 'hidden',
  background: 'rgba(255,255,255,0.035)',
  backdropFilter: 'blur(16px)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
  transition: 'all 0.5s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}4d`,
  },
  [theme.breakpoints.up('md')]: {
    width: '20rem',
    padding: '1.75rem',
    gap: '1rem',
  },
}));

export const ReviewAmbientGlow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-2.5rem',
  right: '-2.5rem',
  width: '9rem',
  height: '9rem',
  borderRadius: '50%',
  pointerEvents: 'none',
  opacity: 0,
  background: 'rgba(201,168,76,0.08)',
  filter: 'blur(30px)',
  transition: 'opacity 0.7s ease',
  '.ReviewCard:hover &': {
    opacity: 1,
  },
}));
export const GallerySection = styled(Box)(({ theme }) => ({
  padding: '3rem 1rem',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
}));

export const GalleryContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
});

export const GalleryHeader = styled(Box)(({ theme }) => ({
  marginBottom: '3rem',
}));

export const GalleryGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  autoRows: '180px',
  gap: '0.75rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
    autoRows: '200px',
  },
}));

export const GalleryItem = styled(Box)({
  position: 'relative',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  cursor: 'pointer',
  boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease',
  },
  '&:hover img': {
    transform: 'scale(1.05)',
  },
});
export const GalleryItemOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(10,29,44,0.4)',
  transition: 'background-color 0.5s ease',
  '.GalleryItem:hover &': {
    backgroundColor: 'rgba(10,29,44,0.1)',
  },
});

export const GalleryItemBorder = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  borderRadius: '0.75rem',
  border: '1px solid transparent',
  transition: 'border-color 0.4s ease',
  pointerEvents: 'none',
  '.GalleryItem:hover &': {
    borderColor: `${theme.palette.primary.main}66`,
  },
}));

export const GalleryItemCorner = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '0.75rem',
  left: '0.75rem',
  width: '1.25rem',
  height: '1.25rem',
  borderTop: `2px solid transparent`,
  borderLeft: `2px solid transparent`,
  transition: 'all 0.4s ease',
  '.GalleryItem:hover &': {
    borderColor: `${theme.palette.primary.main}b3`,
    width: '2rem',
    height: '2rem',
  },
}));

export const GalleryItemScanLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  insetX: 0,
  top: '50%',
  height: '1px',
  background: `linear-gradient(to right, transparent, ${theme.palette.primary.main}, transparent)`,
  opacity: 0,
  transition: 'opacity 0.5s ease',
  '.GalleryItem:hover &': {
    opacity: 0.4,
  },
}));
export const CTASection = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '3rem 1rem',
  [theme.breakpoints.up('sm')]: {
    padding: '3rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '4rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '4rem 3rem',
  },
}));

export const CTAInner = styled(Box)(({ theme }) => ({
  padding: '3rem',
  borderRadius: '1.5rem',
  border: '1px solid rgba(255,255,255,0.05)',
  position: 'relative',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  [theme.breakpoints.up('md')]: {
    padding: '5rem',
  },
}));

export const CTAGlow = styled(Box)({
  position: 'absolute',
  width: '20rem',
  height: '20rem',
  borderRadius: '50%',
  pointerEvents: 'none',
  background: 'rgba(201,168,76,0.10)',
  filter: 'blur(100px)',
});

export const CTAContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));

export const CTATextContent = styled(Box)({
  maxWidth: '640px',
});
export const CTATitle = styled('h2')(({ theme }) => ({
  fontFamily: '"Bebas Neue", sans-serif',
  fontSize: 'clamp(3rem, 6vw, 4.5rem)',
  color: theme.palette.common.white,
  textTransform: 'uppercase',
  marginBottom: '1.5rem',
  lineHeight: 1.1,
}));

export const CTADescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.6)',
  fontSize: '1.125rem',
  lineHeight: 1.6,
}));

export const CTAButton = styled(Button)(({ theme }) => ({
  flexShrink: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '1rem',
  padding: '1.5rem 2.5rem',
  borderRadius: '0.375rem',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: theme.palette.common.black,
  fontSize: '1.125rem',
  background: 'linear-gradient(135deg, #C9A84C 0%, rgba(201,168,76,0.80) 100%)',
  boxShadow: '0 20px 60px rgba(201,168,76,0.3)',
}));
export const HeroContentCanvas = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 30,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: `${theme.spacing(20)} ${theme.spacing(8)}`,
  '@media (min-width: 960px)': {
    justifyContent: 'center',
    paddingLeft: theme.spacing(32),
    paddingRight: theme.spacing(32),
    paddingBottom: 0,
  },
}));

export const MainHeading = styled(Box)(({ theme }) => ({
  transform: 'translateX(-24px)',
  '& h1': {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: 'clamp(2rem, 10vw, 11rem)',
    lineHeight: 0.85,
    letterSpacing: 'tight',
    color: theme.palette.text.primary,
    textShadow: '0 10px 40px rgba(0,0,0,0.5)',
    margin: 0,
  },
}));

export const StatsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(4),
  marginTop: 'auto',
  maxWidth: '600px',
  marginBottom: theme.spacing(4),
  '@media (min-width: 600px)': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: theme.spacing(6),
    paddingTop: theme.spacing(8),
  },
}));

export const StatBox = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  borderRadius: '0.75rem',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(4px)',
  border: `1px solid rgba(255, 255, 255, 0.05)`,
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  '& .stat-label': {
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    color: 'rgba(255, 255, 255, 0.4)',
    fontWeight: 900,
    marginBottom: theme.spacing(1),
  },
  '& .stat-value': {
    fontFamily: '"Bebas Neue", sans-serif',
    fontSize: '1.875rem',
    fontWeight: 700,
    color: theme.palette.text.primary,
    transition: 'color 0.3s ease',
  },
  '&:hover .stat-value': {
    color: theme.palette.primary.main,
  },
  '& .stat-text': {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    fontFamily: '"Inter", sans-serif',
  },
}));

export const CTAButtonsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(10),
  '@media (min-width: 600px)': {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
