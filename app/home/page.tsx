import Link from 'next/link';

type Blog = {
  id: number;
  title: string;
};

export default function Home() {
  const blogs: Blog[] = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    title: `Blog ${index + 1}`,
  }));

  return (
    <main>
      <h2>
        <a>Lists blog</a>
      </h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link legacyBehavior href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const useClient = () => {};
