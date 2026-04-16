import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StatCardScene = styled(Box)(({ theme }) => ({
  perspective: '1200px',
  borderRadius: '20px',

  [theme.breakpoints.down('sm')]: {
    borderRadius: '16px',
  },
}));

export const StatCardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
  borderRadius: '20px',
  cursor: 'default',

  '&:hover': {
    transform: 'rotateY(180deg)',
  },

  [theme.breakpoints.down('sm')]: {
    borderRadius: '16px',
  },
}));

export const StatCardFront = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(17, 34, 64, 0.6) 100%)`,
  backdropFilter: 'blur(20px)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  overflow: 'hidden',

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: '16px',
  },
}));

export const StatCardBack = styled(Box)(({ theme }) => ({
  position: 'absolute',
  inset: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.45) 0%, rgba(17, 34, 64, 0.85) 60%, rgba(212, 175, 55, 0.3) 100%)`,
  backdropFilter: 'blur(20px)',
  backfaceVisibility: 'hidden',
  WebkitBackfaceVisibility: 'hidden',
  transform: 'rotateY(180deg)',
  overflow: 'hidden',

  // mirror sheen sweep
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-60%',
    left: '-60%',
    width: '220%',
    height: '220%',
    background:
      'linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.18) 50%, transparent 62%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2.5),
    borderRadius: '16px',
  },
}));

export const StatIcon = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  marginBottom: '1rem',
  lineHeight: 1,
  color: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  borderRadius: '50%',
  background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,

  '& svg': {
    fontSize: '3rem',
    width: '3rem',
    height: '3rem',
  },

  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
  },

  [theme.breakpoints.down('sm')]: {
    fontSize: '2.5rem',
    marginBottom: '0.75rem',
    padding: theme.spacing(1.5),

    '& svg': {
      fontSize: '2.5rem',
      width: '2.5rem',
      height: '2.5rem',
    },
  },
}));

export const StatValue = styled(Box)(({ theme }) => ({
  fontSize: 'clamp(2rem, 5vw, 3rem)',
  fontFamily: '"Bebas Neue", sans-serif',
  fontWeight: 700,
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #fff 100%)`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '0.05em',
  marginBottom: '0.5rem',
}));

export const StatLabel = styled(Box)(({ theme }) => ({
  fontSize: '0.75rem',
  fontFamily: '"Inter", sans-serif',
  color: 'rgba(255, 255, 255, 0.7)',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontWeight: 600,
  textAlign: 'center',
  lineHeight: 1.4,

  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
  },
}));
