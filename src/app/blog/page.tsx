import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
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
        slug: file.replace(/\\.md$/, ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group border-l-2 border-transparent hover:border-black dark:hover:border-white pl-4 transition-colors"
            >
              <div className="text-xl font-semibold group-hover:underline mb-1">{post.title}</div>
              <div className="text-sm text-gray-500 mb-1">{post.date}</div>
              <div className="text-base text-gray-700 dark:text-gray-300">{post.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 