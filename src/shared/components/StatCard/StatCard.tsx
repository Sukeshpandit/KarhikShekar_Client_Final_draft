import { memo } from 'react';
import { StatCardWrapper, StatIcon, StatValue, StatLabel } from './StatCard.style';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatCardComponent: React.FC<StatCardProps> = ({ label, value, icon }) => {
  return (
    <StatCardWrapper>
      <StatIcon>{icon}</StatIcon>
      <StatValue>{value}</StatValue>
      <StatLabel>{label}</StatLabel>
    </StatCardWrapper>
  );
};

export const StatCard = memo(StatCardComponent);
