import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  CarouselContainer,
  CarouselFade,
  CarouselScrollTrack,
  CarouselStrip,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailOverlay,
} from '../../home/Home.style';

interface Testimonial {
  name: string;
  results: string;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const rafId = useRef<number>(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!isPaused.current && !isDragging.current) {
        el.scrollLeft += 0.6;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      hasDragged.current = false;
      dragStartX.current = e.pageX - el.offsetLeft;
      dragScrollLeft.current = el.scrollLeft;
      el.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      const walk = (e.pageX - el.offsetLeft) - dragStartX.current;
      if (Math.abs(walk) > 5) hasDragged.current = true;
      el.scrollLeft = dragScrollLeft.current - walk;
    };

    const onMouseUp = () => {
      isDragging.current = false;
      el.style.cursor = 'grab';
    };

    const onClickCapture = (e: MouseEvent) => {
      if (hasDragged.current) e.stopPropagation();
    };

    const onTouchStart = () => { isPaused.current = true; };
    const onTouchEnd = () => { isPaused.current = false; };

    el.addEventListener('scroll', onScroll);
    el.addEventListener('mousedown', onMouseDown);
    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseup', onMouseUp);
    el.addEventListener('mouseleave', onMouseUp);
    el.addEventListener('click', onClickCapture, true);
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });

    rafId.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId.current);
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('mousedown', onMouseDown);
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseup', onMouseUp);
      el.removeEventListener('mouseleave', onMouseUp);
      el.removeEventListener('click', onClickCapture, true);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setExpandedImage(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const handleCardClick = (image: string) => {
    if (!hasDragged.current) setExpandedImage(image);
  };

  const renderCards = (disabled: boolean) =>
    testimonials.map((testimonial, index) => (
      <ThumbnailCard
        key={disabled ? `dup-${index}` : index}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        onClick={() => !disabled && handleCardClick(testimonial.image)}
        sx={{
          width: { xs: '240px', sm: '320px', md: '380px' },
          minWidth: { xs: '220px', sm: '320px', md: '350px' },
          maxWidth: { xs: '260px', sm: '360px', md: '420px' },
          height: 'auto',
          cursor: disabled ? 'default' : 'pointer',
        }}
      >
        <ThumbnailImage
          src={testimonial.image}
          alt={testimonial.name}
          style={{ objectFit: 'contain', objectPosition: 'center top', aspectRatio: '2/3', width: '100%', height: 'auto', background: '#0a1d2c' }}
        />
        <ThumbnailOverlay />
      </ThumbnailCard>
    ));

  return (
    <>
      <CarouselContainer>
        <CarouselFade className="left" />
        <CarouselFade className="right" />

        <CarouselScrollTrack ref={trackRef}>
          <CarouselStrip>
            {renderCards(false)}
            {renderCards(true)}
          </CarouselStrip>
        </CarouselScrollTrack>
      </CarouselContainer>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setExpandedImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              backgroundColor: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            {/* Close button */}
            <Box
              onClick={(e) => { e.stopPropagation(); setExpandedImage(null); }}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
              }}
            >
              <CloseIcon sx={{ color: 'white', fontSize: 20 }} />
            </Box>

            {/* Image */}
            <motion.img
              src={expandedImage}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '100%',
                maxHeight: '90vh',
                objectFit: 'contain',
                borderRadius: '12px',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
