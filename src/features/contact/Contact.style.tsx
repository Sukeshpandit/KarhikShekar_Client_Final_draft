import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Select } from '@mui/material';
import { motion } from 'motion/react';

export const ContactWrapper = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #0a1d2c 0%, #0f2234 50%, #0a1d2c 100%)',
  position: 'relative',
  overflow: 'hidden',
}));

export const BackgroundImage = styled(Box)({
  position: 'absolute',
  inset: 0,
  pointerEvents: 'none',
  opacity: 0.3,
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const ContentWrapper = styled(Box)({
  position: 'relative',
  zIndex: 10,
});
// ==================== TOP SECTION ====================
export const TopSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to bottom, rgba(15, 34, 52, 0.85) 0%, rgba(10, 29, 44, 0.95) 100%)',
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  position: 'relative',
  overflow: 'hidden',
  
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(14),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(10),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingTop: theme.spacing(18),
    paddingBottom: theme.spacing(12),
  },
}));

export const TopContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
}));

export const CenteredContent = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  marginBottom: '5rem',
});

export const TopBadge = styled(motion.div)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  background: 'linear-gradient(to right, rgba(212, 175, 55, 0.2), rgba(232, 197, 71, 0.2), rgba(184, 148, 31, 0.2))',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.primary.main}4d`,
  borderRadius: '9999px',
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  boxShadow: `0 4px 20px ${theme.palette.primary.main}33`,
}));

export const BadgeDot = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  '@keyframes pulse': {
    '0%, 100%': {
      opacity: 1,
    },
    '50%': {
      opacity: 0.5,
    },
  },
}));

export const BadgeText = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)',
  textTransform: 'uppercase',
  fontWeight: 900,
  background: `linear-gradient(to right, ${theme.palette.primary.main}, #22d3ee, #34d399)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  letterSpacing: '0.15em',
}));

export const MainHeading = styled(motion.h1)(({ theme }) => ({
  fontSize: 'clamp(3.5rem, 12vw, 7rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  lineHeight: 1.1,
  letterSpacing: 'normal',
  marginBottom: theme.spacing(4),
  '& .highlight': {
    color: theme.palette.primary.main,
  },
}));

export const Subtitle = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
  color: 'rgba(255, 255, 255, 0.9)',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 700,
  marginBottom: theme.spacing(5),
  maxWidth: '640px',
}));
export const Description = styled(motion.p)(({ theme }) => ({
  fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.6,
  maxWidth: '1024px',
}));

export const ContactInfoGrid = styled(motion.div)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(1, 1fr)',
  gap: theme.spacing(4),
  marginBottom: theme.spacing(10),
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const ContactInfoCard = styled(motion.div)({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
});

export const IconWrapper = styled(motion.div)(({ theme }) => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: `${theme.palette.primary.main}1a`,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  transition: 'all 0.3s ease',
  '.group:hover &': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

export const InfoLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  textTransform: 'uppercase',
  fontWeight: 900,
  color: theme.palette.primary.main,
  letterSpacing: '0.15em',
  marginBottom: theme.spacing(1),
}));
export const InfoValue = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
  fontFamily: '"Inter", sans-serif',
  color: theme.palette.common.white,
  fontWeight: 600,
}));

// ==================== MAIN CONTENT SECTION ====================
export const MainContentSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(to bottom, rgba(10, 29, 44, 0.9) 0%, rgba(13, 37, 56, 0.85) 50%, rgba(10, 29, 44, 0.9) 100%)',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingBottom: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  },
  
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(10),
  },
  
  [theme.breakpoints.up('lg')]: {
    paddingBottom: theme.spacing(12),
  },
}));

export const MainContentContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1280px',
  margin: '0 auto',
  position: 'relative',
  zIndex: 10,
}));

export const ContentGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(5),
  alignItems: 'stretch',
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(8),
  },
}));

