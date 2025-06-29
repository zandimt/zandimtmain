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
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group border-l-2 border-transparent hover:border-caribbean-current dark:hover:border-dark-cyan pl-4 transition-colors"
            >
              <div className="text-xl font-semibold group-hover:underline mb-1 text-dark-purple dark:text-champagne">{post.title}</div>
              <div className="text-sm text-dark-cyan dark:text-desert-sand mb-1">{post.date}</div>
              <div className="text-base text-dark-cyan dark:text-desert-sand">{post.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
} 