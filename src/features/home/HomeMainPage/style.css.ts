import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { style } from '@vanilla-extract/css';

export const main = style({
  width: '100vw',
  height: '100vh',
  backgroundColor: colors.white,
  padding: spacing.xl,
});

export const container = style({
  width: '100%',
  height: '100%',
  display: 'flex',
  gap: spacing.xl,
});
