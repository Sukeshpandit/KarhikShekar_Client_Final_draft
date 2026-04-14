import { styled } from '@mui/material/styles';
import { Box, Button, Card } from '@mui/material';
import { motion } from 'motion/react';

// ==================== MAIN WRAPPER ====================
export const JourneyWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
}));

// ==================== HERO SECTION ====================
export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '8rem 1.5rem 4rem',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    padding: '10rem 3rem 6rem',
  },
}));

export const HeroBackground = styled(Box)({
  position: 'absolute',
  inset: 0,
  opacity: 0.05,
  backgroundImage: 'radial-gradient(circle at 25% 25%, #D4AF37 2px, transparent 2px), radial-gradient(circle at 75% 75%, #10b981 2px, transparent 2px)',
  backgroundSize: '48px 48px',
  animation: 'moveBackground 20s linear infinite',
  '@keyframes moveBackground': {
    '0%': { transform: 'translate(0, 0)' },
    '100%': { transform: 'translate(48px, 48px)' },
  },
});

export const HeroContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 10,
});

export const HeroBadge = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: `${theme.spacing(1)} ${theme.spacing(2.5)}`,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}1a, ${theme.palette.success.main}1a)`,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '9999px',
  marginBottom: theme.spacing(3),
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
  '& span': {
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
  },
}));

export const HeroTitle = styled(motion.h1)(({ theme }) => ({
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(3),
  lineHeight: 1.1,
  '& .highlight': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
}));

export const HeroDescription = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
  color: 'rgba(255, 255, 255, 0.7)',
  maxWidth: '640px',
  margin: '0 auto',
  lineHeight: 1.6,
}));

// ==================== TIMELINE SECTION ====================
export const TimelineSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: '3rem 1rem',
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, #0d2538, ${theme.palette.background.default})`,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 3rem',
  },
}));

export const TimelineProgressBar = styled(motion.div)(({ theme }) => ({
  position: 'sticky',
  top: '5rem',
  zIndex: 50,
  maxWidth: '800px',
  margin: '0 auto 4rem',
  padding: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.background.paper}f2, ${theme.palette.background.default}f2)`,
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '1rem',
  boxShadow: `0 10px 40px ${theme.palette.primary.main}1a`,
  [theme.breakpoints.up('md')]: {
    padding: '2rem',
  },
}));

export const ProgressInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .start, & .end': {
    textAlign: 'center',
  },
  '& .year': {
    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 900,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'block',
  },
  '& .age': {
    fontSize: '0.875rem',
    color: 'rgba(255, 255, 255, 0.6)',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },
}));

export const ProgressBarTrack = styled(Box)(({ theme }) => ({
  height: '8px',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '9999px',
  overflow: 'hidden',
  position: 'relative',
}));

export const ProgressBarFill = styled(motion.div)(({ theme }) => ({
  height: '100%',
  background: `linear-gradient(to right, ${theme.palette.primary.main}, #10b981)`,
  borderRadius: '9999px',
  boxShadow: `0 0 20px ${theme.palette.primary.main}99`,
}));

export const TimelineContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',
});

export const TimelineLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '2rem',
  top: 0,
  bottom: 0,
  width: '3px',
  background: `linear-gradient(to top, ${theme.palette.primary.main}, ${theme.palette.primary.main}66, #10b981, rgba(16, 185, 129, 0.3))`,
  boxShadow: `0 0 20px ${theme.palette.primary.main}33`,
  [theme.breakpoints.up('md')]: {
    left: '50%',
    transform: 'translateX(-50%)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    background: `linear-gradient(to top, transparent, ${theme.palette.primary.main}66, transparent)`,
    animation: 'pulseGlow 3s ease-in-out infinite',
  },
  '@keyframes pulseGlow': {
    '0%, 100%': {
      opacity: 0.5,
    },
    '50%': {
      opacity: 1,
    },
  },
}));
export const TimelineItems = styled(Box)({
  position: 'relative',
  zIndex: 10,
});

// ==================== TIMELINE ITEM ====================
export const TimelineItem = styled(motion.div)<{ align?: 'left' | 'right' }>(({ theme, align = 'right' }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  paddingLeft: '4.5rem',
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: align === 'left' ? '1fr auto 1fr' : '1fr auto 1fr',
    gap: theme.spacing(4),
    paddingLeft: 0,
    marginBottom: theme.spacing(8),
  },
}));

