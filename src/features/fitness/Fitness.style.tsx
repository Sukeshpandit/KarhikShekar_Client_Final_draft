import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';
import { motion } from 'motion/react';

// Main Wrapper
export const FitnessWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, #0f2234 50%, ${theme.palette.background.default} 100%)`,
  overflow: 'hidden',
}));

// ==================== HERO SECTION ====================
export const HeroSection = styled(Box)({
  position: 'relative',
  minHeight: '100vh',
  overflow: 'hidden',
});

export const HeroBackgroundImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  zIndex: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
});

export const HeroOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3), transparent)',
});

export const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '4rem 1rem',
  zIndex: 10,
  [theme.breakpoints.up('sm')]: {
    padding: '4rem 2rem',
  },
  [theme.breakpoints.up('md')]: {
    padding: '6rem 3rem',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '6rem 4rem',
  },
}));

export const HeroTextContainer = styled(Box)(({ theme }) => ({
  maxWidth: '640px',
  zIndex: 10,
}));

export const StatsBadge = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(4),
  },
}));

export const StatsAvatarGroup = styled(Box)({
  display: 'flex',
  marginLeft: '-0.5rem',
  '& > *': {
    marginLeft: '-0.5rem',
  },
});

export const StatsAvatar = styled(Box)(({ theme }) => ({
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.common.white}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  [theme.breakpoints.up('md')]: {
    width: '2.5rem',
    height: '2.5rem',
  },
}));

export const StatsBadgeText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.75rem',
  fontWeight: 700,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const HeroDescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  fontSize: '0.875rem',
  marginBottom: theme.spacing(3),
  lineHeight: 1.6,
  maxWidth: '32rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(4),
  },
}));

export const HeroTitle = styled(motion.h1)(({ theme }) => ({
  fontSize: 'clamp(3rem, 8vw, 5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
  lineHeight: 1.1,
  textShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
  },
  '& .highlight': {
    color: theme.palette.primary.main,
  },
}));

export const HeroButtonGroup = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

export const HeroPrimaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  padding: '1rem 2rem',
  borderRadius: '9999px',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}e6`,
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 3rem',
    fontSize: '1rem',
    gap: theme.spacing(1.5),
  },
}));

export const HeroSecondaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  backdropFilter: 'blur(10px)',
  color: theme.palette.common.white,
  padding: '1rem 2rem',
  borderRadius: '9999px',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.875rem',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  border: '1px solid rgba(255,255,255,0.3)',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 3rem',
    fontSize: '1rem',
    gap: theme.spacing(1.5),
  },
}));

// ==================== SECTION COMMON ====================
export const Section = styled(Box)(({ theme }) => ({
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

export const SectionContainer = styled(Box)({
  maxWidth: '1280px',
  margin: '0 auto',
});

export const SectionHeader = styled(motion.div)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
    textAlign: 'left',
  },
  textAlign: 'center',
}));

export const SectionLabel = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.3em',
  fontSize: '0.75rem',
  marginBottom: theme.spacing(1.5),
  display: 'inline-block',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
    marginBottom: theme.spacing(3),
  },
}));

export const SectionTitle = styled('h2')(({ theme }) => ({
  fontSize: 'clamp(2rem, 6vw, 4.5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  lineHeight: 1.2,
  '& .highlight': {
    color: theme.palette.primary.main,
    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.primary.main}99)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(3),
  },
}));

export const SectionDescription = styled(Box)(({ theme }) => ({
  fontSize: '1rem',
  color: 'rgba(255,255,255,0.7)',
  maxWidth: '640px',
  marginTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    fontSize: '1.125rem',
    marginTop: theme.spacing(3),
  },
}));

// ==================== EXPERIENCE CARDS ====================
export const ExperienceGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(6),
  },
}));

export const ExperienceCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  transition: 'all 0.5s ease',
  '&:hover': {
    boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  },
  [theme.breakpoints.up('md')]: {
    borderRadius: '2rem',
  },
}));

export const ExperienceImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '4/5',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    transition: 'all 0.7s ease',
  },
  '&:hover img': {
    filter: 'grayscale(0%)',
    transform: 'scale(1.05)',
  },
}));
export const ExperienceImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.4), transparent)',
});

export const ExperienceMetricBadge = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '1.5rem',
  right: '1.5rem',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.main}cc, ${theme.palette.primary.main}99)`,
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.primary.main}80`,
  borderRadius: '1rem',
  padding: '1rem 1.25rem',
  textAlign: 'center',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  [theme.breakpoints.up('md')]: {
    top: '2rem',
    right: '2rem',
    borderRadius: '1.5rem',
    padding: '1.25rem 1.5rem',
  },
}));

export const MetricValue = styled(Box)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 900,
  fontSize: '1.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '1.875rem',
  },
}));

export const MetricLabel = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.9)',
  fontSize: '0.75rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  marginTop: '0.25rem',
}));

export const ExperienceCardContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '2rem',
  [theme.breakpoints.up('md')]: {
    padding: '2.5rem',
  },
}));

export const ExperienceCardTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1.5),
  lineHeight: 1.2,
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.25rem',
  },
}));

export const ExperienceCardDescription = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.8)',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
    marginBottom: theme.spacing(4),
  },
}));

export const ExperienceButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.black,
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: '0.75rem',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}e6`,
    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1rem 2rem',
    fontSize: '0.875rem',
  },
}));

