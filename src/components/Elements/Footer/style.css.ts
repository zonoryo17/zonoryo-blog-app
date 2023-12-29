import { colors } from '@/constants/colors';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  height: 200,
  backgroundColor: colors.cyan,
});
