type FontSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const fontSize = {
  xs: '12px',
  s: '16px',
  m: '20px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
} as const satisfies Record<FontSize, `${string}px`>;
