import { useRouteData } from '../../src';

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
  const { posts }= useRouteData();

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
