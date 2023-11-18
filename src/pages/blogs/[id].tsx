import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'test1',
        },
      },
      {
        params: {
          id: 'test2',
        },
      },
      {
        params: {
          id: 'test3',
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true };

  const id =
    context.params.id && Array.isArray(context.params.id)
      ? context.params.id[0]
      : context.params.id ?? '';

  return {
    props: {
      id: id,
    },
  };
};

const BlogDetail: NextPage<{ id: string }> = ({ id }) => {
  console.log('id', id);

  return <div>BlogDetail</div>;
};

export default BlogDetail;
