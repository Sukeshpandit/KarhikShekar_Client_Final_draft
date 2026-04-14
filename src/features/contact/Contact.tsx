import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Box, MenuItem } from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Send,
  AccessTime,
  FitnessCenter,
  VideoCameraFront,
  EmojiNature,
  Security,
  EmojiEvents,
  Adjust,
  ArrowOutward,
} from '@mui/icons-material';
import { GLOBAL_CONFIG } from '../../config/global.config';
import { FadeIn, SlideIn, Stagger, ScaleIn, Bounce } from '../../shared/components';
import * as Styles from './Contact.style';

// ==================== CONTACT CONTENT ====================

const CONTACT_CONTENT = {
  hero: {
    badge: GLOBAL_CONFIG.titles.main,
    heading: {
      main: 'Get In Touch',
      highlight: 'With Us',
    },
    subtitle: 'Multi-Passionate Professional',
    description: 'Multi-talented professional working as an actor, wildlife rescuer, and fitness trainer. Passionate about storytelling, animal welfare, and helping people achieve better health. Actively involved in rescue operations and promoting conservation awareness. Open to collaborations in acting, fitness coaching, and wildlife initiatives.',
  },
  
  contactInfo: [
    { icon: LocationOn, label: 'Address', value: GLOBAL_CONFIG.contact.address.short },
    { icon: Email, label: 'Email', value: GLOBAL_CONFIG.contact.email },
    { icon: Phone, label: 'Phone', value: GLOBAL_CONFIG.contact.phoneDisplay },
    { icon: AccessTime, label: 'Hours', value: '9:00 AM - 8:00 PM' },
  ],
  
  featured: {
    title: {
      line1: "Let's Start a",
      line2: 'Conversation',
    },
    description: "Ready to work together? Drop me a message and I'll get back to you as soon as possible.",
    features: [
      { icon: Phone, text: 'Quick Response' },
      { icon: Send, text: '24/7 Available' },
    ],
  },
  
  form: {
    fields: {
      firstName: { label: 'First Name', placeholder: 'Enter first name' },
      lastName: { label: 'Last Name', placeholder: 'Enter last name' },
      email: { label: 'Email', placeholder: 'Enter your email' },
      phone: { label: 'Phone', placeholder: 'Enter phone number' },
      service: { label: 'Service Interest', placeholder: 'Select a service...' },
      message: { label: 'Your Message', placeholder: 'Enter your message' },
    },
    submitButton: {
      idle: 'Send Message',
      submitting: 'Sending...',
    },
  },
  
  services: [
    { icon: FitnessCenter, title: 'Personal Training', desc: '1-on-1 Custom Programs' },
    { icon: FitnessCenter, title: 'Group Classes', desc: 'Dynamic Team Sessions' },
    { icon: VideoCameraFront, title: 'Film Projects', desc: 'Acting Collaborations' },
    { icon: EmojiNature, title: 'Wildlife Rescue', desc: 'Snake & Animal Emergency' },
    { icon: EmojiEvents, title: 'Brand Deals', desc: 'Partnerships & Sponsorships' },
    { icon: Adjust, title: 'Events', desc: 'Appearances & Shows' },
  ],
  
  success: {
    title: 'Message Sent! ✓',
    text: "Thank you for reaching out! I'll respond within 24 hours.",
    resetButton: 'Send Another Message →',
  },
};

