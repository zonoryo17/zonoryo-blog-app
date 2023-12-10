type BorderRadius = {
  s: string;
  m: string;
  l: string;
};

export const borderRadius = {
  s: '4px',
  m: '8px',
  l: '16px',
} as const satisfies Record<keyof BorderRadius, string>;
