import type { Metadata } from "next";

import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("unable to fetch sss");
  return response.json();
}

export const metaData: Metadata = {
  title: '"Blog | Next App',
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((el: any) => (
          <li key={el.id}>
            <Link href={`/blog/${el.id}`}>{el.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Blog;
