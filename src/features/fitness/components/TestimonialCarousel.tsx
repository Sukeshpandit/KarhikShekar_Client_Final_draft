import { motion } from 'motion/react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
  CarouselContainer,
  CarouselFade,
  CarouselStrip,
  ThumbnailCard,
  ThumbnailImage,
  ThumbnailOverlay,
  ThumbnailTag,
  ThumbnailLabel,
  ThumbnailLabelText,
} from '../../home/Home.style';
import {
  TestimonialImages,
  TestimonialImagesGrid,
  TestimonialImageWrapper,
  TestimonialBadge,
  TestimonialContent,
  TestimonialRating,
  TestimonialResult,
  TestimonialName,
  TestimonialText,
  TestimonialComment,
} from '../Fitness.style';

interface Testimonial {
  name: string;
  results: string;
  text: string;
  rating: number;
  imageBefore: string;
  imageAfter: string;
  comment: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  return (
    <CarouselContainer>
      <CarouselFade className="left" />
      <CarouselFade className="right" />
      
      <CarouselStrip>
        {/* First set */}
        {testimonials.map((testimonial, index) => (
          <ThumbnailCard
            key={index}
            whileHover={{ scale: 1.02 }}
            sx={{
              width: { xs: '280px', sm: '320px', md: '380px' },
              minWidth: { xs: '280px', sm: '320px', md: '350px' },
              maxWidth: { xs: '300px', sm: '360px', md: '420px' },
              height: 'auto',
            }}
          >
            <TestimonialImages style={{ aspectRatio: '16/9' }}>
              <TestimonialImagesGrid>
                {/* Before */}
                <TestimonialImageWrapper className="before">
                  <ThumbnailImage 
                    src={testimonial.imageBefore} 
                    alt={`${testimonial.name} before`} 
                    style={{ objectFit: 'cover' }}
                  />
                  <TestimonialBadge className="before">BEFORE</TestimonialBadge>
                </TestimonialImageWrapper>
                {/* After */}
                <TestimonialImageWrapper className="after">
                  <ThumbnailImage 
                    src={testimonial.imageAfter} 
                    alt={`${testimonial.name} after`}
                    style={{ objectFit: 'cover' }}
                  />
                  <TestimonialBadge className="after">AFTER</TestimonialBadge>
                </TestimonialImageWrapper>
              </TestimonialImagesGrid>
            </TestimonialImages>
            <ThumbnailOverlay />
            <ThumbnailTag>{testimonial.results}</ThumbnailTag>
            <ThumbnailLabel>
              <ThumbnailLabelText>{testimonial.name}</ThumbnailLabelText>
              <ChevronRightIcon
                sx={{
                  fontSize: '0.75rem',
                  color: '#D4AF37',
                  flexShrink: 0,
                }}
              />
            </ThumbnailLabel>
          </ThumbnailCard>
        ))}
        
        {/* Duplicate for continuous scroll */}
        {testimonials.map((testimonial, index) => (
          <ThumbnailCard
            key={`dup-${index}`}
            disabled
            sx={{
              width: { xs: '280px', sm: '320px', md: '380px' },
              minWidth: { xs: '280px', sm: '320px', md: '350px' },
              maxWidth: { xs: '300px', sm: '360px', md: '420px' },
              height: 'auto',
            }}
          >
            <TestimonialImages style={{ aspectRatio: '16/9' }}>
              <TestimonialImagesGrid>
                {/* Before */}
                <TestimonialImageWrapper className="before">
                  <ThumbnailImage 
                    src={testimonial.imageBefore} 
                    alt={`${testimonial.name} before`}
                    style={{ objectFit: 'cover' }}
                  />
                  <TestimonialBadge className="before">BEFORE</TestimonialBadge>
                </TestimonialImageWrapper>
                {/* After */}
                <TestimonialImageWrapper className="after">
                  <ThumbnailImage 
                    src={testimonial.imageAfter} 
                    alt={`${testimonial.name} after`}
                    style={{ objectFit: 'cover' }}
                  />
                  <TestimonialBadge className="after">AFTER</TestimonialBadge>
                </TestimonialImageWrapper>
              </TestimonialImagesGrid>
            </TestimonialImages>
            <ThumbnailOverlay />
            <ThumbnailTag>{testimonial.results}</ThumbnailTag>
            <ThumbnailLabel>
              <ThumbnailLabelText>{testimonial.name}</ThumbnailLabelText>
              <ChevronRightIcon
                sx={{
                  fontSize: '0.75rem',
                  color: '#D4AF37',
                  flexShrink: 0,
                }}
              />
            </ThumbnailLabel>
          </ThumbnailCard>
        ))}
      </CarouselStrip>
    </CarouselContainer>
  );
};
