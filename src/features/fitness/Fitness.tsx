import { useState } from 'react';
import { motion } from 'motion/react';
import { Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faMapPin,
  faClock,
  faUsers,
  faStar,
  faCheck,
  faDollarSign,
  faBolt,
  faChartLine,
  faDumbbell,
  faAward,
  faAppleAlt,
} from '@fortawesome/free-solid-svg-icons';

import { PageType, PAGES } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, BlurIn, Bounce } from '../../shared/components';
import { TransformationForm } from './components/TransformationForm/TransformationForm';
import { PlanSubscriptionForm } from './components/PlanSubscriptionForm';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import {
  FitnessWrapper,
  HeroSection,
  HeroBackgroundImage,
  HeroOverlay,
  HeroContent,
  HeroTextContainer,
  StatsBadge,
  StatsAvatarGroup,
  StatsAvatar,
  StatsBadgeText,
  HeroDescription,
  HeroTitle,
  HeroButtonGroup,
  HeroPrimaryButton,
  HeroSecondaryButton,
  Section,
  SectionContainer,
  SectionHeader,
  SectionLabel,
  SectionTitle,
  SectionDescription,
  ExperienceGrid,
  ExperienceCard,
  ExperienceImageContainer,
  ExperienceImageOverlay,
  ExperienceMetricBadge,
  MetricValue,
  MetricLabel,
  ExperienceCardContent,
  ExperienceCardTitle,
  ExperienceCardDescription,
  ExperienceButton,
  MethodsGrid,
  MethodCard,
  MethodImageContainer,
  MethodImageOverlay,
  MethodBadge,
  MethodCardContent,
  MethodCardTitle,
  MethodCardDescription,
  FeaturesCardContainer,
  FeaturesInnerGrid,
  FeatureItemsGrid,
  FeatureItem,
  FeatureIconWrapper,
  FeatureLabel,
  FeatureImageContainer,
  FeatureImage,
  FeatureImageOverlay,
  PricingGrid,
  PricingCard,
  PopularBadge,
  PricingDuration,
  PricingPrice,
  PricingPerMonth,
  PricingFeaturesList,
  PricingFeatureItem,
  PricingButton,
  TestimonialsGrid,
  TestimonialCard,
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
  FacilityGrid,
  FacilityImage,
  FacilityInfo,
  FacilityInfoList,
  FacilityInfoItem,
  FacilityIcon,
  FacilityInfoContent,
  FacilityInfoLabel,
  FacilityInfoText,
  FacilityButton,
  CTASection,
  CTABlob,
  CTAContent,
  CTAButtonGroup,
  CTAPrimaryButton,
  CTASecondaryButton,
} from './Fitness.style';

interface FitnessProps {
  setPage?: (page: PageType) => void;
}

// ==================== FITNESS CONTENT ====================