// ==================== LEFT SIDE - IMAGE/SERVICES ====================
export const LeftColumn = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const FeaturedImageBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: '1.5rem',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  flex: 1,
  minHeight: '400px',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.3), transparent)',
  },
}));
export const FeaturedContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 10,
  padding: theme.spacing(6),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(12),
  },
}));

export const FeaturedIconBox = styled(motion.div)(({ theme }) => ({
  width: '96px',
  height: '96px',
  margin: '0 auto',
  backgroundColor: `${theme.palette.primary.main}33`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

export const FeaturedTitle = styled('h3')(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 2.5rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(2),
  '& .highlight': {
    color: theme.palette.primary.main,
  },
}));

export const FeaturedDescription = styled('p')(({ theme }) => ({
  fontSize: '1.125rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: '"Inter", sans-serif',
  lineHeight: 1.6,
  marginBottom: theme.spacing(3),
}));

export const FeaturesRow = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap',
});

export const FeatureItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  '& .icon': {
    color: theme.palette.primary.main,
  },
  '& .text': {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '0.875rem',
    fontFamily: '"Inter", sans-serif',
  },
}));

// ==================== RIGHT SIDE - FORM ====================
export const RightColumn = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: '1.5rem',
  padding: theme.spacing(4),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
  },
}));

export const SuccessMessage = styled(motion.div)({
  textAlign: 'center',
  padding: '3rem 0',
});
export const SuccessIconBox = styled(motion.div)(({ theme }) => ({
  width: '80px',
  height: '80px',
  margin: '0 auto',
  backgroundColor: `${theme.palette.primary.main}33`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

export const SuccessTitle = styled('h3')(({ theme }) => ({
  fontSize: '2.25rem',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 900,
  color: theme.palette.common.white,
  marginBottom: theme.spacing(1.5),
}));

export const SuccessText = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.8)',
  fontFamily: '"Inter", sans-serif',
  fontWeight: 500,
  marginBottom: theme.spacing(3),
}));

export const ResetButton = styled('button')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 900,
  textTransform: 'uppercase',
  fontSize: '0.75rem',
  letterSpacing: '0.05em',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.common.white,
  },
}));

export const FormContainer = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

export const FormRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2.5),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

export const FormGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const FormLabel = styled('label')(({ theme }) => ({
  display: 'block',
  fontSize: '0.75rem',
  fontWeight: 900,
  textTransform: 'uppercase',
  color: theme.palette.primary.main,
  letterSpacing: '0.15em',
  marginBottom: theme.spacing(1.5),
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    color: theme.palette.common.white,
    fontFamily: '"Inter", sans-serif',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}33`,
    },
  },
  '& .MuiOutlinedInput-input': {
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
      opacity: 1,
    },
  },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '0.75rem',
  color: theme.palette.common.white,
  fontFamily: '"Inter", sans-serif',
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}33`,
  },
  '& .MuiSelect-icon': {
    color: 'rgba(255, 255, 255, 0.6)',
  },
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
  width: '100%',
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '0.75rem',
    color: theme.palette.common.white,
    fontFamily: '"Inter", sans-serif',
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.1)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.2)',
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      boxShadow: `0 0 0 2px ${theme.palette.primary.main}33`,
    },
  },
  '& textarea': {
    resize: 'none',
    '&::placeholder': {
      color: 'rgba(255, 255, 255, 0.4)',
      opacity: 1,
    },
  },
}));

export const SubmitButton = styled(Button)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 900,
  textTransform: 'uppercase',
  padding: '1rem',
  borderRadius: '0.75rem',
  letterSpacing: '0.05em',
  fontSize: '0.875rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: `0 8px 30px ${theme.palette.primary.main}80`,
  },
  '&:disabled': {
    opacity: 0.5,
  },
}));

export const LoadingSpinner = styled(motion.div)({
  width: '16px',
  height: '16px',
  border: '2px solid rgba(255, 255, 255, 0.3)',
  borderTopColor: 'white',
  borderRadius: '50%',
});