export const TimelineYear = styled(Box)<{ align?: 'left' | 'right' }>(({ theme, align = 'right' }) => ({
  position: 'absolute',
  left: 0,
  top: '1rem',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    textAlign: align === 'left' ? 'right' : 'left',
    gridColumn: align === 'left' ? 1 : 3,
    marginTop: '1.5rem',
  },
  '& .year': {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
    fontFamily: '"Bebas Neue", sans-serif',
    fontWeight: 900,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1,
    display: 'block',
    letterSpacing: '0.02em',
  },
  '& .category': {
    fontSize: '0.875rem',
    fontWeight: 700,
    color: 'rgba(255, 255, 255, 0.7)',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginTop: '0.75rem',
    display: 'block',
    [theme.breakpoints.up('md')]: {
      fontSize: '1rem',
    },
  },
}));

export const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '1.5rem',
  top: '2rem',
  width: '1.25rem',
  height: '1.25rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
  borderRadius: '50%',
  boxShadow: `0 0 0 4px ${theme.palette.background.default}, 0 0 0 8px ${theme.palette.primary.main}4d, 0 0 20px ${theme.palette.primary.main}66`,
  zIndex: 20,
  transition: 'all 0.3s ease',
  animation: 'pulse 2s ease-in-out infinite',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    left: 'auto',
    top: 'auto',
    gridColumn: 2,
    marginTop: '2rem',
    width: '1.5rem',
    height: '1.5rem',
  },
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'scale(1)',
      boxShadow: `0 0 0 4px ${theme.palette.background.default}, 0 0 0 8px ${theme.palette.primary.main}4d, 0 0 20px ${theme.palette.primary.main}66`,
    },
    '50%': {
      transform: 'scale(1.1)',
      boxShadow: `0 0 0 4px ${theme.palette.background.default}, 0 0 0 12px ${theme.palette.primary.main}33, 0 0 30px ${theme.palette.primary.main}99`,
    },
  },
}));

export const TimelineContent = styled(Box)<{ align?: 'left' | 'right' }>(({ theme, align = 'right' }) => ({
  [theme.breakpoints.up('md')]: {
    gridColumn: align === 'left' ? 3 : 1,
  },
}));

// ==================== MILESTONE CARD ====================
export const MilestoneCard = styled(motion(Card))(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper}e6, ${theme.palette.background.default}cc)`,
  backdropFilter: 'blur(20px)',
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  borderRadius: '1rem',
  padding: theme.spacing(3),
  transition: 'all 0.3s ease',
  overflow: 'visible',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}66`,
    transform: 'translateY(-4px)',
    boxShadow: `0 20px 40px ${theme.palette.primary.main}1a`,
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
  },
}));

export const MilestoneHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(2),
  gap: theme.spacing(2),
}));

export const MilestoneIcon = styled(Box)<{ color?: string }>(({ theme, color = theme.palette.primary.main }) => ({
  width: '3rem',
  height: '3rem',
  background: `${color}1a`,
  border: `2px solid ${color}33`,
  borderRadius: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
  '.MuiCard-root:hover &': {
    transform: 'scale(1.1) rotate(5deg)',
    background: `${color}33`,
  },
  '& .MuiSvgIcon-root': {
    color: color,
    fontSize: '1.5rem',
  },
}));

export const MilestoneTitle = styled('h3')(({ theme }) => ({
  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
}));

export const MilestoneCategory = styled('span')<{ color?: string }>(({ theme, color = theme.palette.primary.main }) => ({
  display: 'inline-block',
  padding: '0.25rem 0.75rem',
  background: `${color}1a`,
  border: `1px solid ${color}33`,
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: 700,
  color: color,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
}));

export const MilestoneDescription = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
}));

export const MilestoneMedia = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  borderRadius: '0.75rem',
  overflow: 'hidden',
}));

export const VideoEmbed = styled(Box)({
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
  borderRadius: '0.75rem',
  '& iframe': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
});

export const ImageGallery = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(1.5),
  '& img': {
     width: '100%',
    height: '12rem',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
}));

export const MilestoneFooter = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: theme.spacing(3),
  paddingTop: theme.spacing(2),
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const MilestoneStats = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
}));

