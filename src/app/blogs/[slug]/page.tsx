import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeRaw from 'rehype-raw';
import "./blog.css";
import "katex/dist/katex.min.css";

// Cache the markdown processor instance
const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkMath)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeKatex)
  .use(rehypeStringify);

// Generate static params for all posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Make the content processing async and cached
async function processContent(content: string) {
  const result = await processor.process(content);
  return result.toString();
}

// Set default page generation to static
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour, adjust as needed

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  const contentHtml = await processContent(post.content);

  return (
    <div className="w-full p-8 max-w-2xl mx-auto">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex/dist/katex.min.css"
      />
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </div>
  );
}