// ==================== TRAINING METHODS ====================
export const MethodsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const MethodCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '1.5rem',
  boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  border: `2px solid ${theme.palette.primary.main}4d`,
  background: `linear-gradient(135deg, ${theme.palette.background.paper}e6, ${theme.palette.background.default}cc)`,
  transition: 'all 0.5s ease',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}b3`,
  },
}));
export const MethodImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  aspectRatio: '1/1',
  overflow: 'hidden',
  background: theme.palette.background.paper,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'grayscale(100%)',
    transition: 'all 0.7s ease',
  },
  '&:hover img': {
    filter: 'grayscale(0%) brightness(1.1)',
    transform: 'scale(1.1)',
  },
}));

export const MethodImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)',
});

export const MethodBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  backgroundColor: `${theme.palette.primary.main}e6`,
  color: theme.palette.common.black,
  fontSize: '0.75rem',
  fontWeight: 700,
  padding: '0.25rem 0.75rem',
  borderRadius: '9999px',
  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  opacity: 0.9,
  transition: 'transform 0.3s ease',
  '.MuiBox-root:hover &': {
    transform: 'scale(1.1)',
  },
}));

export const MethodCardContent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  padding: '1.5rem',
  background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)',
}));

export const MethodCardTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: '0.5rem',
  textShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
}));

export const MethodCardDescription = styled(Box)(({ theme }) => ({
  color: theme.palette.grey[200],
  fontSize: '0.875rem',
  textShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
}));

// ==================== FEATURES ====================
export const FeaturesCardContainer = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.background.paper}cc, ${theme.palette.background.default}cc)`,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '1.5rem',
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    borderRadius: '2rem',
  },
}));
export const FeaturesInnerGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'center',
  padding: '1.5rem',
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(6),
    padding: '3rem',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FeatureItemsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(4),
  },
}));