export const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  fontSize: '0.875rem',
  color: 'rgba(255, 255, 255, 0.6)',
  fontWeight: 600,
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
    color: theme.palette.primary.main,
  },
}));

export const MilestoneLink = styled(Button)(({ theme }) => ({
  padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
  background: `${theme.palette.primary.main}1a`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 700,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${theme.palette.primary.main}33`,
    transform: 'translateX(4px)',
  },
}));

// ==================== CURRENT PROJECTS ====================
export const CurrentProjectsSection = styled(Box)(({ theme }) => ({
  padding: '3rem 1rem',
  background: `linear-gradient(135deg, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 3rem',
  },
}));

export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(8),
  },
}));

export const SectionTitle = styled(motion.h2)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  lineHeight: 1.1,
  '& .highlight': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
}));

export const SectionDescription = styled('p')(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  color: 'rgba(255, 255, 255, 0.6)',
  maxWidth: '640px',
  margin: '0 auto',
  lineHeight: 1.6,
}));

export const ProjectsGrid = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
}));

export const ProjectCard = styled(motion(Card))(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  border: `1px solid rgba(255, 255, 255, 0.1)`,
  borderRadius: '1rem',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}66`,
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${theme.palette.primary.main}1a`,
  },
}));

export const ProjectImage = styled(Box)({
  position: 'relative',
  aspectRatio: '16/9',
  overflow: 'hidden',
  background: '#112240',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});

export const ProjectBadge = styled(Box)<{ status?: 'active' | 'upcoming' | 'completed' }>(({ theme, status = 'active' }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  padding: `${theme.spacing(0.75)} ${theme.spacing(1.5)}`,
  background: status === 'active' ? '#10b981' : status === 'upcoming' ? '#f59e0b' : theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
}));

export const ProjectContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

export const ProjectTitle = styled('h3')(({ theme }) => ({
  fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1),
  lineHeight: 1.2,
}));

export const ProjectDescription = styled('p')(({ theme }) => ({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  marginBottom: theme.spacing(2),
}));

export const ProjectTags = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const ProjectTag = styled('span')<{ color?: string }>(({ theme, color = theme.palette.primary.main }) => ({
  padding: '0.25rem 0.75rem',
  background: `${color}1a`,
  border: `1px solid ${color}33`,
  borderRadius: '9999px',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: color,
}));

export const ProjectActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
   paddingTop: theme.spacing(2),
  borderTop: `1px solid rgba(255, 255, 255, 0.1)`,
}));

export const ProjectButton = styled(Button)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1.25),
  background: `${theme.palette.primary.main}1a`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '0.5rem',
  fontSize: '0.875rem',
  fontWeight: 700,
  textTransform: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${theme.palette.primary.main}33`,
  },
}));

// ==================== CTA SECTION ====================
export const CTASection = styled(Box)(({ theme }) => ({
  padding: '3rem 1rem',
  background: `radial-gradient(ellipse at bottom, ${theme.palette.background.paper} 0%, ${theme.palette.background.default} 70%)`,
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '5rem 2rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 3rem',
  },
}));

export const CTAContainer = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto',
});

export const CTATitle = styled(motion.h2)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(3),
  lineHeight: 1.1,
  '& .highlight': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
}));

export const CTADescription = styled('p')(({ theme }) => ({
  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
  color: 'rgba(255, 255, 255, 0.6)',
  marginBottom: theme.spacing(4),
  lineHeight: 1.6,
}));

export const CTAButtons = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  justifyContent: 'center',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const CTAButton = styled(motion(Button))(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, #10b981)`,
  color: theme.palette.common.white,
  borderRadius: '0.75rem',
  fontSize: '1rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  boxShadow: `0 10px 30px ${theme.palette.primary.main}33`,
  '&:hover': {
    background: `linear-gradient(135deg, ${theme.palette.primary.main}e6, #10b981e6)`,
    transform: 'translateY(-2px)',
    boxShadow: `0 15px 40px ${theme.palette.primary.main}4d`,
  },
}));

export const CTASecondaryButton = styled(motion(Button))(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  background: 'rgba(255, 255, 255, 0.05)',
  color: theme.palette.common.white,
  border: `2px solid rgba(255, 255, 255, 0.2)`,
  borderRadius: '0.75rem',
  fontSize: '1rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-2px)',
  },
}));
