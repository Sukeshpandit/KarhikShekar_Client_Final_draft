import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StatCardWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: `linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(17, 34, 64, 0.6) 100%)`,
  backdropFilter: 'blur(20px)',
  border: '2px solid transparent',
  borderImage: `linear-gradient(135deg, ${theme.palette.primary.main}40, transparent) 1`,
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  cursor: 'default',
  
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '3px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
    opacity: 0,
    transition: 'opacity 0.4s ease',
  },
  
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    background: `linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(17, 34, 64, 0.8) 100%)`,
    border: `2px solid ${theme.palette.primary.main}60`,
    
    '&::before': {
      opacity: 1,
    },
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
  transition: 'all 0.4s ease',
  
  '& svg': {
    fontSize: '3rem',
    width: '3rem',
    height: '3rem',
    transition: 'all 0.4s ease',
  },
  
  '& .MuiSvgIcon-root': {
    fontSize: '3rem',
  },
  
  '.StatCardWrapper:hover &': {
    transform: 'scale(1.1) rotateY(360deg)',
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
  transition: 'all 0.4s ease',
  
  '.StatCardWrapper:hover &': {
    transform: 'scale(1.05)',
  },
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
  transition: 'all 0.4s ease',
  
  '.StatCardWrapper:hover &': {
    color: 'rgba(255, 255, 255, 0.9)',
    letterSpacing: '0.2em',
  },
  
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
  },
}));
