export type Article = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: string;
  tags: string[];
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
};
