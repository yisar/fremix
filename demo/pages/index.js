import { useLoaderData } from '../../src/index';

export const loader = async () => {
  return {
    posts: ['yisar', 132],
  };
};

export default function Home() {
  const { posts } = useLoaderData() || { posts: ['yisar', 132] };

  return (
    <>
      {posts.map(post => (
        <li key={post}>{post}
        </li>
      ))}
    </>
  );
}
