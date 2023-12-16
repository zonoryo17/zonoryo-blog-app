import Image from 'next/image';
import { container, contentSection, thumbnail, title } from './style.css';
import type { Article } from '@/types/article';

type Props = {
  item: Article;
};

export default function ArticleCard({ item }: Props) {
  return (
    <div className={container}>
      <Image
        src={item.thumbnail?.url}
        width="350"
        height="200"
        alt="画像"
        className={thumbnail}
      />
      <div className={contentSection}>
        <p className={title}>{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
