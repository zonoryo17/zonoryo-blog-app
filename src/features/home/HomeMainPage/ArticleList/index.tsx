import { Blog } from '@/types/blog';
import { container } from './style.css';
import ArticleCard from '../ArticleCard';

type Props = {
  items: Blog[];
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
