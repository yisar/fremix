import { useLoaderData } from '../../src/index';

export const loader = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function Home() {
  const { posts }= useLoaderData();

  return (
    <>
      {posts.map(post => (
        <div key={post.id}>
          <a href={`/${post.id}`}>{post.title}</a>
        </div>
      ))}
    </>
  );
}
