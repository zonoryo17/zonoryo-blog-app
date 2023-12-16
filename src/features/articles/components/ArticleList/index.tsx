import { Article } from '@/types/article';
import { container } from './style.css';
import ArticleCard from '../ArticleCard';

type Props = {
  items: Article[];
};

export default function ArticleList({ items }: Props) {
  return (
    <div className={container}>
      {items.map((item) => (
        <ArticleCard key={item.id} item={item} />
      ))}
    </div>
  );
}
