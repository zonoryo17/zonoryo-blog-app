import { colors } from '@/constants/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: colors.cyan,
});

export const profileIconBtn = style({
  border: 'none',
  borderRadius: '50%',
});

export const profileImage = style({
  objectFit: 'cover',
  borderRadius: '50%',
});
