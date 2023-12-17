// ディレクトリ（ドメイン）ごとにオブジェクトを作成する
const BASE = {
  home: '/',
} as const satisfies Record<string, `/${string}`>;

const ARTICLES = {
  articleDetail: (id) => `/articles/${id}`,
} as const satisfies Record<string, (id: string) => `/articles/${string}`>;

// ディレクトリ（ドメイン）ごとのオブジェクトをpath内でマージする
export const path = {
  ...BASE,
  ...ARTICLES,
} as const;
