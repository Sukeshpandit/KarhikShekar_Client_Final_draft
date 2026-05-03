import { useEffect, useRef } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  CarouselContainer,
  CarouselFade,
  CarouselScrollTrack,
  CarouselStrip,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailTag,
  ThumbnailLabel,
  ThumbnailLabelText,
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

  const renderCards = (disabled: boolean) =>
    testimonials.map((testimonial, index) => (
      <ThumbnailCard
        key={disabled ? `dup-${index}` : index}
        disabled={disabled}
        whileHover={{ scale: 1.02 }}
        sx={{
          width: { xs: '360px', sm: '320px', md: '380px' },
          minWidth: { xs: '340px', sm: '320px', md: '350px' },
          maxWidth: { xs: '380px', sm: '360px', md: '420px' },
          height: 'auto',
        }}
      >
        <ThumbnailImage
          src={testimonial.image}
          alt={testimonial.name}
          style={{ objectFit: 'cover', aspectRatio: '3/4', width: '100%', height: 'auto' }}
        />
        <ThumbnailOverlay />
        <ThumbnailTag>{testimonial.results}</ThumbnailTag>
        <ThumbnailLabel>
          <ThumbnailLabelText>{testimonial.name}</ThumbnailLabelText>
          <ChevronRightIcon
            sx={{ fontSize: '0.75rem', color: '#D4AF37', flexShrink: 0 }}
          />
        </ThumbnailLabel>
      </ThumbnailCard>
    ));

  return (
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
  );
};
