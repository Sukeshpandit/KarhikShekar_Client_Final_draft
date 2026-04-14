import { motion, useScroll, useTransform } from 'motion/react';
import {
  Timeline,
  FitnessCenter,
  Movie,
  EmojiEvents,
  Star,
  Visibility,
  Favorite,
  PlayArrow,
  OpenInNew,
  TrendingUp,
  Psychology,
  LocalFireDepartment,
} from '@mui/icons-material';
import { PageType } from '../../config/constants';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn } from '../../shared/components';
import {
  JourneyWrapper,
  HeroSection,
  HeroBackground,
  HeroContainer,
  HeroBadge,
  HeroTitle,
  HeroDescription,
  TimelineSection,
  TimelineProgressBar,
  ProgressInfo,
  ProgressBarTrack,
  ProgressBarFill,
  TimelineContainer,
  TimelineLine,
  TimelineItems,
  TimelineItem,
  TimelineYear,
  TimelineDot,
  TimelineContent,
  MilestoneCard,
  MilestoneHeader,
  MilestoneIcon,
  MilestoneTitle,
  MilestoneCategory,
  MilestoneDescription,
  MilestoneMedia,
  VideoEmbed,
  ImageGallery,
  MilestoneFooter,
  MilestoneStats,
  StatItem,
  MilestoneLink,
  CurrentProjectsSection,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  ProjectsGrid,
  ProjectCard,
  ProjectImage,
  ProjectBadge,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  ProjectTags,
  ProjectTag,
  ProjectActions,
  ProjectButton,
  CTASection,
  CTAContainer,
  CTATitle,
  CTADescription,
  CTAButtons,
  CTAButton,
  CTASecondaryButton,
} from './Journey.style';

interface JourneyProps {
  setPage?: (page: PageType) => void;
}

// ==================== MILESTONE DATA ====================

