import HomeMainPage from '@/features/home/HomeMainPage';
import { client } from '@/libs/microCMS';

//ブログ一覧取得
export const getArticles = async () => {
  const article = await client.get({
    endpoint: 'articles',
  });

  return article.contents;
};
export async function getStaticProps() {
  const allPostsData = await getArticles();

  return {
    props: {
      allPostsData,
    },
  };
}

// FIXME: 型を修正する。
export const Home = (allPostData: any) => {
  return <HomeMainPage {...allPostData} />;
};

export default Home;
