import Image from 'next/image';
import { container, contentSection, title } from './style.css';
import type { Blog } from '@/types/blog';

type Props = {
  item: Blog;
};

export default function ArticleCard({ item }: Props) {
  return (
    <div className={container}>
      <Image
        src={item.thumbnail?.url}
        width="350"
        height="200"
        alt="画像"
        style={{ borderRadius: '6px 6px 0 0' }}
      />
      <div className={contentSection}>
        <p className={title}>{item.title}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
}
