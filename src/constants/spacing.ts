type Spacing = {
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
};

export const spacing = {
  s: '4px',
  m: '8px',
  l: '16px',
  xl: '24px',
  xxl: '32px',
} as const satisfies Record<keyof Spacing, string>;