const FITNESS_CONTENT = {
  hero: {
    statsBadge: 'Clients achieved their fitness goals',
    description: 'Personalized training programs designed to boost your strength, endurance, and speed.',
    title: {
      line1: 'Redefine',
      line2: 'Your',
      line3: 'Limits.',
    },
    buttons: {
      primary: 'Start Training',
      secondary: 'See Results',
    },
  },
  
  experience: {
    label: 'Experience',
    title: 'Fitness Like',
    titleHighlight: 'Never Before',
    description: 'Transform The Way You Train With Innovative Workouts And Expert Guidance',
    readMore: 'Read More',
    items: [
      {
        title: 'Endurance Evolution',
        description: 'Boost Your Stamina And Resilience With Tailored Cardio And Endurance Workouts Designed To Keep You Moving Stronger For Longer',
        metric: '95',
        metricLabel: 'BPM',
        image: 'https://images.unsplash.com/photo-1552674605-5defe6aa44bb?q=80&w=600&auto=format&fit=crop',
      },
      {
        title: 'Speed Surge',
        description: 'Boost Your Agility And Explosiveness With High-Intensity Sprint And Movement Drills. Speed Surge Is Designed To Take Your Performance To The Next Level',
        metric: '1024',
        metricLabel: 'STEPS',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop',
      },
    ],
  },
  
  methods: {
    label: 'Methods',
    title: 'Train Smarter',
    titleHighlight: 'Unleash Your Potential',
    items: [
      {
        title: 'Personal Training',
        desc: 'One-on-one coaching with expert trainers',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Competition Preparation',
        desc: 'Expert guidance for bodybuilding, fitness, and athletic competitions. Tailored plans for peak performance and stage readiness.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop',
      },
      {
        title: 'Online Coaching',
        desc: 'Flexible remote training for busy schedules',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=400&auto=format&fit=crop',
      },
    ],
  },
  
  whyUs: {
    label: 'Why Us',
    title: 'Inspired to',
    titleHighlight: 'Inspire Your Best Self',
    description: "We're Your Partner in Achieving A Healthier, Stronger, And More Confident You.",
    features: [
      { label: 'State-of-the-art equipment', icon: faDumbbell },
      { label: 'Expert certified trainers', icon: faAward },
      { label: '24/7 facility access', icon: faClock },
      { label: 'Nutrition consultation', icon: faAppleAlt },
      { label: 'Progress tracking system', icon: faChartLine },
      { label: 'Community support', icon: faUsers },
    ],
  },
  
  pricing: {
    label: 'Plans',
    title: 'Monthly',
    titleHighlight: 'Membership Plans',
    description: 'Choose the perfect plan for your fitness journey',
    popularBadge: 'MOST POPULAR',
    button: 'Choose Plan',
    plans: [
      {
        duration: '1 Month',
        price: '₹3,000',
        perMonth: '₹3,000',
        highlighted: false,
        features: ['Full gym access', 'Basic equipment', 'Open hours', '5 free classes']
      },
      {
        duration: '3 Months',
        price: '₹7,500',
        perMonth: '₹2,500',
        highlighted: true,
        features: ['Full gym access', 'All equipment', 'Extended hours', 'Unlimited classes', 'Nutrition guide', '20% off PT sessions']
      },
      {
        duration: '6 Months',
        price: '₹12,000',
        perMonth: '₹2,000',
        highlighted: false,
        features: ['Full gym access', 'Premium equipment', '24/7 access', 'Unlimited classes', 'Nutrition plan', 'Free PT assessment', 'Progress tracking']
      },
      {
        duration: '12 Months',
        price: '₹20,000',
        perMonth: '₹1,667',
        highlighted: false,
        features: ['Everything included', 'Priority booking', 'Guest passes', '2 PT sessions/month', 'Body composition analysis', 'Supplement discount', 'Exclusive community']
      },
    ],
  },
  
  facility: {
    label: 'Facility',
    title: GLOBAL_CONFIG.business.gym.name,
    titleHighlight: 'Your Space to Thrive',
    location: {
      label: 'Location',
      text: `${GLOBAL_CONFIG.business.gym.location} - Easily accessible`,
      full: GLOBAL_CONFIG.business.gym.fullAddress,
    },
    hours: {
      label: 'Hours',
      text: GLOBAL_CONFIG.business.gym.hours.full,
    },
    facilities: {
      label: 'Facilities',
      text: 'Heavy Weights, Cardio, Classes, Steam Room',
    },
    button: 'Get Directions',
  },
  
  cta: {
    label: 'Ready',
    title: 'Be Next to',
    titleHighlight: 'Change Transformation',
    description: 'Join hundreds of transformed clients. Your journey to the best version of yourself starts today.',
    buttons: {
      primary: 'Start Your Transformation',
      secondary: 'Check My Journey',
    },
  },
};

// Legacy exports for backward compatibility
const experiences = FITNESS_CONTENT.experience.items;
const trainMethods = FITNESS_CONTENT.methods.items;
const features = FITNESS_CONTENT.whyUs.features;
const monthlyPackages = FITNESS_CONTENT.pricing.plans;

