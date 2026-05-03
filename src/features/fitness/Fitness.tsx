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
  OfferBadge,
  OriginalPrice,
  SavingsBadge,
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
  SupplementsSection,
  SupplementsContainer,
  SupplementsBrandStripWrapper,
  SupplementsBrandStrip,
  BrandPill,
  SupplementBenefitsGrid,
  SupplementBenefitCard,
  SupplementBenefitIcon,
  SupplementBenefitTitle,
  SupplementBenefitText,
  SupplementCategoriesGrid,
  SupplementCategoryCard,
  SupplementCategoryEmoji,
  SupplementCategoryName,
  SupplementCategoryDesc,
  SupplementCTABox,
  SupplementOrderButton,
  FacilityGrid,
  FacilityImage,
  FacilityInfo,
  FacilityInfoList,
  FacilityInfoItem,
  FacilityIcon,
  FacilityInfoContent,
  FacilityInfoLabel,
  FacilityInfoText,
  FitnessHeroImageMobile,
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
        image: `${import.meta.env.BASE_URL}assets/Gym/handBalance.jpeg`,
      },
      {
        title: 'Speed Surge',
        description: 'Boost Your Agility And Explosiveness With High-Intensity Sprint And Movement Drills. Speed Surge Is Designed To Take Your Performance To The Next Level',
        metric: '1024',
        metricLabel: 'STEPS',
        image: `${import.meta.env.BASE_URL}assets/Gym/body.jpeg`,
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
    title: 'Membership',
    titleHighlight: 'Plans',
    description: 'Choose the perfect plan for your fitness journey',
    popularBadge: 'MOST POPULAR',
    button: 'Choose Plan',
    sections: [
      {
        title: 'Monthly Gym',
        plans: [
          { duration: '1 Month',  price: '₹2,000', perMonth: '₹2,000', highlighted: false, features: ['Full gym access', 'Basic equipment', 'Open hours', '5 free classes'] },
          { duration: '3 Months', price: '₹3,500', perMonth: '₹1,167', highlighted: false, features: ['Full gym access', 'All equipment', 'Extended hours', 'Unlimited classes'] },
          { duration: '6 Months', price: '₹4,800', perMonth: '₹800',   highlighted: true,  features: ['Full gym access', 'Premium equipment', '24/7 access', 'Unlimited classes', 'Nutrition guide'] },
          { duration: '12 Months',price: '₹6,999', perMonth: '₹583',   highlighted: false, features: ['Everything included', 'Priority booking', 'Guest passes', 'Exclusive community'] },
        ],
      },
      {
        title: 'Personal Training',
        plans: [
          { duration: '12 Sessions — Single',  price: '₹10,000', originalPrice: '₹12,000', savingsLabel: 'Save ₹2,000', highlighted: false, features: ['12 one-on-one sessions', 'Custom workout plan', 'Progress tracking', 'Nutrition guidance'] },
          { duration: '12 Sessions — Couples', price: '₹17,000', originalPrice: '₹20,000', savingsLabel: 'Save ₹3,000', highlighted: true,  features: ['12 sessions for 2', 'Partner workout plans', 'Progress tracking', 'Nutrition guidance'] },
        ],
      },
      {
        title: 'Personal Training in Gym',
        plans: [
          { duration: '12 Sessions', price: '₹5,999', originalPrice: '₹7,999', savingsLabel: 'Save ₹2,000', highlighted: true, features: ['Gym access included', 'Dedicated trainer', 'Custom workout plan', 'Nutrition consultation', 'Progress tracking'] },
        ],
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
  
  supplements: {
    label: 'Supplements',
    title: 'Premium Supplements',
    titleHighlight: 'Best Price Guaranteed',
    description: 'We deal in authentic supplements from all major national & international brands — sourced directly from authorized distributors so you always get the real deal at the lowest price.',
    brands: [
      'Optimum Nutrition', 'MuscleBlaze', 'MyProtein', 'GNC', 'Dymatize',
      'MuscleTech', 'BSN', 'Scitron', 'Bigmuscles', 'Avvatar', 'Nakpro', 'HealthKart',
      'Isopure', 'Universal Nutrition', 'BPI Sports', 'ProSupps',
    ],
    benefits: [
      { icon: faAward,      title: '100% Authentic',   text: 'Verified genuine products from authorized distributors only' },
      { icon: faDollarSign, title: 'Lowest Price',      text: 'Beat any competitor price — guaranteed best deal' },
      { icon: faDumbbell,   title: 'All Top Brands',    text: 'Wide range across every leading national & international brand' },
      { icon: faUsers,      title: 'Expert Advice',     text: 'Certified trainers guide you to the right supplement stack' },
    ],
    categories: [
      { emoji: '💪', name: 'Whey Protein',   desc: 'Fast-absorbing muscle builder' },
      { emoji: '🏋️', name: 'Mass Gainer',    desc: 'High-calorie bulk-up formula' },
      { emoji: '⚡', name: 'Pre-Workout',    desc: 'Energy, focus & pump booster' },
      { emoji: '🔬', name: 'Creatine',       desc: 'Strength & power enhancer' },
      { emoji: '🌿', name: 'BCAAs',          desc: 'Recovery & endurance support' },
      { emoji: '💊', name: 'Multivitamins',  desc: 'Complete daily micronutrition' },
      { emoji: '🔥', name: 'Fat Burner',     desc: 'Metabolism & fat-loss support' },
      { emoji: '🐟', name: 'Omega-3',        desc: 'Joint, heart & brain health' },
    ],
    cta: {
      title: 'Ready to Stack Up?',
      titleHighlight: 'Order Today',
      text: "Message us on WhatsApp with what you need — we'll give you the best price, verify authenticity, and arrange delivery straight to you.",
      button: 'Order via WhatsApp',
    },
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

// Testimonials data (kept separate as it's used by carousel component)
const BASE = import.meta.env.BASE_URL;
const testimonials = [
  { name: 'Rajesh Kumar',   results: 'Lost 28kg in 6 months',      image: `${BASE}assets/Transformations/IMG-20260413-WA0022.jpg` },
  { name: 'Priya Singh',    results: 'Gained 12kg muscle',          image: `${BASE}assets/Transformations/IMG-20260413-WA0024.jpg` },
  { name: 'Arjun Patel',    results: 'Won competition',             image: `${BASE}assets/Transformations/IMG-20260413-WA0025.jpg` },
  { name: 'Sneha Reddy',    results: 'Lost 15kg in 4 months',       image: `${BASE}assets/Transformations/IMG-20260413-WA0049.jpg` },
  { name: 'Vikram Malhotra',results: 'Increased strength 200%',     image: `${BASE}assets/Transformations/IMG-20260413-WA0051.jpg` },
  { name: 'Ananya Sharma',  results: 'Body fat 32% to 18%',         image: `${BASE}assets/Transformations/IMG-20260413-WA0075.jpg` },
  { name: 'Rohit Desai',    results: 'Marathon ready in 5 months',  image: `${BASE}assets/Transformations/IMG-20260413-WA0077.jpg` },
  { name: 'Kavya Menon',    results: 'Gained 8kg lean muscle',      image: `${BASE}assets/Transformations/IMG-20260413-WA0103.jpg` },
  { name: 'Aditya Iyer',    results: 'Lost 35kg in 8 months',       image: `${BASE}assets/Transformations/IMG-20260413-WA0104.jpg` },
  { name: 'Meera Nair',     results: 'Complete body transformation', image: `${BASE}assets/Transformations/IMG-20260413-WA0105.jpg` },
];

export const Fitness = ({ setPage }: FitnessProps) => {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isPlanFormOpen, setIsPlanFormOpen] = useState(false);
  const [selectedPlanData, setSelectedPlanData] = useState<any>(FITNESS_CONTENT.pricing.sections[0].plans[0]);

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
        {/* Mobile hero image — shown only below md */}
        <FitnessHeroImageMobile
          src={`${import.meta.env.BASE_URL}assets/Gym/Filtness_home.jpg`}
          alt="Fitness Hero"
        />

        {/* Desktop hero image — shown only from md upward */}
        <HeroBackgroundImage>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%' }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/Gym/IMG-20260413-WA0083.jpg`}
              alt="Fitness Hero"
              loading="eager"
            />
          </motion.div>
        </HeroBackgroundImage>

        {/* Overlay — covers both mobile and desktop images */}
        <HeroOverlay />

        <HeroContent>
          <HeroTextContainer>
            {/* Stats Badge */}
            {/* <StatsBadge
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
            </StatsBadge> */}

            {/* Description */}
            {/* <HeroDescription>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{ margin: 0 }}
              >
                {FITNESS_CONTENT.hero.description}
              </motion.p>
            </HeroDescription> */}

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
              {/* <HeroSecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePageChange(PAGES.JOURNEY)}
              >
                {FITNESS_CONTENT.hero.buttons.secondary}
                <FontAwesomeIcon icon={faArrowRight} />
              </HeroSecondaryButton> */}
            </HeroButtonGroup>
          </HeroTextContainer>
        </HeroContent>

        {/* Transformation Stories Carousel — bottom of hero, same as Home */}
        <Box sx={{ mt: { xs: 10, sm: 14, md: 20 } }}>
          <SlideIn direction="up" delay={0.2}>
            <TestimonialCarousel testimonials={testimonials} />
          </SlideIn>
        </Box>
      </HeroSection>

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
                    {/* <ExperienceButton>{FITNESS_CONTENT.experience.readMore}</ExperienceButton> */}
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


      {/* ==================== MEMBERSHIP PLANS ==================== */}
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

          {/* ── Monthly Gym ── */}
          {(() => {
            const section = FITNESS_CONTENT.pricing.sections[0];
            return (
              <Box sx={{ mb: { xs: 4, md: 6 } }}>
                <FadeIn>
                  <Box sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, pb: 1, borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                    {section.title}
                  </Box>
                </FadeIn>
                <Stagger staggerDelay={0.1}>
                  <PricingGrid>
                    {section.plans.map((pkg, i) => {
                      const planId = i;
                      return (
                        <PricingCard key={i} onClick={() => setSelectedPlan(planId)} selected={selectedPlan === planId} sx={pkg.highlighted ? { pt: { xs: '2.2rem', md: '2.5rem' } } : {}}>
                          {pkg.highlighted && <PopularBadge />}
                          <Box sx={{ mb: 2 }}>
                            <PricingDuration>{pkg.duration}</PricingDuration>
                            <PricingPrice>{pkg.price}</PricingPrice>
                            {(pkg as any).perMonth && <PricingPerMonth sx={{ mt: 0.5 }}>({(pkg as any).perMonth}/month)</PricingPerMonth>}
                          </Box>
                          <PricingFeaturesList>
                            {pkg.features.map((f, j) => <PricingFeatureItem key={j}><FontAwesomeIcon icon={faCheck} /><span>{f}</span></PricingFeatureItem>)}
                          </PricingFeaturesList>
                          <PricingButton selected={selectedPlan === planId} onClick={(e) => { e.stopPropagation(); setSelectedPlanData(pkg); setIsPlanFormOpen(true); }}>{FITNESS_CONTENT.pricing.button}</PricingButton>
                        </PricingCard>
                      );
                    })}
                  </PricingGrid>
                </Stagger>
              </Box>
            );
          })()}

          {/* ── Personal Training + PT in Gym — side by side ── */}
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 5 }, mt: { xs: 5, md: 7 }, alignItems: 'stretch' }}>
            {[1, 2].map((si) => {
              const section = FITNESS_CONTENT.pricing.sections[si];
              return (
                <Box key={si} sx={{ display: 'flex', flexDirection: 'column' }}>
                  <FadeIn>
                    <Box sx={{ fontSize: '0.8rem', fontWeight: 700, color: '#D4AF37', letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2.5, pb: 1, borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
                      {section.title}
                    </Box>
                  </FadeIn>
                  <Stagger staggerDelay={0.1}>
                    <PricingGrid sx={{ flex: 1, gridTemplateColumns: { xs: '1fr', sm: `repeat(${section.plans.length}, 1fr)` }, alignContent: 'start' }}>
                      {section.plans.map((pkg, i) => {
                        const planId = si * 100 + i;
                        return (
                          <PricingCard key={i} onClick={() => setSelectedPlan(planId)} selected={selectedPlan === planId} sx={{ ...(pkg.highlighted ? { pt: { xs: '2.2rem', md: '2.5rem' } } : {}), height: section.plans.length === 1 ? '100%' : 'auto' }}>
                            {pkg.highlighted && <PopularBadge />}
                            <Box sx={{ mb: 2 }}>
                              <PricingDuration>{pkg.duration}</PricingDuration>
                              {(pkg as any).originalPrice && <OriginalPrice>{(pkg as any).originalPrice}</OriginalPrice>}
                              <PricingPrice>{pkg.price}</PricingPrice>
                              {(pkg as any).savingsLabel && <SavingsBadge>{(pkg as any).savingsLabel}</SavingsBadge>}
                            </Box>
                            <PricingFeaturesList>
                              {pkg.features.map((f, j) => <PricingFeatureItem key={j}><FontAwesomeIcon icon={faCheck} /><span>{f}</span></PricingFeatureItem>)}
                            </PricingFeaturesList>
                            <PricingButton selected={selectedPlan === planId} onClick={(e) => { e.stopPropagation(); setSelectedPlanData(pkg); setIsPlanFormOpen(true); }}>{FITNESS_CONTENT.pricing.button}</PricingButton>
                          </PricingCard>
                        );
                      })}
                    </PricingGrid>
                  </Stagger>
                </Box>
              );
            })}
          </Box>
        </SectionContainer>
      </Section>

      {/* ==================== SUPPLEMENTS SECTION ==================== */}
      <SupplementsSection>
        <SupplementsContainer>
          <FadeIn>
            <SectionHeader>
              <SectionLabel>{FITNESS_CONTENT.supplements.label}</SectionLabel>
              <SectionTitle>
                {FITNESS_CONTENT.supplements.title}<br />
                <span className="highlight">{FITNESS_CONTENT.supplements.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription sx={{ maxWidth: '720px', mx: 'auto' }}>
                {FITNESS_CONTENT.supplements.description}
              </SectionDescription>
            </SectionHeader>
          </FadeIn>

          {/* Scrolling brand strip */}
          <SupplementsBrandStripWrapper>
            <SupplementsBrandStrip>
              {[...FITNESS_CONTENT.supplements.brands, ...FITNESS_CONTENT.supplements.brands].map((brand, i) => (
                <BrandPill key={i}>⭐ {brand}</BrandPill>
              ))}
            </SupplementsBrandStrip>
          </SupplementsBrandStripWrapper>

          {/* Why buy from us */}
          <Stagger staggerDelay={0.1}>
            <SupplementBenefitsGrid>
              {FITNESS_CONTENT.supplements.benefits.map((b, i) => (
                <SupplementBenefitCard key={i} whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <SupplementBenefitIcon>
                    <FontAwesomeIcon icon={b.icon} />
                  </SupplementBenefitIcon>
                  <SupplementBenefitTitle>{b.title}</SupplementBenefitTitle>
                  <SupplementBenefitText>{b.text}</SupplementBenefitText>
                </SupplementBenefitCard>
              ))}
            </SupplementBenefitsGrid>
          </Stagger>

          {/* Supplement categories */}
          <Stagger staggerDelay={0.07}>
            <SupplementCategoriesGrid>
              {FITNESS_CONTENT.supplements.categories.map((cat, i) => (
                <SupplementCategoryCard key={i} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <SupplementCategoryEmoji>{cat.emoji}</SupplementCategoryEmoji>
                  <SupplementCategoryName>{cat.name}</SupplementCategoryName>
                  <SupplementCategoryDesc>{cat.desc}</SupplementCategoryDesc>
                </SupplementCategoryCard>
              ))}
            </SupplementCategoriesGrid>
          </Stagger>

          {/* Order CTA */}
          <FadeIn delay={0.2}>
            <SupplementCTABox>
              <SectionLabel>{FITNESS_CONTENT.supplements.cta.title}</SectionLabel>
              <SectionTitle>
                <span className="highlight">{FITNESS_CONTENT.supplements.cta.titleHighlight}</span>
              </SectionTitle>
              <SectionDescription sx={{ maxWidth: '600px', mx: 'auto' }}>
                {FITNESS_CONTENT.supplements.cta.text}
              </SectionDescription>
              <SupplementOrderButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`https://wa.me/${GLOBAL_CONFIG.contact.phoneWhatsApp}`, '_blank')}
              >
                <FontAwesomeIcon icon={faArrowRight} />
                {FITNESS_CONTENT.supplements.cta.button}
              </SupplementOrderButton>
            </SupplementCTABox>
          </FadeIn>
        </SupplementsContainer>
      </SupplementsSection>

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