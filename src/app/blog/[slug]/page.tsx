import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const safeSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(process.cwd(), "src/content/blog", `${safeSlug}.md`);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    title: data.title,
    description: data.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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
      <div className="text-sm text-dark-cyan dark:text-desert-sand mb-8">{data.date}</div>
      <article className="prose prose-dark-cyan dark:prose-champagne max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  );
} 