// Testimonials data (kept separate as it's used by carousel component)
const testimonials = [
  {
    name: 'Rajesh Kumar',
    results: 'Lost 28kg in 6 months',
    text: 'Transformed my entire life with personalized coaching. Best decision I ever made!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    comment: 'From struggling with fitness to running marathons - the trainers here changed everything!',
  },
  {
    name: 'Priya Singh',
    results: 'Gained 12kg muscle',
    text: 'Best investment in my health and confidence I have ever made. Highly recommended!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?q=80&w=300&auto=format&fit=crop',
    comment: 'The nutrition guidance and personalized programs helped me reach my dream physique!',
  },
  {
    name: 'Arjun Patel',
    results: 'Won competition',
    text: 'Professional guidance every step of the journey. Cannot thank them enough!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1552984897-101a775dae11?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=300&auto=format&fit=crop',
    comment: 'From beginner to competition winner - the expertise and support here is unmatched!',
  },
  {
    name: 'Sneha Reddy',
    results: 'Lost 15kg in 4 months',
    text: 'The personalized meal plans and workout routines made all the difference. Finally found a sustainable approach!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=300&auto=format&fit=crop',
    comment: 'Post-pregnancy transformation that gave me my confidence back. Forever grateful!',
  },
  {
    name: 'Vikram Malhotra',
    results: 'Increased strength 200%',
    text: 'Went from barely lifting to deadlifting 180kg! The progressive training system works wonders.',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=300&auto=format&fit=crop',
    comment: 'The strength gains are incredible. Best trainers in the business!',
  },
  {
    name: 'Ananya Sharma',
    results: 'Body fat 32% to 18%',
    text: 'Complete body recomposition in 8 months. The nutrition coaching was game-changing!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    comment: 'Not just weight loss, but a complete lifestyle transformation. Life-changing experience!',
  },
  {
    name: 'Rohit Desai',
    results: 'Marathon ready in 5 months',
    text: 'From couch potato to completing a full marathon. The endurance training program is phenomenal!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&auto=format&fit=crop',
    comment: 'Ran my first marathon at 45! Age is just a number with the right guidance.',
  },
  {
    name: 'Kavya Menon',
    results: 'Gained 8kg lean muscle',
    text: 'Athletic performance improved dramatically. Now representing my state in powerlifting!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1550259979-ed79b48d2a30?q=80&w=300&auto=format&fit=crop',
    comment: 'The sport-specific training took my performance to elite level. Champions train here!',
  },
  {
    name: 'Aditya Iyer',
    results: 'Lost 35kg in 8 months',
    text: 'Reversed my pre-diabetes and transformed my health completely. Best investment ever!',
    rating: 5,
    imageBefore: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=300&auto=format&fit=crop',
    imageAfter: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=300&auto=format&fit=crop',
    comment: 'Not just fitness, but a complete health transformation. My doctor is amazed!',
  },
];

