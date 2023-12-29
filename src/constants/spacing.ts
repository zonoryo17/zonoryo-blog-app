type Spacing = 's' | 'm' | 'l' | 'xl' | 'xxl';

export const spacing = {
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
  xxl: '32px',
} as const satisfies Record<Spacing, string>;
