import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import BlogClient from "./BlogClient";

interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
}

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "src/content/blog");
  const files = fs.readdirSync(postsDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const { data } = matter(fs.readFileSync(filePath, "utf8"));
      return {
        title: data.title || file,
        date: data.date || "",
        description: data.description || "",
        slug: file.replace(/\.md$/, ""),
        tags: data.tags || [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="max-w-2xl mx-auto py-16 px-4 bg-champagne dark:bg-dark-purple min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-dark-purple dark:text-champagne">blog.</h1>
        <Link
          href="/"
          className="text-caribbean-current dark:text-dark-cyan underline hover:text-dark-purple dark:hover:text-champagne transition"
        >
          ← return
        </Link>
      </div>
      <BlogClient posts={posts} />
    </main>
  );
} 