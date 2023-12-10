import HomeMainPage from '@/features/home/HomeMainPage';
import { client } from '@/libs/microCMS';

//ブログ一覧取得
export const getBlogs = async () => {
  const blog = await client.get({
    endpoint: 'blogs',
  });

  return blog.contents;
};
export async function getStaticProps() {
  const allPostsData = await getBlogs();

  return {
    props: {
      allPostsData,
    },
  };
}

export const Home = (allPostData: any) => {
  console.log('元データ', allPostData);

  return <HomeMainPage {...allPostData} />;
};

export default Home;
