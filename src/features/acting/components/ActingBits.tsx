import { useState, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import {
  CarouselSection,
  CarouselContainer,
  CarouselFade,
  CarouselTrack,
  ClipCard,
} from '../Acting.style';

interface Clip {
  title: string;
  label: string;
  videoSrc: string;
  thumbnail: string;
}

interface ClipCardComponentProps {
  clip: Clip;
  onHoverChange: (h: boolean) => void;
}

const ClipCardComponent = ({ clip, onHoverChange }: ClipCardComponentProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const isYouTube = clip.videoSrc.includes('youtube.com') || clip.videoSrc.includes('youtu.be');
  
  // Detect if device supports hover (not a touch device)
  const isHoverDevice = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // Extract YouTube ID
  const getYouTubeId = (url: string): string | null => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const enter = () => {
    setHovered(true);
    // Only pause animation on hover devices (desktop)
    if (isHoverDevice) {
      onHoverChange(true);
    }
    // Auto-preview on hover only if not playing
    if (!isPlaying && videoRef.current && clip.videoSrc && !isYouTube) {
      videoRef.current.play().catch(() => {});
    }
  };

  const leave = () => {
    setHovered(false);
    // Only resume animation on hover devices (desktop) and if not playing
    if (isHoverDevice && !isPlaying) {
      onHoverChange(false);
    }
    // Stop preview on hover leave if not in playing mode
    if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = () => {
    if (isYouTube) {
      // For YouTube, toggle playing state
      const newPlayingState = !isPlaying;
      setIsPlaying(newPlayingState);
      // Pause carousel when playing, resume when stopped
      onHoverChange(newPlayingState);
    } else if (videoRef.current) {
      // For regular videos, toggle play/pause
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
        // Resume carousel
        onHoverChange(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
        // Pause carousel
        onHoverChange(true);
      }
    }
  };

  return (
    <ClipCard
      className={`clip-card ${hovered || isPlaying ? 'hovered' : ''}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
      onClick={handleClick}
      sx={{ cursor: clip.videoSrc ? 'pointer' : 'default' }}
    >
      {/* Thumbnail */}
      <Box
        component="img"
        src={clip.thumbnail}
        alt={clip.title}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'all 0.5s ease',
          opacity: (hovered || isPlaying) && clip.videoSrc ? 0 : 1,
          transform: hovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />

      {/* Regular Video */}
      {clip.videoSrc && !isYouTube && (
        <Box
          component="video"
          ref={videoRef}
          src={clip.videoSrc}
          muted={!isPlaying}
          loop
          playsInline
          controls={isPlaying}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s ease',
            opacity: (hovered || isPlaying) ? 1 : 0,
          }}
        />
      )}

      {/* YouTube Video */}
      {clip.videoSrc && isYouTube && isPlaying && (
        <Box
          component="iframe"
          src={`https://www.youtube.com/embed/${getYouTubeId(clip.videoSrc)}?autoplay=1&controls=1&modestbranding=1`}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allow="autoplay; fullscreen; encrypted-media"
          allowFullScreen
        />
      )}

      {/* Gradient overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(10,29,44,0.9), rgba(10,29,44,0.2), transparent)',
        }}
      />

      {/* Label badge */}
      <Box sx={{ position: 'absolute', top: '0.75rem', left: '0.75rem' }}>
        <Box
          component="span"
          sx={{
            fontSize: '0.5625rem',
            fontFamily: '"Inter", sans-serif',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            padding: '0.25rem 0.625rem',
            borderRadius: '9999px',
            bgcolor: 'rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.25)',
            color: '#C9A84C',
            backdropFilter: 'blur(10px)',
          }}
        >
          {clip.label}
        </Box>
      </Box>

      {/* Idle play icon */}
      {!isPlaying && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <Box
            sx={{
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FontAwesomeIcon icon={faPlay} style={{ fontSize: '0.875rem', color: 'white', marginLeft: '0.125rem' }} />
          </Box>
        </Box>
      )}

      {/* Bottom title */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          p: 2,
        }}
      >
        <Box
          sx={{
            fontFamily: '"Bebas Neue", sans-serif',
            fontSize: '1.125rem',
            letterSpacing: '-0.01em',
            transition: 'color 0.3s ease',
            color: hovered ? '#C9A84C' : 'white',
          }}
        >
          {clip.title}
        </Box>
      </Box>

      {/* Gold border on hover */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          borderRadius: '1rem',
          border: hovered ? '1px solid rgba(201,168,76,0.4)' : '1px solid rgba(255,255,255,0.08)',
          pointerEvents: 'none',
          transition: 'all 0.3s ease',
        }}
      />
    </ClipCard>
  );
};

