"use client";
import Link from "next/link";
import { useState, useMemo } from "react";

interface PostMeta {
  title: string;
  date: string;
  description: string;
  slug: string;
  tags?: string[];
}

function TagList({ tags }: { tags?: string[] }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-2">
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

export default function BlogClient({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter(post =>
      post.title.toLowerCase().includes(q) ||
      post.description.toLowerCase().includes(q) ||
      (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }, [query, posts]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="search blog posts..."
        className="mb-8 w-full px-3 py-2 rounded border border-desert-sand bg-champagne dark:bg-dark-purple text-dark-purple dark:text-champagne focus:outline-none focus:ring-2 focus:ring-caribbean-current transition"
      />
      <ul className="space-y-6">
        {filtered.length === 0 && (
          <li className="text-dark-cyan dark:text-desert-sand">no posts found...</li>
        )}
        {filtered.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group border-l-2 border-transparent hover:border-caribbean-current dark:hover:border-dark-cyan pl-4 transition-colors"
            >
              <div className="text-xl font-semibold group-hover:underline mb-1 text-dark-purple dark:text-champagne">{post.title}</div>
              <TagList tags={post.tags} />
              <div className="text-sm text-dark-cyan dark:text-desert-sand mb-1">{post.date}</div>
              <div className="text-base text-dark-cyan dark:text-desert-sand">{post.description}</div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
} 