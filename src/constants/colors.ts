type Colors = 'white' | 'black' | 'gray' | 'cyan';

export const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#9e9e9e',
  cyan: '#30b3bd',
} as const satisfies Record<Colors, string>;