interface ActingBitsProps {}

export const ActingBits = ({}: ActingBitsProps = {}) => {
  const testVideo = `${import.meta.env.BASE_URL}assets/video/hero.mp4`;
  const scrollContainerRef = useRef<HTMLDivElement>(null);
    const clips: Clip[] = [
    { title: 'The Silent Warrior', label: 'Action', videoSrc: 'https://youtu.be/RZxYXO4PHG8', thumbnail: 'https://picsum.photos/seed/bit-1/800/450' },
    { title: 'Shadow Protocol', label: 'Thriller', videoSrc: testVideo, thumbnail: 'https://picsum.photos/seed/bit-2/800/450' },
    { title: 'City of Gold', label: 'Crime', videoSrc: testVideo, thumbnail: 'https://picsum.photos/seed/bit-3/800/450' },
    { title: 'The Last Stand', label: 'Action', videoSrc: testVideo, thumbnail: 'https://picsum.photos/seed/bit-4/800/450' },
    { title: 'Midnight Chase', label: 'Thriller', videoSrc: testVideo, thumbnail: 'https://picsum.photos/seed/bit-5/800/450' },
    { title: 'Broken Ties', label: 'Drama', videoSrc: testVideo, thumbnail: 'https://picsum.photos/seed/bit-6/800/450' },
  ];

  const [pauseAnimation, setPauseAnimation] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Get the first card element to measure its width
      const firstCard = scrollContainerRef.current.querySelector('.clip-card');
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gap = 20; // 1.25rem gap in pixels (20px)
        const scrollAmount = cardWidth + gap;
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Get the first card element to measure its width
      const firstCard = scrollContainerRef.current.querySelector('.clip-card');
      if (firstCard) {
        const cardWidth = firstCard.clientWidth;
        const gap = 20; // 1.25rem gap in pixels (20px)
        const scrollAmount = cardWidth + gap;
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
    return (
    <CarouselSection>
      {/* Left Navigation Button */}
      <IconButton
        onClick={scrollLeft}
        sx={{
          position: 'absolute',
          left: { xs: '0.5rem', md: '1rem' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: { xs: '2.5rem', md: '3rem' },
          height: { xs: '2.5rem', md: '3rem' },
          bgcolor: 'rgba(201,168,76,0.15)',
          border: '1px solid rgba(201,168,76,0.3)',
          backdropFilter: 'blur(10px)',
          color: '#C9A84C',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(201,168,76,0.25)',
            borderColor: 'rgba(201,168,76,0.5)',
            transform: 'translateY(-50%) scale(1.1)',
          },
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '1rem' }} />
      </IconButton>

      {/* Right Navigation Button */}
      <IconButton
        onClick={scrollRight}
        sx={{
          position: 'absolute',
          right: { xs: '0.5rem', md: '1rem' },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          width: { xs: '2.5rem', md: '3rem' },
          height: { xs: '2.5rem', md: '3rem' },
          bgcolor: 'rgba(201,168,76,0.15)',
          border: '1px solid rgba(201,168,76,0.3)',
          backdropFilter: 'blur(10px)',
          color: '#C9A84C',
          transition: 'all 0.3s ease',
          '&:hover': {
            bgcolor: 'rgba(201,168,76,0.25)',
            borderColor: 'rgba(201,168,76,0.5)',
            transform: 'translateY(-50%) scale(1.1)',
          },
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: '1rem' }} />
      </IconButton>

      <CarouselContainer ref={scrollContainerRef}>
        <CarouselFade side="left" />
        <CarouselFade side="right" />

        <CarouselTrack paused={pauseAnimation}>
          {clips.map((clip, i) => (
            <ClipCardComponent
              key={i}
              clip={clip}
              onHoverChange={(h) => setPauseAnimation(h)}
            />
          ))}
          {/* Duplicate for continuous scroll */}
          {clips.map((clip, i) => (
            <ClipCardComponent
              key={`dup-${i}`}
              clip={clip}
              onHoverChange={(h) => setPauseAnimation(h)}
            />
          ))}
        </CarouselTrack>
      </CarouselContainer>
    </CarouselSection>
  );
};