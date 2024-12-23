import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";
import "./blog.css";

import math from "remark-math";
import "katex/dist/katex.min.css";

import remarkRehype from "remark-rehype"; // Convert Markdown to HTML nodes
import rehypeKatex from "rehype-katex"; // Render math with KaTeX
import rehypeStringify from "rehype-stringify"; // Convert to HTML string
import rehypeRaw from "rehype-raw";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);

  const processedContent = await remark()
    .use(gfm) // Support GitHub Flavored Markdown
    .use(math) // Parse math expressions
    .use(remarkRehype) // Convert Markdown to HTML nodes
    .use(rehypeKatex) // Render math with KaTeX
    .use(rehypeRaw)
    .use(rehypeStringify) // Stringify the resulting HTML
    .process(post.content);

  const contentHtml = processedContent.toString();

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