export const Fitness = ({ setPage }: FitnessProps) => {
  const [selectedPlan, setSelectedPlan] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPlanFormOpen, setIsPlanFormOpen] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState(monthlyPackages[0]);

  const handlePageChange = (page: string) => {
    if (setPage) {
      setPage(page as PageType);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FitnessWrapper>
      {/* ==================== HERO SECTION ==================== */}
      <HeroSection>
        <HeroBackgroundImage>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/images/heroImage2.png`}
              alt="Fitness Hero"
              loading="eager"
            />
            <HeroOverlay />
          </motion.div>
        </HeroBackgroundImage>

        <HeroContent>
          <HeroTextContainer>
            {/* Stats Badge */}
            <StatsBadge
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <StatsAvatarGroup>
                <StatsAvatar sx={{ bgcolor: 'primary.main' }}>95%</StatsAvatar>
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.8 }} />
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.6 }} />
                <StatsAvatar sx={{ bgcolor: 'primary.main', opacity: 0.4 }}>100+</StatsAvatar>
              </StatsAvatarGroup>
              <StatsBadgeText>{FITNESS_CONTENT.hero.statsBadge}</StatsBadgeText>
            </StatsBadge>

            {/* Description */}
            <HeroDescription>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ margin: 0 }}
              >
                {FITNESS_CONTENT.hero.description}
              </motion.p>
            </HeroDescription>

            {/* Main Heading */}
            <HeroTitle
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {FITNESS_CONTENT.hero.title.line1}<br />
              {FITNESS_CONTENT.hero.title.line2} <span className="highlight">{FITNESS_CONTENT.hero.title.line3}</span>
            </HeroTitle>

            {/* CTA Buttons */}
            <HeroButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <HeroPrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsFormOpen(true)}
              >
                     {FITNESS_CONTENT.hero.buttons.primary}
                <FontAwesomeIcon icon={faArrowRight} />
              </HeroPrimaryButton>
              <HeroSecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(PAGES.JOURNEY)}
              >
                {FITNESS_CONTENT.hero.buttons.secondary}
                <FontAwesomeIcon icon={faArrowRight} />
              </HeroSecondaryButton>
            </HeroButtonGroup>
          </HeroTextContainer>
        </HeroContent>
      </HeroSection>

      {/* ==================== TRANSFORMATION STORIES CAROUSEL ==================== */}
      <TestimonialCarousel testimonials={testimonials} />

      {/* ==================== EXPERIENCE SECTION ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.experience.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.experience.title}<br />
                <span className="highlight">{FITNESS_CONTENT.experience.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.experience.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          <Stagger staggerDelay={0.15}>
            <ExperienceGrid>
              {experiences.map((exp, i) => (
                <ExperienceCard key={i}>
                  <ExperienceImageContainer>
                    <img src={exp.image} alt={exp.title} referrerPolicy="no-referrer" />
                    <ExperienceImageOverlay />
                    
                    {/* Metric Badge */}
                    <ScaleIn delay={0.3}>
                      <ExperienceMetricBadge>
                        <MetricValue>{exp.metric}</MetricValue>
                        <MetricLabel>{exp.metricLabel}</MetricLabel>
                      </ExperienceMetricBadge>
                    </ScaleIn>
                  </ExperienceImageContainer>

                  <ExperienceCardContent>
                    <ExperienceCardTitle>{exp.title}</ExperienceCardTitle>
                    <ExperienceCardDescription>{exp.description}</ExperienceCardDescription>
                    <ExperienceButton>{FITNESS_CONTENT.experience.readMore}</ExperienceButton>
                  </ExperienceCardContent>
                </ExperienceCard>
              ))}
            </ExperienceGrid>
          </Stagger>
        </SectionContainer>
      </Section>
         {/* ==================== TRAINING METHODS ==================== */}
      <Section sx={{ background: 'linear-gradient(to bottom, #0a1d2c, #112240)' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.methods.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.methods.title}<br />
                <span className="highlight">{FITNESS_CONTENT.methods.titleHighlight}</span>
              </SectionTitle>
            </SectionHeader>
          </FadeIn>

          <Stagger staggerDelay={0.15}>
            <MethodsGrid>
              {trainMethods.map((method, i) => (
                <MethodCard key={i}>
                  <MethodImageContainer>
                    <img
                      src={method.image || [
                        'https://images.unsplash.com/photo-1517960413843-0aee8e2d471c?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
                      ][i % 3]}
                      alt={method.title}
                      referrerPolicy="no-referrer"
                    />
                    <MethodImageOverlay />
                    <MethodBadge>{method.title}</MethodBadge>
                  </MethodImageContainer>

                  <MethodCardContent>
                    <MethodCardTitle>{method.title}</MethodCardTitle>
                    <MethodCardDescription>{method.desc}</MethodCardDescription>
                  </MethodCardContent>
                </MethodCard>
              ))}
            </MethodsGrid>
          </Stagger>
        </SectionContainer>
      </Section>

      {/* ==================== WHY WE'RE THE BEST ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.whyUs.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.whyUs.title}<br />
                <span className="highlight">{FITNESS_CONTENT.whyUs.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.whyUs.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          <SlideIn direction="up" delay={0.2}>
            <FeaturesCardContainer>
              <FeaturesInnerGrid>
                {/* Features Grid */}
                <Stagger staggerDelay={0.1}>
                  <FeatureItemsGrid>
                    {features.map((feature, i) => (
                      <FeatureItem key={i}>
                        <FeatureIconWrapper>
                          <FontAwesomeIcon icon={feature.icon} />
                        </FeatureIconWrapper>
                        <FeatureLabel>{feature.label}</FeatureLabel>
                      </FeatureItem>
                    ))}
                  </FeatureItemsGrid>
                </Stagger>

                {/* Right Side Image */}
                <ScaleIn delay={0.4}>
                  <FeatureImageContainer>
                    <FeatureImage>
                      <img
                        src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=500&auto=format&fit=crop"
                        alt="Fitness athlete"
                        referrerPolicy="no-referrer"
                      />
                      <FeatureImageOverlay />
                    </FeatureImage>
                  </FeatureImageContainer>
                </ScaleIn>
              </FeaturesInnerGrid>
            </FeaturesCardContainer>
          </SlideIn>
        </SectionContainer>
      </Section>

      {/* ==================== MONTHLY PACKAGES ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.pricing.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.pricing.title} <span className="highlight">{FITNESS_CONTENT.pricing.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription>
                {FITNESS_CONTENT.pricing.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          <Stagger staggerDelay={0.1}>
            <PricingGrid>
              {monthlyPackages.map((pkg, i) => (
                <PricingCard
                  key={i}
                  onClick={() => setSelectedPlan(i)}
                  selected={selectedPlan === i}
                >
                  {pkg.highlighted && (
                    <PopularBadge>{FITNESS_CONTENT.pricing.popularBadge}</PopularBadge>
                  )}

                  <Box sx={{ mb: { xs: 2, md: 3 } }}>
                    <PricingDuration>{pkg.duration}</PricingDuration>
                    <Box>
                      <PricingPrice>{pkg.price}</PricingPrice>
                      <PricingPerMonth>({pkg.perMonth}/month)</PricingPerMonth>
                    </Box>
                  </Box>

                  <PricingFeaturesList>
                    {pkg.features.map((feature, j) => (
                      <PricingFeatureItem key={j}>
                        <FontAwesomeIcon icon={faCheck} />
                        <span>{feature}</span>
                      </PricingFeatureItem>
                    ))}
                  </PricingFeaturesList>

                  <PricingButton 
                    selected={selectedPlan === i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlanData(pkg);
                      setIsPlanFormOpen(true);
                    }}
                  >
                    {FITNESS_CONTENT.pricing.button}
                  </PricingButton>
                </PricingCard>
              ))}
            </PricingGrid>
          </Stagger>
        </SectionContainer>
      </Section>
           {/* ==================== GYM FACILITY ==================== */}
      <Section sx={{ bgcolor: 'background.default' }}>
        <SectionContainer>
          <FacilityGrid>
            <SlideIn direction="left">
              <FacilityImage>
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop"
                  alt="Gym Facility"
                  referrerPolicy="no-referrer"
                />
              </FacilityImage>
            </SlideIn>

            <SlideIn direction="right">
              <FacilityInfo>
                <SectionLabel>{FITNESS_CONTENT.facility.label}</SectionLabel>
                <SectionTitle>
                  {FITNESS_CONTENT.facility.title}<br />
                  <span className="highlight">{FITNESS_CONTENT.facility.titleHighlight}</span>
                </SectionTitle>

                <FacilityInfoList>
                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faMapPin} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.location.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.location.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>

                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faClock} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.hours.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.hours.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>

                  <FacilityInfoItem>
                    <FacilityIcon>
                      <FontAwesomeIcon icon={faUsers} />
                    </FacilityIcon>
                    <FacilityInfoContent>
                      <FacilityInfoLabel>{FITNESS_CONTENT.facility.facilities.label}</FacilityInfoLabel>
                      <FacilityInfoText>{FITNESS_CONTENT.facility.facilities.text}</FacilityInfoText>
                    </FacilityInfoContent>
                  </FacilityInfoItem>
                </FacilityInfoList>

                <FacilityButton
                  onClick={() => {
                    const gymLocation = FITNESS_CONTENT.facility.location.full;
                    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(gymLocation)}`;
                    window.open(mapsUrl, '_blank');
                  }}
                >
                  {FITNESS_CONTENT.facility.button}
                  <FontAwesomeIcon icon={faArrowRight} />
                </FacilityButton>
              </FacilityInfo>
            </SlideIn>
          </FacilityGrid>
        </SectionContainer>
      </Section>

      {/* ==================== FINAL CTA ==================== */}
      <CTASection>
        <CTABlob
          animate={{ y: [0, 100, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <FadeIn delay={0.2}>
          <CTAContent>
            <SectionLabel>{FITNESS_CONTENT.cta.label}</SectionLabel>
            <SectionTitle>
              {FITNESS_CONTENT.cta.title}<br />
              <span className="highlight">{FITNESS_CONTENT.cta.titleHighlight}</span>
            </SectionTitle>
            <SectionDescription sx={{ margin: '0 auto', mb: { xs: 4, md: 6 } }}>
              {FITNESS_CONTENT.cta.description}
            </SectionDescription>

            <Bounce delay={0.5}>
              <CTAButtonGroup>
                <CTAPrimaryButton
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setIsFormOpen(true)}
                >
                  {FITNESS_CONTENT.cta.buttons.primary}
                  <FontAwesomeIcon icon={faArrowRight} />
                </CTAPrimaryButton>
                <CTASecondaryButton
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handlePageChange(PAGES.JOURNEY)}
                >
                  {FITNESS_CONTENT.cta.buttons.secondary}
                  <FontAwesomeIcon icon={faArrowRight} />
                </CTASecondaryButton>
              </CTAButtonGroup>
            </Bounce>
          </CTAContent>
        </FadeIn>
      </CTASection>

      {/* Transformation Form Modal */}
      <TransformationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        whatsappNumber={GLOBAL_CONFIG.contact.phoneWhatsApp}
      />

      {/* Plan Subscription Form Modal */}
      <PlanSubscriptionForm
        isOpen={isPlanFormOpen}
        onClose={() => setIsPlanFormOpen(false)}
        whatsappNumber={GLOBAL_CONFIG.contact.phoneWhatsApp}
        initialPlan={selectedPlanData}
      />
    </FitnessWrapper>
  );
};