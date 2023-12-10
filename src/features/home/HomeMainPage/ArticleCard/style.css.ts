import { borderRadius } from '@/constants/borderRadius';
import { colors } from '@/constants/colors';
import { spacing } from '@/constants/spacing';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: 350,
  height: 400,
  backgroundColor: colors.white,
  borderRadius: borderRadius.m,
  boxShadow: `5px 5px 10px 0 ${colors.gray}`,
  transition: 'transform 0.2s ease-in-out',
  ':hover': {
    cursor: 'pointer',
    transform: 'translateY(-5px)',
  },
});

export const contentSection = style({
  padding: spacing.l,
});

export const title = style({
  fontWeight: 'bold',
  marginBottom: spacing.m,
});