// Legacy exports for backward compatibility
const services = CONTACT_CONTENT.services;
const contactInfo = CONTACT_CONTENT.contactInfo;

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <Styles.ContactWrapper>
      {/* Background Handshake Image */}
      <Styles.BackgroundImage
        sx={{
          backgroundImage: `url(${import.meta.env.BASE_URL}assets/images/handshake-businessmen.jpg)`,
        }}
      />

      <Styles.ContentWrapper>
        {/* Top Section with Headline and Intro */}
        <Styles.TopSection>
          <Styles.TopContainer>
            {/* Centered Content */}
            <Styles.CenteredContent>
              {/* Top Badge */}
              <FadeIn>
                <Styles.TopBadge>
                  <Styles.BadgeDot />
                  <Styles.BadgeText>{CONTACT_CONTENT.hero.badge}</Styles.BadgeText>
                  <Styles.BadgeDot sx={{ backgroundColor: '#34d399' }} />
                </Styles.TopBadge>
              </FadeIn>

              {/* Main Heading */}
              <ScaleIn delay={0.2}>
                <Styles.MainHeading>
                  {CONTACT_CONTENT.hero.heading.main} <span className="highlight">{CONTACT_CONTENT.hero.heading.highlight}</span>
                </Styles.MainHeading>
              </ScaleIn>

              {/* Subtitle */}
              <SlideIn direction="up" delay={0.3}>
                <Styles.Subtitle>
                  {CONTACT_CONTENT.hero.subtitle}
                </Styles.Subtitle>
              </SlideIn>

              {/* Detailed Description */}
              <SlideIn direction="up" delay={0.4}>
                <Styles.Description>
                  {CONTACT_CONTENT.hero.description}
                </Styles.Description>
              </SlideIn>
            </Styles.CenteredContent>

            {/* Contact Info Cards - Horizontal Row */}
            <Stagger staggerDelay={0.1}>
              <Styles.ContactInfoGrid>
                {contactInfo.map((info, i) => (
                  <Styles.ContactInfoCard
                    key={i}
                    className="group"
                  >
                    <Styles.IconWrapper whileHover={{ rotate: 45 }}>
                      <info.icon sx={{ fontSize: 18 }} />
                    </Styles.IconWrapper>
                    <Box>
                      <Styles.InfoLabel>{info.label}</Styles.InfoLabel>
                      <Styles.InfoValue>{info.value}</Styles.InfoValue>
                    </Box>
                  </Styles.ContactInfoCard>
                ))}
              </Styles.ContactInfoGrid>
            </Stagger>
          </Styles.TopContainer>
        </Styles.TopSection>

        {/* Main Content - Image + Form */}
        <Styles.MainContentSection>
          <Styles.MainContentContainer>
            <Styles.ContentGrid>
              {/* Left - Image with Services */}
              <SlideIn direction="left" delay={0.2}>
                <Styles.LeftColumn>
                  {/* Featured Image - Connect With Us */}
                  <Styles.FeaturedImageBox>
                    <Styles.FeaturedContent>
                      <ScaleIn delay={0.4}>
                        <Styles.FeaturedIconBox>
                          <Email sx={{ fontSize: 48, color: 'primary.main' }} />
                        </Styles.FeaturedIconBox>
                      </ScaleIn>

                    <Styles.FeaturedTitle>
                      {CONTACT_CONTENT.featured.title.line1}
                      <br />
                      <span className="highlight">{CONTACT_CONTENT.featured.title.line2}</span>
                    </Styles.FeaturedTitle>

                    <Styles.FeaturedDescription>
                      {CONTACT_CONTENT.featured.description}
                    </Styles.FeaturedDescription>

                    <Styles.FeaturesRow>
                      {CONTACT_CONTENT.featured.features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <Styles.FeatureItem key={i}>
                            <Icon className="icon" sx={{ fontSize: 20 }} />
                            <span className="text">{feature.text}</span>
                          </Styles.FeatureItem>
                        );
                      })}
                    </Styles.FeaturesRow>
                  </Styles.FeaturedContent>
                </Styles.FeaturedImageBox>
              </Styles.LeftColumn>
              </SlideIn>

              {/* Right - Contact Form */}
              <SlideIn direction="right" delay={0.2}>
                <Styles.RightColumn>
               {formState === 'success' ? (
                  <ScaleIn>
                    <Styles.SuccessMessage>
                      <Bounce delay={0.2}>
                        <Styles.SuccessIconBox>
                          <Send sx={{ fontSize: 40, color: 'primary.main' }} />
                        </Styles.SuccessIconBox>
                      </Bounce>

                    <Styles.SuccessTitle>{CONTACT_CONTENT.success.title}</Styles.SuccessTitle>

                    <Styles.SuccessText>
                      {CONTACT_CONTENT.success.text}
                    </Styles.SuccessText>

                    <Styles.ResetButton onClick={() => setFormState('idle')}>
                      {CONTACT_CONTENT.success.resetButton}
                    </Styles.ResetButton>
                  </Styles.SuccessMessage>
                  </ScaleIn>
                ) : (
                  <Styles.FormContainer onSubmit={handleSubmit}>
                    <Styles.FormRow>
                      <Styles.FormGroup>
                        <Styles.FormLabel>{CONTACT_CONTENT.form.fields.firstName.label}</Styles.FormLabel>
                        <Styles.StyledTextField
                          required
                          type="text"
                          placeholder={CONTACT_CONTENT.form.fields.firstName.placeholder}
                          variant="outlined"
                        />
                      </Styles.FormGroup>
                      <Styles.FormGroup>
                        <Styles.FormLabel>{CONTACT_CONTENT.form.fields.lastName.label}</Styles.FormLabel>
                        <Styles.StyledTextField
                          required
                          type="text"
                          placeholder={CONTACT_CONTENT.form.fields.lastName.placeholder}
                          variant="outlined"
                        />
                      </Styles.FormGroup>
                    </Styles.FormRow>

                    <Styles.FormRow>
                      <Styles.FormGroup>
                        <Styles.FormLabel>{CONTACT_CONTENT.form.fields.email.label}</Styles.FormLabel>
                        <Styles.StyledTextField
                          required
                          type="email"
                          placeholder={CONTACT_CONTENT.form.fields.email.placeholder}
                          variant="outlined"
                        />
                      </Styles.FormGroup>
                      <Styles.FormGroup>
                        <Styles.FormLabel>{CONTACT_CONTENT.form.fields.phone.label}</Styles.FormLabel>
                        <Styles.StyledTextField
                          type="tel"
                          placeholder={CONTACT_CONTENT.form.fields.phone.placeholder}
                          variant="outlined"
                        />
                      </Styles.FormGroup>
                    </Styles.FormRow>

                    <Styles.FormGroup>
                      <Styles.FormLabel>{CONTACT_CONTENT.form.fields.service.label}</Styles.FormLabel>
                      <Styles.StyledSelect required defaultValue="" displayEmpty>
                        <MenuItem value="" disabled>
                          {CONTACT_CONTENT.form.fields.service.placeholder}
                        </MenuItem>
                        {services.map((service, i) => (
                          <MenuItem key={i} value={service.title}>
                            {service.title}
                          </MenuItem>
                        ))}
                      </Styles.StyledSelect>
                    </Styles.FormGroup>

                    <Styles.FormGroup>
                      <Styles.FormLabel>{CONTACT_CONTENT.form.fields.message.label}</Styles.FormLabel>
                      <Styles.StyledTextArea
                        required
                        multiline
                        rows={5}
                        placeholder={CONTACT_CONTENT.form.fields.message.placeholder}
                        variant="outlined"
                      />
                    </Styles.FormGroup>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Styles.SubmitButton type="submit" disabled={formState === 'submitting'}>
                        {formState === 'submitting' ? (
                          <>
                            <Styles.LoadingSpinner
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                            {CONTACT_CONTENT.form.submitButton.submitting}
                          </>
                        ) : (
                          <>
                            {CONTACT_CONTENT.form.submitButton.idle} <ArrowOutward sx={{ fontSize: 18 }} />
                          </>
                        )}
                      </Styles.SubmitButton>
                    </motion.div>
                  </Styles.FormContainer>
                )}
              </Styles.RightColumn>
              </SlideIn>
            </Styles.ContentGrid>
          </Styles.MainContentContainer>
        </Styles.MainContentSection>
      </Styles.ContentWrapper>
    </Styles.ContactWrapper>
  );
};