export const FeatureItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const FeatureIconWrapper = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main}4d, ${theme.palette.primary.main}1a)`,
  border: `1px solid ${theme.palette.primary.main}80`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  [theme.breakpoints.up('md')]: {
    width: '3.5rem',
    height: '3.5rem',
  },
  '& svg': {
    width: '1.5rem',
    height: '1.5rem',
  },
}));

export const FeatureLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  lineHeight: 1.2,
  flex: 1,
  minWidth: 0,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const FeatureImageContainer = styled(motion.div)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}));

export const FeatureImage = styled(Box)({
  position: 'relative',
  borderRadius: '0.75rem',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
});
export const FeatureImageOverlay = styled(Box)({
  position: 'absolute',
  inset: 0,
  background: 'linear-gradient(to top, rgba(0,0,0,1), transparent, transparent)',
});

// ==================== PRICING ====================
export const PricingGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const PricingCard = styled(motion.div)<{ selected?: boolean }>(({ theme, selected }) => ({
  position: 'relative',
  borderRadius: '1rem',
  padding: '1rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  background: selected
    ? `linear-gradient(135deg, ${theme.palette.primary.main}33, ${theme.palette.background.paper}80)`
    : `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  border: selected
    ? `2px solid ${theme.palette.primary.main}`
    : `1px solid ${theme.palette.primary.main}33`,
  transform: selected ? 'scale(1)' : 'scale(1)',
  '&:hover': {
    borderColor: `${theme.palette.primary.main}80`,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '2rem',
    borderRadius: '1.5rem',
    transform: selected ? 'scale(1.05)' : 'scale(1)',
  },
}));

export const PopularBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '-0.75rem',
  left: '50%',
  transform: 'translateX(-50%)',
  padding: '0.25rem 1rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontSize: '0.75rem',
  fontWeight: 900,
  borderRadius: '9999px',
  [theme.breakpoints.up('md')]: {
    top: '-1rem',
  },
}));

export const PricingDuration = styled('h3')(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
}));

export const PricingPrice = styled(Box)(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: theme.palette.primary.main,
  marginBottom: '0.25rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '2.25rem',
  },
}));

export const PricingPerMonth = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.6)',
}));


export const PricingFeaturesList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(4),
  },
}));

export const PricingFeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  fontSize: '0.75rem',
  color: 'rgba(255,255,255,0.7)',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
    gap: theme.spacing(1.5),
  },
  '& svg': {
    width: '1rem',
    height: '1rem',
    flexShrink: 0,
    [theme.breakpoints.up('md')]: {
      width: '1.25rem',
      height: '1.25rem',
    },
  },
  '& span': {
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
}));

export const PricingButton = styled(Button)<{ selected?: boolean }>(({ theme, selected }) => ({
  width: '100%',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontSize: '0.75rem',
  transition: 'all 0.3s ease',
  backgroundColor: selected ? theme.palette.primary.main : 'rgba(255,255,255,0.05)',
  color: selected ? theme.palette.common.white : theme.palette.common.white,
  '&:hover': {
    backgroundColor: selected ? theme.palette.primary.main : 'rgba(255,255,255,0.1)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '0.75rem 1.5rem',
  },
}));

// ==================== TESTIMONIALS ====================
export const TestimonialsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(4),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const TestimonialCard = styled(motion.div)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: '1rem',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('md')]: {
    borderRadius: '1.5rem',
  },
}));

export const TestimonialImages = styled(Box)({
  position: 'relative',
  aspectRatio: '16/9',
  overflow: 'hidden',
  background: '#112240',
});

export const TestimonialImagesGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  height: '100%',
});
export const TestimonialImageWrapper = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '&.before': {
    '& img': {
      filter: 'grayscale(100%)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.4))',
    },
  },
  '&.after': {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to left, transparent, rgba(0,0,0,0.4))',
    },
  },
});

export const TestimonialBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  padding: '0.25rem 0.5rem',
  borderRadius: '0.25rem',
  fontSize: '0.75rem',
  fontWeight: 900,
  color: theme.palette.common.white,
  '&.before': {
    bottom: '0.5rem',
    left: '0.5rem',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  '&.after': {
    bottom: '0.5rem',
    right: '0.5rem',
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
}));

export const TestimonialContent = styled(Box)(({ theme }) => ({
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem',
  },
}));

