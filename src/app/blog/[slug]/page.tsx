import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";

function TagList({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-2 py-0.5 rounded-full bg-caribbean-current text-champagne text-xs font-semibold tracking-wide border border-champagne"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const safeSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(process.cwd(), "src/content/blog", `${safeSlug}.md`);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const safeSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(process.cwd(), "src/content/blog", `${safeSlug}.md`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← back to blog
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-dark-purple dark:text-champagne">{data.title}</h1>
      <TagList tags={data.tags} />
      <div className="text-sm text-dark-cyan dark:text-desert-sand mb-8">{data.date}</div>
      <article className="prose prose-dark-cyan dark:prose-champagne max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  );
} 