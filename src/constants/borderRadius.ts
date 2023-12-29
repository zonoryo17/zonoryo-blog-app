type BorderRadius = 's' | 'm' | 'l' | 'full';

export const borderRadius = {
  s: '4px',
  m: '8px',
  l: '16px',
  full: '50%',
} as const satisfies Record<BorderRadius, string>;
