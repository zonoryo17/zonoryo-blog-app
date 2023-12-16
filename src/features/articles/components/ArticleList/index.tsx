import { Article } from '@/types/article';
import { articleCardLink, container } from './style.css';
import ArticleCard from '../ArticleCard';
import Link from 'next/link';
import { path } from '@/constants/path';

type Props = {
  items: Article[];
};

export default function ArticleList({ items }: Props) {
  return (
    <div className={container}>
      {items.map((item) => (
        <Link
          href={path.articleDetail(item.id)}
          key={item.id}
          className={articleCardLink}
        >
          <ArticleCard item={item} />
        </Link>
      ))}
    </div>
  );
}
