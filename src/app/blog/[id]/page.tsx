import type { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
};

async function getPost(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getPost(id);
  return new Promise((resolve, reject) => {
    const metadata: Metadata = {
      title: `Blog | ${post.title}`,
    };
    resolve(metadata);
  });
}

const BlogDetail = async ({ params: { id } }: Props) => {
  const post = await getPost(id);
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogDetail;
