// ディレクトリ（ドメイン）ごとにオブジェクトを作成する
const BASE = {
  HOME: '/',
} as const satisfies Record<string, `/${string}`>;

const ARTICLES = {
  ARTICLE_DETAIL: (id) => `/articles/${id}`,
} as const satisfies Record<string, (id: string) => `/articles/${string}`>;

// ディレクトリ（ドメイン）ごとのオブジェクトをpath内でマージする
export const path = {
  ...BASE,
  ...ARTICLES,
} as const;
