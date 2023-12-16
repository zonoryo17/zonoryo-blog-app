import { spacing } from '@/constants/spacing';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: spacing.xl,
});