const MILESTONES = [
  {
    id: 1,
    year: '2015',
    age: '18',
    category: 'FITNESS',
    align: 'left' as const,
    icon: FitnessCenter,
    iconColor: '#8b5cf6',
    title: 'Fitness Journey Begins',
    description: 'Started my fitness transformation journey at age 18, discovering my passion for bodybuilding and healthy living. Joined my first gym and began learning the fundamentals of strength training.',
    type: 'images',
    images: [
      `${import.meta.env.BASE_URL}assets/images/certification-1.jpg`,
      `${import.meta.env.BASE_URL}assets/images/certification-2.jpg`,
    ],
    stats: [
      { icon: TrendingUp, label: 'First Year' },
      { icon: FitnessCenter, label: 'Training Began' },
    ],
    link: '#',
  },
  {
    id: 2,
    year: '2018',
    age: '21',
    category: 'FITNESS',
    align: 'right' as const,
    icon: EmojiEvents,
    iconColor: '#10b981',
    title: 'First Competition Entry',
    description: 'Competed in my first regional bodybuilding competition. Though I didn\'t win, the experience ignited my competitive spirit and taught me invaluable lessons about discipline and preparation.',
    type: 'video',
    videoId: 'oKSWfiVqqXM',
    stats: [
      { icon: Star, label: 'Top 5 Finish' },
      { icon: TrendingUp, label: 'Learning Phase' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 3,
    year: '2020',
    age: '23',
    category: 'FITNESS',
    align: 'left' as const,
    icon: Psychology,
    iconColor: '#D4AF37',
    title: 'Certified Fitness & Nutrition Coach',
    description: 'Obtained international ISSA certification in fitness training and nutrition coaching. This marked my transition from athlete to educator, combining scientific knowledge with practical experience.',
    type: 'images',
    images: [
      `${import.meta.env.BASE_URL}assets/images/certification-1.jpg`,
      `${import.meta.env.BASE_URL}assets/images/certification-2.jpg`,
    ],
    stats: [
      { icon: EmojiEvents, label: 'ISSA Certified' },
      { icon: Psychology, label: 'Nutrition Expert' },
    ],
    link: '#',
  },
  {
    id: 4,
    year: '2021',
    age: '24',
    category: 'FITNESS',
    align: 'right' as const,
    icon: LocalFireDepartment,
    iconColor: '#ef4444',
    title: 'State Level Championship Victory',
    description: 'Won the State Level Men\'s Physique Championship, earning my Pro Card. This victory validated years of hard work and marked my arrival in competitive fitness.',
    type: 'video',
    videoId: 'oKSWfiVqqXM',
    stats: [
      { icon: EmojiEvents, label: '1st Place' },
      { icon: Star, label: 'Pro Card Earned' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 5,
    year: '2022',
    age: '25',
    category: 'FITNESS',
    align: 'left' as const,
    icon: TrendingUp,
    iconColor: '#10b981',
    title: 'Online Transformation Program Launch',
    description: 'Launched my exclusive online fitness transformation program, combining personalized coaching with nutrition guidance. Successfully helped 500+ clients achieve their dream physiques.',
    type: 'video',
    videoId: '51sY3B8Rbnc',
    stats: [
      { icon: TrendingUp, label: '500+ Clients' },
      { icon: Favorite, label: '95% Success Rate' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
  {
    id: 6,
    year: '2023',
    age: '26',
    category: 'ACTING',
    align: 'right' as const,
    icon: Movie,
    iconColor: '#ec4899',
    title: 'Acting Debut - "The Journey Begins"',
    description: 'Made my acting debut in a critically acclaimed regional film. Received praise for delivering a powerful performance that showcased my versatility beyond the fitness world.',
    type: 'images',
    images: [
      `${import.meta.env.BASE_URL}assets/images/acting-debut-1.jpg`,
      `${import.meta.env.BASE_URL}assets/images/acting-debut-2.jpg`,
      `${import.meta.env.BASE_URL}assets/images/acting-debut-3.jpg`,
      `${import.meta.env.BASE_URL}assets/images/acting-debut-4.jpg`,
    ],
    stats: [
      { icon: Star, label: '4.5/5 Rating' },
      { icon: Movie, label: 'Best Debut Nominee' },
    ],
      link: 'https://imdb.com',
  },
  {
    id: 7,
    year: '2023',
    age: '26',
    category: 'ACTING',
    align: 'left' as const,
    icon: Star,
    iconColor: '#f59e0b',
    title: 'Lead Role - "Warrior\'s Path"',
    description: 'Secured the lead role in action thriller "Warrior\'s Path". Combined my fitness expertise with acting skills to deliver an authentic and physically demanding performance.',
    type: 'video',
    videoId: 'Thy0fpXXlSU',
    stats: [
      { icon: Visibility, label: '1.2M Views' },
      { icon: Star, label: 'Box Office Success' },
    ],
    link: 'https://imdb.com',
  },
  {
    id: 8,
    year: '2024',
    age: '27',
    category: 'FITNESS',
    align: 'right' as const,
    icon: EmojiEvents,
    iconColor: '#dc2626',
    title: 'Mr. India Bodybuilding Champion',
    description: 'Achieved the pinnacle of my fitness career by winning 1st place at the prestigious Mr. India Bodybuilding Championship. Years of dedication, discipline, and sacrifice culminated in this moment.',
    type: 'video',
    videoId: 'bnpPF_H70SM',
    stats: [
      { icon: EmojiEvents, label: 'National Champion' },
      { icon: Visibility, label: '750K Views' },
    ],
    link: GLOBAL_CONFIG.social.youtube.channelUrl,
  },
];

// ==================== CURRENT PROJECTS ====================

const CURRENT_PROJECTS = [
  {
    id: 1,
    title: 'Action Film - "Iron Will"',
    description: 'Currently filming an intense action drama where I play a former athlete turned vigilante. Combines my fitness expertise with dramatic acting.',
    image: `${import.meta.env.BASE_URL}assets/images/project-acting-1.jpg`,
    status: 'active' as const,
    category: 'Acting',
    tags: ['Action', 'Drama', 'Lead Role'],
    tagColor: '#D4AF37',
    links: [
      { label: 'IMDb', url: 'https://imdb.com' },
      { label: 'Trailer', url: 'https://youtube.com' },
    ],
  },
  {
    id: 2,
    title: 'Elite Transformation Bootcamp',
    description: 'Exclusive 12-week intensive fitness bootcamp for serious athletes. Limited to 20 participants with personalized coaching and nutrition plans.',
    image: `${import.meta.env.BASE_URL}assets/images/project-fitness-1.jpg`,
    status: 'active' as const,
    category: 'Fitness',
    tags: ['Bootcamp', 'Transformation', 'Elite'],
    tagColor: '#10b981',
    links: [
      { label: 'Enroll Now', url: '#' },
      { label: 'Success Stories', url: '#' },
    ],
  },
  {
    id: 3,
    title: 'Web Series - "The Champion"',
    description: 'Upcoming sports drama web series based on the journey of an underdog bodybuilder. Set to release in Q2 2024.',
    image: `${import.meta.env.BASE_URL}assets/images/project-acting-2.jpg`,
    status: 'upcoming' as const,
    category: 'Acting',
    tags: ['Web Series', 'Sports Drama', 'Biopic'],
    tagColor: '#f59e0b',
    links: [
      { label: 'Behind Scenes', url: 'https://youtube.com' },
      { label: 'Updates', url: '#' },
    ],
  },
  {
    id: 4,
    title: 'YouTube Fitness Channel Growth',
    description: 'Expanding fitness education content with weekly workout tutorials, nutrition guides, and transformation documentaries for 100K+ subscribers.',
    image: `${import.meta.env.BASE_URL}assets/images/project-fitness-2.jpg`,
    status: 'active' as const,
    category: 'Fitness',
    tags: ['YouTube', 'Education', 'Community'],
    tagColor: '#ef4444',
    links: [
      { label: 'Subscribe', url: GLOBAL_CONFIG.social.youtube.channelUrl },
      { label: 'Latest Video', url: GLOBAL_CONFIG.social.youtube.channelUrl },
    ],
  },
];

// ==================== COMPONENT ====================

export const Journey = ({ setPage }: JourneyProps) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"]
  });
  
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <JourneyWrapper>
      {/* Hero Section */}
      <HeroSection>
        <HeroBackground />
        <HeroContainer>
          <HeroBadge
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Timeline />
            <span>My Journey</span>
          </HeroBadge>

          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            9 Years of <span className="highlight">Evolution</span>
          </HeroTitle>

          <HeroDescription
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From a passionate 18-year-old beginner to National Bodybuilding Champion and Actor. Explore the milestones, achievements, and transformative moments that shaped my journey from 2015 to 2024.
          </HeroDescription>
        </HeroContainer>
      </HeroSection>

      {/* Timeline Section */}
      <TimelineSection ref={timelineRef}>
        <TimelineContainer>
          {/* Progress Indicator */}
          <TimelineProgressBar
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProgressInfo>
              <div className="start">
                <span className="year">2015</span>
                <span className="age">Age 18 • Start</span>
              </div>
              <div className="center" style={{ textAlign: 'center', flex: 1, padding: '0 1rem' }}>
                <span style={{ 
                  fontSize: '0.875rem', 
                  fontWeight: 700, 
                  color: 'rgba(255, 255, 255, 0.6)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  9 Years Journey
                </span>
              </div>
              <div className="end">
                <span className="year">2024</span>
                <span className="age">Age 27 • Present</span>
              </div>
            </ProgressInfo>
            <ProgressBarTrack>
              <ProgressBarFill style={{ width: progressWidth }} />
            </ProgressBarTrack>
          </TimelineProgressBar>

          <TimelineLine />
          <TimelineItems>
            {MILESTONES.map((milestone, index) => (
              <TimelineItem key={milestone.id} align={milestone.align}>
                {/* Year */}
                <TimelineYear align={milestone.align}>
                  <motion.div
                    initial={{ opacity: 0, x: milestone.align === 'left' ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <span className="year">{milestone.year}</span>
                    <span className="category">Age {milestone.age} • {milestone.category}</span>
                  </motion.div>
                </TimelineYear>

                {/* Dot */}
                <TimelineDot>
                  <motion.div    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
                  />
                </TimelineDot>

                {/* Content */}
                <TimelineContent align={milestone.align}>
                  <MilestoneCard
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    whileHover={{ y: -8 }}
                  >
                    <MilestoneHeader>
                      <div style={{ flex: 1 }}>
                        <MilestoneTitle>{milestone.title}</MilestoneTitle>
                        <MilestoneCategory color={milestone.iconColor}>
                          {milestone.category}
                        </MilestoneCategory>
                      </div>
                      <MilestoneIcon color={milestone.iconColor}>
                        <milestone.icon />
                      </MilestoneIcon>
                    </MilestoneHeader>

                    <MilestoneDescription>{milestone.description}</MilestoneDescription>

                    {/* Media */}
                    {milestone.type === 'video' && milestone.videoId && (
                      <MilestoneMedia>
                        <VideoEmbed>
                          <iframe
                            src={`https://www.youtube.com/embed/${milestone.videoId}?rel=0&modestbranding=1`}
                            title={milestone.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        </VideoEmbed>
                      </MilestoneMedia>
                    )}

                    {milestone.type === 'images' && milestone.images && (
                      <MilestoneMedia>
                        <ImageGallery>
                          {milestone.images.map((img, i) => (
                            <img key={i} src={img} alt={`${milestone.title} ${i + 1}`} loading="lazy" />
                          ))}
                        </ImageGallery>
                      </MilestoneMedia>
                    )}

                    {/* Footer */}
                    <MilestoneFooter>
                      <MilestoneStats>
                        {milestone.stats.map((stat, i) => (
                          <StatItem key={i}>
                            <stat.icon />
                            <span>{stat.label}</span>
                          </StatItem>
                        ))}
                      </MilestoneStats>
                      {milestone.link && milestone.link !== '#' && (
                        <MilestoneLink
                          endIcon={<OpenInNew fontSize="small" />}
                          onClick={() => window.open(milestone.link, '_blank', 'noopener,noreferrer')}
                        >
                          View More
                        </MilestoneLink>
                      )}
                    </MilestoneFooter>
                  </MilestoneCard>
                </TimelineContent>
              </TimelineItem>
            ))}
          </TimelineItems>
        </TimelineContainer>
      </TimelineSection>

      {/* Current Projects */}
      <CurrentProjectsSection>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Current <span className="highlight">Projects</span>
          </SectionTitle>
          <SectionDescription>
            Actively working on exciting projects across fitness and entertainment industries
          </SectionDescription>
        </SectionHeader>

        <ProjectsGrid>
          {CURRENT_PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} loading="lazy" />
                <ProjectBadge status={project.status}>
                  {project.status === 'active' ? '🔥 Active' : '🚀 Coming Soon'}
                </ProjectBadge>
              </ProjectImage>

              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>

                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i} color={project.tagColor}>
                      {tag}
                    </ProjectTag>
                  ))}
                </ProjectTags>

                <ProjectActions>
                  {project.links.map((link, i) => (
                    <ProjectButton
                      key={i}
                      onClick={() => {
                        if (link.url.startsWith('http')) {
                          window.open(link.url, '_blank', 'noopener,noreferrer');
                        } else {
                          window.location.href = link.url;
                        }
                      }}
                      endIcon={link.url.startsWith('http') ? <OpenInNew fontSize="small" /> : <PlayArrow />}
                    >
                      {link.label}
                    </ProjectButton>
                  ))}
                </ProjectActions>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </CurrentProjectsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTATitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let's Create <span className="highlight">Something Amazing</span>
          </CTATitle>

          <CTADescription>
            Whether it's fitness transformation, acting collaboration, or brand partnerships — let's connect and make it happen.
          </CTADescription>

          <CTAButtons>
            <CTAButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage?.('contact')}
            >
              Get In Touch
            </CTAButton>
            <CTASecondaryButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage?.('fitness')}
            >
              View Fitness
            </CTASecondaryButton>
          </CTAButtons>
        </CTAContainer>
      </CTASection>
    </JourneyWrapper>
  );
};