export const TestimonialRating = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '0.25rem',
  marginBottom: theme.spacing(1.5),
}));

export const TestimonialResult = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));
export const TestimonialName = styled(Box)(({ theme }) => ({
  fontWeight: 900,
  fontSize: '1.125rem',
  color: theme.palette.common.white,
  marginBottom: '0.5rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1.25rem',
  },
}));

export const TestimonialText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  fontSize: '0.75rem',
  lineHeight: 1.6,
  fontStyle: 'italic',
  marginBottom: theme.spacing(1.5),
  flex: 1,
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const TestimonialComment = styled(Box)(({ theme }) => ({
  color: `${theme.palette.primary.main}cc`,
  fontSize: '0.75rem',
  lineHeight: 1.6,
  borderLeft: `2px solid ${theme.palette.primary.main}80`,
  paddingLeft: theme.spacing(1.5),
  paddingTop: theme.spacing(1.5),
  marginTop: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

// ==================== FACILITY SECTION ====================
export const FacilityGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FacilityImage = styled(motion.div)({
  position: 'relative',
  aspectRatio: '1/1',
  borderRadius: '1rem',
  overflow: 'hidden',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  '@media (min-width: 900px)': {
    borderRadius: '1.5rem',
  },
});

export const FacilityInfo = styled(motion.div)({});

export const FacilityInfoList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(3),
    marginBottom: theme.spacing(6),
  },
}));

export const FacilityInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(2),
  },
}));

export const FacilityIcon = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main,
  flexShrink: 0,
  width: '1.25rem',
  height: '1.25rem',
  [theme.breakpoints.up('md')]: {
    width: '1.5rem',
    height: '1.5rem',
  },
  '& svg': {
    width: '100%',
    height: '100%',
  },
}));

export const FacilityInfoContent = styled(Box)({
  flex: 1,
  minWidth: 0,
});

export const FacilityInfoLabel = styled(Box)(({ theme }) => ({
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: '0.25rem',
  fontSize: '0.875rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
}));

export const FacilityInfoText = styled(Box)(({ theme }) => ({
  color: 'rgba(255,255,255,0.7)',
  fontSize: '0.75rem',
  [theme.breakpoints.up('md')]: {
    fontSize: '0.875rem',
  },
}));

export const FacilityButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '0.75rem 2.5rem',
  borderRadius: '0.5rem',  
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.25rem 2.5rem',
    fontSize: '0.875rem',
    gap: theme.spacing(1.5),
  },
}));

// ==================== FINAL CTA ====================
export const CTASection = styled(Section)(({ theme }) => ({
  background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
  overflow: 'hidden',
}));

export const CTABlob = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  top: '-12rem',
  right: 0,
  width: '12rem',
  height: '12rem',
  background: `${theme.palette.primary.main}0d`,
  borderRadius: '50%',
  filter: 'blur(64px)',
  [theme.breakpoints.up('md')]: {
    top: '-24rem',
    width: '24rem',
    height: '24rem',
  },
}));
export const CTAContent = styled(motion.div)({
  maxWidth: '1024px',
  margin: '0 auto',
  textAlign: 'center',
  position: 'relative',
  zIndex: 10,
});

export const CTAButtonGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    gap: theme.spacing(3),
  },
}));

export const CTAPrimaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: '0.75rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.main}cc`,
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem 3.5rem',
    fontSize: '1.125rem',
    gap: theme.spacing(1.5),
  },
}));

export const CTASecondaryButton = styled(motion(Button))(({ theme }) => ({
  backgroundColor: 'rgba(255,255,255,0.1)',
  color: theme.palette.primary.main,
  padding: '0.75rem 2rem',
  borderRadius: '0.5rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  fontSize: '0.75rem',
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  border: `1px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
  [theme.breakpoints.up('md')]: {
    padding: '1.5rem 3.5rem',
    fontSize: '1.125rem',
    gap: theme.spacing(1.5),
  },
}));

