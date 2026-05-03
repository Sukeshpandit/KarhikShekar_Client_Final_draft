import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import CakeIcon from '@mui/icons-material/Cake';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PaymentIcon from '@mui/icons-material/Payment';
import { InputAdornment, MenuItem, Box } from '@mui/material';
import {
  StyledDialog,
  StyledDialogContent,
  FormHeader,
  CloseButton,
  FormTitle,
  FormDescription,
  FormFields,
  FormRow,
  DateRow,
  StyledTextField,
  StyledSelect,
  PriceBreakdownBox,
  PriceBreakdownTitle,
  PriceBreakdownRow,
  PriceBreakdownLabel,
  PriceBreakdownValue,
  SubmitButton,
  PrivacyNote,
  SuccessMessage,
  ErrorMessage,
} from './PlanSubscriptionForm.style';

interface PlanSubscriptionFormProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappNumber: string;
  initialPlan: {
    duration: string;
    price: string;
    perMonth?: string;
    originalPrice?: string;
    savingsLabel?: string;
  };
}

interface FormData {
  name: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  birthDate: string;
  startDate: string;
}

const parsePriceString = (price: string): number =>
  parseInt(price.replace(/[₹,]/g, ''), 10) || 0;

export const PlanSubscriptionForm = ({ 
  isOpen, 
  onClose, 
  whatsappNumber,
  initialPlan 
}: PlanSubscriptionFormProps) => {
  const months = [
    { value: '1', label: 'January' },
    { value: '2', label: 'February' },
    { value: '3', label: 'March' },
    { value: '4', label: 'April' },
    { value: '5', label: 'May' },
    { value: '6', label: 'June' },
    { value: '7', label: 'July' },
    { value: '8', label: 'August' },
    { value: '9', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    birthDate: '',
    startDate: new Date().toISOString().split('T')[0],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, startDate: new Date().toISOString().split('T')[0] }));
      setSubmitStatus('idle');
    }
  }, [isOpen, initialPlan]);

  const calculateAge = (birthDate: string): number => {
    if (!birthDate) return 0;
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const isMonthBased = (duration: string) => /month/i.test(duration);

  const calculateEndDate = (startDate: string, planDuration: string): string => {
    if (!startDate || !isMonthBased(planDuration)) return '';
    const start = new Date(startDate);
    const monthCount = parseInt(planDuration.split(' ')[0], 10);
    const end = new Date(start);
    end.setMonth(end.getMonth() + monthCount);
    return end.toISOString().split('T')[0];
  };

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
  };

  const handleInputChange = (field: keyof FormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [field]: event.target.value });
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleDateChange = (field: 'birthDay' | 'birthMonth' | 'birthYear') => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    const updatedData = { ...formData, [field]: newValue };
    
    const { birthDay, birthMonth, birthYear } = updatedData;
    if (birthDay && birthMonth && birthYear) {
      updatedData.birthDate = `${birthYear}-${birthMonth.padStart(2, '0')}-${birthDay.padStart(2, '0')}`;
    } else {
      updatedData.birthDate = '';
    }
    
    setFormData(updatedData);
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!formData.name || !formData.birthDate || !formData.startDate) {
        setSubmitStatus('error');
        setIsSubmitting(false);
        return;
      }

      const age = calculateAge(formData.birthDate);
      const totalPrice = parsePriceString(initialPlan.price);
      const advanceAmount = 2000;
      const remainingAmount = totalPrice - advanceAmount;
      const endDate = calculateEndDate(formData.startDate, initialPlan.duration);
      const scheduleLines = isMonthBased(initialPlan.duration)
        ? `🚀 Start Date: ${formatDate(formData.startDate)}\n🏁 End Date: ${formatDate(endDate)}`
        : `🚀 Start Date: ${formatDate(formData.startDate)}`;
      const perMonthLine = initialPlan.perMonth ? `📊 Per Session/Month: ${initialPlan.perMonth}` : '';
      const savingsLine = initialPlan.savingsLabel ? `🏷️ Savings: ${initialPlan.savingsLabel}` : '';

      const message = `
🏋️ *Fitness Plan Subscription*

📋 *Personal Details*
👤 Name: ${formData.name}
🎂 Age: ${age} years
📅 Date of Birth: ${formatDate(formData.birthDate)}

💳 *Plan Details*
📦 Selected Plan: ${initialPlan.duration}
💰 Total Price: ${initialPlan.price}
${perMonthLine}${savingsLine ? '\n' + savingsLine : ''}

📅 *Schedule*
${scheduleLines}

💵 *Payment Breakdown*
💳 Advance Payment: ₹${advanceAmount.toLocaleString('en-IN')}
💰 Remaining Amount: ₹${remainingAmount.toLocaleString('en-IN')}
📊 Total Amount: ${initialPlan.price}

---
Sent from Fitness Portal
      `.trim();

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitStatus('success');
      
      setTimeout(() => {
        setFormData({
          name: '',
          birthDay: '',
          birthMonth: '',
          birthYear: '',
          birthDate: '',
          startDate: new Date().toISOString().split('T')[0],
        });
        setSubmitStatus('idle');
        onClose();
      }, 2000);

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({
        name: '',
        birthDay: '',
        birthMonth: '',
        birthYear: '',
        birthDate: '',
        startDate: new Date().toISOString().split('T')[0],
      });
      setSubmitStatus('idle');
      onClose();
    }
  };

  const totalPrice = parsePriceString(initialPlan.price);
  const advanceAmount = 2000;
  const remainingAmount = totalPrice - advanceAmount;
  const endDate = calculateEndDate(formData.startDate, initialPlan.duration);

  return (
    <StyledDialog
      open={isOpen}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <StyledDialogContent>
          <CloseButton
            onClick={handleClose}
            aria-label="close"
            disabled={isSubmitting}
          >
            <CloseIcon />
          </CloseButton>
     <FormHeader>
            <FormTitle>
              Subscribe to <span className="highlight">Plan</span>
            </FormTitle>
            <FormDescription>
              Complete your subscription details and we'll connect via WhatsApp to finalize your plan.
            </FormDescription>
          </FormHeader>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' && (
              <SuccessMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ✅ Success! Redirecting you to WhatsApp...
              </SuccessMessage>
            )}

            {submitStatus === 'error' && (
              <ErrorMessage
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                ❌ Please fill in all required fields (Name, Date of Birth, Start Date)
              </ErrorMessage>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit}>
            <FormFields>
              {/* Name */}
              <StyledTextField
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange('name')}
                required
                fullWidth
                disabled={isSubmitting}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Birth Date */}
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <CakeIcon sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 20 }} />
                  <Box sx={{ color: 'rgba(255, 255, 255, 0.6)', fontWeight: 600, fontSize: '0.875rem' }}>
                    Date of Birth *
                  </Box>
                </Box>
                <DateRow>
                  <StyledSelect
                    label="Month"
                    value={formData.birthMonth}
                    onChange={handleDateChange('birthMonth')}
                    required
                    fullWidth
                    disabled={isSubmitting}
                    select
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            bgcolor: '#0a1d2c',
                            maxHeight: 300,
                            '& .MuiMenuItem-root': {
                              color: '#ffffff',
                              '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.15)' },
                              '&.Mui-selected': {
                                bgcolor: 'rgba(212, 175, 55, 0.25)',
                                '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.35)' },
                              },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="">Month</MenuItem>
                    {months.map((month) => (
                      <MenuItem key={month.value} value={month.value}>
                        {month.label}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                  <StyledSelect
                    label="Day"
                    value={formData.birthDay}
                    onChange={handleDateChange('birthDay')}
                    required
                    fullWidth
                    disabled={isSubmitting}
                    select
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            bgcolor: '#0a1d2c',
                            maxHeight: 300,
                            '& .MuiMenuItem-root': {
                              color: '#ffffff',
                              '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.15)' },
                              '&.Mui-selected': {
                                bgcolor: 'rgba(212, 175, 55, 0.25)',
                                '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.35)' },
                              },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="">Day</MenuItem>
                    {days.map((day) => (
                      <MenuItem key={day} value={day}>
                        {day}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                  <StyledSelect
                    label="Year"
                    value={formData.birthYear}
                    onChange={handleDateChange('birthYear')}
                    required
                    fullWidth
                    disabled={isSubmitting}
                    select
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            bgcolor: '#0a1d2c',
                            maxHeight: 300,
                            '& .MuiMenuItem-root': {
                              color: '#ffffff',
                              '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.15)' },
                              '&.Mui-selected': {
                                bgcolor: 'rgba(212, 175, 55, 0.25)',
                                '&:hover': { bgcolor: 'rgba(212, 175, 55, 0.35)' },
                              },
                            },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="">Year</MenuItem>
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </StyledSelect>
                </DateRow>
                {formData.birthDate && (
                  <Box sx={{ mt: 1, color: '#D4AF37', fontSize: '0.875rem', fontWeight: 600 }}>
                    Age: {calculateAge(formData.birthDate)} years
                  </Box>
                )}
              </Box>
               {/* Selected Plan — read-only display */}
              <StyledTextField
                label="Selected Plan"
                value={`${initialPlan.duration}  —  ${initialPlan.price}`}
                fullWidth
                disabled
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FitnessCenterIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiInputBase-root.Mui-disabled': {
                    color: '#D4AF37',
                    WebkitTextFillColor: '#D4AF37',
                  },
                }}
              />

              {/* Start Date */}
              <StyledTextField
                label="Plan Start Date"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange('startDate')}
                required
                fullWidth
                disabled={isSubmitting}
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarMonthIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* End Date — only for month-based plans */}
              {isMonthBased(initialPlan.duration) && (
                <StyledTextField
                  label="Plan End Date"
                  value={formatDate(endDate)}
                  fullWidth
                  disabled
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon sx={{ color: 'rgba(255,255,255,0.5)' }} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    '& .MuiInputBase-root.Mui-disabled': {
                      color: '#D4AF37',
                      WebkitTextFillColor: '#D4AF37',
                    },
                  }}
                />
              )}
{/* Price Breakdown */}
              <PriceBreakdownBox>
                <PriceBreakdownTitle>
                  <PaymentIcon sx={{ fontSize: 20, mr: 1, verticalAlign: 'middle' }} />
                  Payment Breakdown
                </PriceBreakdownTitle>

                <PriceBreakdownRow>
                  <PriceBreakdownLabel>Advance Payment</PriceBreakdownLabel>
                  <PriceBreakdownValue>₹{advanceAmount.toLocaleString('en-IN')}</PriceBreakdownValue>
                </PriceBreakdownRow>

                <PriceBreakdownRow>
                  <PriceBreakdownLabel>Remaining Amount</PriceBreakdownLabel>
                  <PriceBreakdownValue>₹{Math.max(0, remainingAmount).toLocaleString('en-IN')}</PriceBreakdownValue>
                </PriceBreakdownRow>

                <PriceBreakdownRow>
                  <PriceBreakdownLabel>Total Package</PriceBreakdownLabel>
                  <PriceBreakdownValue className="total">
                    {initialPlan.price}
                  </PriceBreakdownValue>
                </PriceBreakdownRow>

                <Box sx={{ mt: 2, textAlign: 'center', fontSize: '0.813rem', color: 'rgba(255,255,255,0.6)' }}>
                  📦 {initialPlan.duration}
                  {initialPlan.perMonth && ` | ${initialPlan.perMonth}/month`}
                  {initialPlan.savingsLabel && ` | ${initialPlan.savingsLabel}`}
                </Box>
              </PriceBreakdownBox>
            </FormFields>

            <FormRow sx={{ mt: 3 }}>
              <SubmitButton
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                variant="outlined"
              >
                Cancel
              </SubmitButton>
              <SubmitButton
                type="submit"
                disabled={isSubmitting || submitStatus === 'success'}
              >
                {isSubmitting ? 'Processing...' : submitStatus === 'success' ? 'Success!' : 'Subscribe Now'}
              </SubmitButton>
            </FormRow>

            <PrivacyNote>
              🔒 Your information is secure. We'll contact you via WhatsApp to complete the subscription.
            </PrivacyNote>
          </form>
        </StyledDialogContent>
      </motion.div>
    </StyledDialog>
  );
};