import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  // Fetch all posts
  const posts = getAllPosts();

  return (
    <div className="w-full max-w-3xl p-8 mx-auto">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-6">Posts</h1>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/blogs/${post.slug}`}>
              <div className="flex flex-col p-4 rounded-md shadow-sm border border-gray-300 dark:border-gray-600 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700">
                <h2 className="text-2xl font-semibold">
                  {post.frontmatter.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.frontmatter.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.frontmatter.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
