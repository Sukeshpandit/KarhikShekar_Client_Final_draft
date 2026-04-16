import { memo } from 'react';
import {
  StatCardScene,
  StatCardWrapper,
  StatCardFront,
  StatCardBack,
  StatIcon,
  StatValue,
  StatLabel,
} from './StatCard.style';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatCardComponent: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <StatCardScene>
      <StatCardWrapper>
        {/* Front face */}
        <StatCardFront>
          <StatIcon>{icon}</StatIcon>
          <StatValue>{value}</StatValue>
          <StatLabel>{label}</StatLabel>
        </StatCardFront>

        {/* Back face — gold mirror */}
        <StatCardBack>
          <StatIcon sx={{ color: '#D4AF37', background: 'radial-gradient(circle, rgba(212,175,55,0.25) 0%, transparent 70%)' }}>
            {icon}
          </StatIcon>
          <StatValue
            sx={{
              background: 'linear-gradient(135deg, #fff 0%, #D4AF37 60%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {value}
          </StatValue>
          <StatLabel sx={{ color: 'rgba(255,255,255,0.95)', letterSpacing: '0.2em' }}>
            {label}
          </StatLabel>
        </StatCardBack>
      </StatCardWrapper>
    </StatCardScene>
  );
};

export const StatCard = memo(StatCardComponent);
