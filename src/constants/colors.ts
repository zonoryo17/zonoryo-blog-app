type Colors = {
  white: string;
  black: string;
  gray: string;
  cyan: string;
};

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#9e9e9e',
  cyan: '#30b3bd',
} as const satisfies Record<keyof Colors, string>;
